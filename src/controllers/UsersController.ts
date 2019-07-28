import { RequestHandler } from 'express';

export class UsersController {
  static index: RequestHandler = (req, res) => {
    res.json({ success: true, msg: 'List all Users' });
  };

  static new: RequestHandler = (req, res) => {
    res.json({ success: true, msg: 'Create new User' });
  };

  static edit: RequestHandler = (req, res) => {
    res.json({ success: true, msg: 'Edit existing User' });
  };

  static destroy: RequestHandler = (req, res) => {
    res.json({ success: true, msg: 'Deleting User', params: req.params });
  };
}
