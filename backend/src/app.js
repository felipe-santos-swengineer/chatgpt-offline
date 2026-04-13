import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import chatRoutes from './routes/chat.routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(chatRoutes);

export default app;