import jwt from 'jsonwebtoken';
import { createProxyMiddleware } from 'http-proxy-middleware';

const config = useRuntimeConfig();

const SECRET_KEY = config.secretKey;

const proxyMiddleware = createProxyMiddleware({
  target: 'https://api.thecatapi.com/v1/images/search',
  changeOrigin: true,
  pathRewrite: { '^/api/images/search': '' },
});

export default defineEventHandler((event) => {
  const req = event.node.req;
  const res = event.node.res;

  const authHeader = event.node.req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: 'No token provided',
      }),
    );
  }
  const token = authHeader.split(' ')[1];

  try {
    jwt.verify(token, SECRET_KEY);

    return new Promise((resolve, reject) => {
      proxyMiddleware(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  } catch (err) {
    return sendError(
      event,
      createError({
        statusCode: 403,
        statusMessage: 'Invalid token',
      }),
    );
  }
});
