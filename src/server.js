// const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
import { initDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';
import transactionRoute from './routes/transactionRoute.js'

dotenv.config();

const app = express();
//middleware
app.use(rateLimiter)
app.use(express.json())
const PORT = process.env.PORT || 5001
//import routes from './routes';

// our custom simple middleware
app.use((req,res,next)=>{
    console.log("Hey we hit a req, the method is:", req.method)
    next()
})




app.use('/api/transactions', transactionRoute);

initDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server running on PORT:", PORT)
    })
})
