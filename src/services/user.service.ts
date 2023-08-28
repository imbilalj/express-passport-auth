import { UserModel } from '../models/user.model';
import { CreateUserRequest } from '../schemas/user.schema';

export const createUser = (createUserRequest: CreateUserRequest) => {
  const user = new UserModel(createUserRequest);
  user.save();

  return user;
};

export const findUserByEmail = (email: string) => {
  const user = UserModel.findOne({ email });

  return user;
};
