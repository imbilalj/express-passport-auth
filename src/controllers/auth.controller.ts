import { Request, Response } from 'express';
import { LoginRequest } from '../schemas/auth.schema';
import { findUserByEmail } from '../services/user.service';
import { signAccessToken, validatePassword } from '../services/auth.service';

export const loginUserHandler = async (
  req: Request<{}, {}, LoginRequest>,
  res: Response
) => {
  const { email, password } = req.body;

  const user = await findUserByEmail(email);

  console.log('user', user);

  if (!user) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }

  if (!user.isVerified) {
    return res.status(400).send({ message: 'Please verify your email' });
  }

  const isValidPassword = await validatePassword(password, user.password);

  if (!isValidPassword) {
    return res.status(400).send({ message: 'Invalid email or password' });
  }

  const accessToken = signAccessToken(user);

  res.send({ accessToken });
};
