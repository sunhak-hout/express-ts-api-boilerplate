import { RequestHandler } from 'express';

const index: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'List all Posts' });
};

const create: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Create new Post' });
};

const edit: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Edit existing Post' });
};

const destroy: RequestHandler = (req, res) => {
  res.json({ success: true, msg: 'Deleting Post', params: req.params });
};

export default { index, create, edit, destroy };
