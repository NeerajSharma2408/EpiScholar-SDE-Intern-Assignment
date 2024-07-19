import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import homeRoute from '../routes/homeRoutes';
import errorHandler from '../middleware/errorHandler';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: process.env.NODE_ENV == "DEV" ? 'http://localhost:3000' : 'https://epi-scholar-client.vercel.app',
}));

const PORT = process.env.PORT ?? 3000;

// TODO: DEPLOY AND CHECK
app.use('/api', homeRoute);

app.use(errorHandler);

const server = app.listen(PORT, () => {
    console.info("SERVER Running at Port: ", PORT);
}).on("error", (err: Error)=>{
    console.error("App could not be served due to Error: ", err)
});