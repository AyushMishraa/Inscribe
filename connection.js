const mongoose = require("mongoose");
require('dotenv').config();

const Mongodb_URI = process.env.URI;

const connectDB = async()=>{
    try{
        await mongoose.connect(Mongodb_URI);
        console.log("MongoDB Atlas get connected successfully")
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = connectDB;