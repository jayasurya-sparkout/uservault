const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const { errorHandler } = require('./middleware/errorHandler');

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
