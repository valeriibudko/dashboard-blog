import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

const prefixConsole = '=> ';

dotenv.config();
mongoose
.connect(process.env.MONGO)
.then(() => {
        console.log(prefixConsole + 'MongoDB is connected')
    })
.catch((err) => {
        console.error(prefixConsole + err)
    })

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(prefixConsole + 'Server is running on port ' + port)
});

app.use('/api/user', userRoutes)