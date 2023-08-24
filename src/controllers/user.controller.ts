import { Request, Response } from 'express';
import { createUser } from '../services/user.service';
import { CreateUserRequest } from '../schemas/user.schema';

export const createUserHandler = (
  req: Request<{}, {}, CreateUserRequest>,
  res: Response
) => {
  const createUserRequest = req.body;
  const user = createUser(createUserRequest);

  res.send(user);
};
