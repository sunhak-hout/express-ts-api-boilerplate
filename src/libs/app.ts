import { router } from '@routers';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './errors';

export const app = express();

// Middleware: Log Request
app.use(morgan('tiny'));

// Middlware: Parsing req.body into JSON
app.use(bodyParser.json());

// Middleware: Enable CORS policy - Access-Control-Allow-Origin
app.use(cors());

// Middleware: Enable App Routing
app.use(router);

// Middleware: Router Error Handler
app.use(errorHandler);
