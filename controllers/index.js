const Post = require("../models/post")
const user = require("../models/user")

// create blog post and saved in database
async function createPost(req,res){
    const {title, content, author} = req.body

    try{
        const newPost = new Post({
            title,
            content,
            author,
        })

        const post = await newPost.save();
        res.json(post);
    }
    catch(err){
       console.log(err.message);
       res.status(500).send("Server Error");
    }
}

// access blog post using POST request
async function accessPost(req,res){
   try{
    const posts = await Post.find()
    if(!posts){
        res.status(404).json({message: "Page Not Found"})
    }
    res.json(posts);
   }
   catch(err){
    console.log(err.message)
    res.status(500).send("Server Error");
   }
}

// get a post by ID
async function accessPostByID(req,res){
    try{
        const posts = await Post.findById(req.params.id)
        if(!posts){
            res.status(404).json({message: "Page Not Found"})
        }
        res.json(posts);
    }
    catch(err){
        console.log(err.message);
        res.status(500).send("Server Error");
    }
}


module.exports = {
    createPost,
    accessPost,
    accessPostByID,
}