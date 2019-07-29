import { RequestHandler } from 'express';
import * as UserService from '@services/UserService';

const index: RequestHandler = async (req, res) => {
  const users = await UserService.list();
  res.json({ success: true, users });
};

const create: RequestHandler = async (req, res) => {
  const user = await UserService.create(req.body);
  res.json({ success: true, user });
};

const edit: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Edit existing User' });
};

const destroy: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Deleting User', params: req.params });
};

export default { index, create, edit, destroy };
