import { User } from '@models';

export const list = async () => {
  const users = await User.find();
  return users;
};

export const create = async (options: CreateOptions) => {
  const user = await User.create(options);
  return user;
};

interface CreateOptions {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
