import { RequestHandler } from 'express';

export const index: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'List all Posts' });
};

export const create: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Create new Post' });
};

export const edit: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Edit existing Post' });
};

export const destroy: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Deleting Post', params: req.params });
};
