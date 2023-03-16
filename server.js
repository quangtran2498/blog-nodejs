// const express = require("express")
import express from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
import posts from './routes/post.js'
import mongoose from "mongoose";
import dotenv from "dotenv"
import { login } from "./controller/post.js";
const URI = "mongodb+srv://chikhoai001:quang123@quangtest1.yy9wmg5.mongodb.net/?retryWrites=true&w=majority"
// const client = new mongoose(url);
const app = express()
dotenv.config()
// console.log(process.env.DATABASE_URL);
const PORT = process.env.PORT || 5000
app.use(bodyParser.json({limit:"30mb"}))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true,parameterLimit:100000 ,limit: '500mb', }))
app.use("/posts",posts)
app.post("/login",login)

mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('err', err);
  });

// app.listen(port,() => {
//     console.log("quang test appp 5000")
// })