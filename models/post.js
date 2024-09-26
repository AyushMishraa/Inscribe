const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author:{
        type: String,
        ref : 'user',
        required: true
    }
})

const post = mongoose.model('post',PostSchema)

module.exports = post;