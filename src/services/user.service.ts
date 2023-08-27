import { User } from '../models/user.model';
import { CreateUserRequest } from '../schemas/user.schema';

export const createUser = (createUserRequest: CreateUserRequest) => {
  const user = new User(createUserRequest);
  user.save();

  return user;
};

export const findUserByEmail = (email: string) => {
  const user = User.findOne({ email });

  return user;
};
