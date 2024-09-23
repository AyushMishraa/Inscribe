const express = require("express");
const connectDB = require("./connection");
require('dotenv').config();

const PORT = process.env.PORT;
const app = express();

// mongoDB Atlas connect
connectDB();

app.listen(PORT, ()=>{
    console.log("Server Started at PORT, ", PORT)
})