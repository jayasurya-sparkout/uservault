import express from 'express';
import  dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import { errorHandler } from './middleware/errorHandler';

dotenv.config();
const app = express();

connectDB(); // Connect to MangoDB

app.use(cors()); // Middleware
app.use(express.json()); // Middleware

app.use('/api/auth', authRoutes); // Routes

app.use(errorHandler); // Error Handler

const portNum = process.env.PORT;

app.listen(portNum, () => { // Server Listen
    console.log(`Server Running on portNum ${portNum}`);
})
