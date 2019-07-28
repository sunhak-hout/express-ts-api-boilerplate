import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

export const app = express();

// Middlware: Parsing body params into JSON
app.use(bodyParser.json()); 

// Middleware: Enable CORS policy - Access-Control-Allow-Origin
app.use(cors());