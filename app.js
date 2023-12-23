import express from 'express';
import mongoose from 'mongoose';
import userrouter from './routes/user.js';
import todorouter from './routes/task.js';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { errormiddlewar } from './Middlewares/error.js';
config({
    path: './data/.env',
});



const app = express();
const port =3000;
app.use(cors({
origin:[process.env.FRONTEND_URL],
methods:['get', 'post', 'put', 'delete'],
credentials:true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(userrouter);
app.use(todorouter);



// what it will do as a middleware function

await mongoose.connect('mongodb+srv://aktyagi18052002:t6N6QpSxDvLo7cYM@cluster0.keipdks.mongodb.net/').then(()=>{
    console.log("connected")
}).catch(err => console.log(err));
app.get('/', (req, res) =>{
   res.send('Welcome');
});


app.listen(port,()=>{
    console.log(`listening on port ${process.env.port} in ${process.env.NODE_ENV} Mode`);
});

// routing spliting is the best of all the things
//using errormiddlewar
app.use(errormiddlewar);