import jwt from 'jsonwebtoken';

const config = useRuntimeConfig();

const SECRET_KEY = config.secretKey;

const validUser = {
  email: 'ahmet@gmail.com',
  password: '123',
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  if (email === validUser.email && password === validUser.password) {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });

    return { token, user: { email: validUser.email } };
  } else {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: 'Invalid email or password',
      }),
    );
  }
});
