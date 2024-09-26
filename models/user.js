const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        unique: true,
    }
})

// middleware for hashing password
const saltRounds = 10
const myPassword = this.password;
userSchema.pre('save', async (next)=>{
   if(!this.isModified('password')){
      return next();
   }
   const salt = await bcrypt.genSalt(saltRounds)
   this.password = await bcrypt.hash(myPassword, salt);
   next();
})

// for comparing passwords
userSchema.methods.comparePassword = async (enteredPassword)=>{
    return await bcrypt.compare(enteredPassword, this.password);
}

const user = mongoose.mongoose.model("user",userSchema);
module.exports = user;

