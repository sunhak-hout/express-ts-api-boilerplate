import PingController from '@controllers/PingController';
import PostsController from '@controllers/PostsController';
import UsersController from '@controllers/UsersController';
import { Router } from 'express';

export const router = Router();

// Server Health Check
router.get('/ping', PingController.ping);

// UsersController Routers
router.get('/users', UsersController.index);
router.post('/users', UsersController.create);
router.put('/users/:userId', UsersController.edit);
router.delete('/users/:userId', UsersController.destroy);

// PostsController Routers
router.get('/posts', PostsController.index);
router.post('/posts', PostsController.create);
router.put('/posts/:postId', PostsController.edit);
router.delete('/posts/:postId', PostsController.destroy);

// 404 Route Not Found
router.all('*', (req, res) => {
  throw new Error(`${req.method}:${req.url} endpoint does not exist`);
});
