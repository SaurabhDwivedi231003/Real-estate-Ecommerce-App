import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGOURI).then(() => {
   console.log('Connected to MongoDB !');
 })
 .catch((err) => {
   console.log(err);
 });

const app = express();


 app.listen(5000 , () => {
    console.log(`Server is listening at port : 5000`);
 })

