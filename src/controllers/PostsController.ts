import { RequestHandler } from 'express';

export class PostsController {
  static index: RequestHandler = (req, res) => {
    res.json({ success: true, msg: 'List all Posts' });
  };

  static new: RequestHandler = (req, res) => {
    res.json({ success: true, msg: 'Create new Post' });
  };

  static edit: RequestHandler = (req, res) => {
    res.json({ success: true, msg: 'Edit existing Post' });
  };

  static destroy: RequestHandler = (req, res) => {
    res.json({ success: true, msg: 'Deleting Post', params: req.params });
  };
}
