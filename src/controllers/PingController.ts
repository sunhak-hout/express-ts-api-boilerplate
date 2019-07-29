import { RequestHandler } from 'express';

const ping: RequestHandler = (req, res) => {
  res.json({ msg: 'OK' });
};

export default { ping };
