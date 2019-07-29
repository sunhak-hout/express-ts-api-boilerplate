import { router } from '@routers';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { errorHandler } from './errors';

export const app = express();

// Middlware: Parsing req.body into JSON
app.use(bodyParser.json());

// Middleware: Enable CORS policy - Access-Control-Allow-Origin
app.use(cors());

// Middleware: Enable App Routing
app.use(router);

// Middleware: Router Error Handler
app.use(errorHandler);
