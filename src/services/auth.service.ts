import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

export const validatePassword = async (
  plainPassword: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const signAccessToken = (user: User) => {
  const accessToken = jwt.sign(
    { _id: user._id, email: user.email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: '1d',
    }
  );

  return accessToken;
};
