const express = require("express");
// const mongoose = require("mongoose");
const connectDB = require("./connection");
const BlogPosts = require("./routers/index")
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

// mongoDB Atlas connect
connectDB();

//middleware
app.use(express.json());

//routes
app.use('/api/posts',BlogPosts);

app.listen(PORT, ()=>{
    console.log("Server Started at PORT, ", PORT)
})