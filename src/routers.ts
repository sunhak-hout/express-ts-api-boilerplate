import { Router } from 'express';
import { PostsController } from './controllers/PostsController';
import { UsersController } from './controllers/UsersController';

export const router = Router();

// Server Health Check
router.get('/ping', (req, res) => res.json({ msg: 'PONG' }));

// UsersController Routers
router.get('/users', UsersController.index);
router.post('/users', UsersController.new);
router.put('/users/:userId', UsersController.edit);
router.delete('/users/:userId', UsersController.destroy);

// PostsController Routers
router.get('/posts', PostsController.index);
router.post('/posts', PostsController.new);
router.put('/posts/:userId', PostsController.edit);
router.delete('/posts/:userId', PostsController.destroy);

// 404 Route Not Found
router.all('*', (req, res) => {
  throw new Error(`${req.method}:${req.url} endpoint does not exist`);
});
