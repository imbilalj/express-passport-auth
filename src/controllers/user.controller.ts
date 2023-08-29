import { Request, Response } from 'express';
import { createUser, findUserByEmail } from '../services/user.service';
import { CreateUserRequest } from '../schemas/user.schema';

export const createUserHandler = async (
  req: Request<{}, {}, CreateUserRequest>,
  res: Response
) => {
  const createUserRequest = req.body;

  let user = await findUserByEmail(createUserRequest.email);

  if (user) {
    return res.status(400).send({ message: 'Account already exists' });
  }

  user = createUser(createUserRequest);

  res.send(user);
};
