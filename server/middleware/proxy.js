import { createProxyMiddleware } from 'http-proxy-middleware';

const proxyMiddleware = createProxyMiddleware({
  target: 'https://api.thecatapi.com/v1',
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
});

export default defineEventHandler((event) => {
  const req = event.node.req;
  const res = event.node.res;

  if (req.url && req.url.startsWith('/api')) {
    return new Promise((resolve, reject) => {
      proxyMiddleware(req, res, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
});
