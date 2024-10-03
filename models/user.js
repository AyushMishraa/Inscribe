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

userSchema.pre('save', async function(next){

   if(!this.isModified('password')){
      return next();
   }
   // middleware for hashing password
    const saltRounds = 10
    const myPassword = this.password;
   const salt = await bcrypt.genSalt(saltRounds)
   this.password = await bcrypt.hash(myPassword, salt);
   next();
})

// for comparing passwords
userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}

const user = mongoose.mongoose.model("user",userSchema);
module.exports = user;

