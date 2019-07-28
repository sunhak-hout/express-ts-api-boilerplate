import { RequestHandler } from 'express';
import * as UserService from '@services/UserService';

export const index: RequestHandler = async (req, res) => {
  const users = await UserService.list();
  res.json({ success: true, users });
};

export const create: RequestHandler = async (req, res) => {
  const user = await UserService.create(req.body);
  res.json({ success: true, user });
};

export const edit: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Edit existing User' });
};

export const destroy: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Deleting User', params: req.params });
};
