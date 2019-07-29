import { User } from '@models';

const list = async () => {
  const users = await User.find();
  return users;
};

const create = async (options: CreateOptions) => {
  const user = await User.create(options);
  return user;
};

export default { list, create };

interface CreateOptions {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
