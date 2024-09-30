const Post = require("../models/post")
const user = require("../models/user")
const jwt = require("jsonwebtoken")

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

// delete post by id
async function deletePostByID(req,res){
  try{
     const posts = await Post.findByIdAndDelete(req.params.id)
     if(!posts){
        res.status(404).json({message: "Page Not Found"})
     }
     res.json({message: "Page Removed Successfully"})
  }
  catch(err){
    console.log(err.message);
    res.status(500).send("Server Error")
  }
}

// update post by id
async function updatePostByID(req,res){
    
    const {title, content} = req.body;

    try{
    let posts = await Post.findById(req.params.id);

    if(!posts){
        res.status(404).json({message:"Page Not Found"})
    }
    posts.title = title
    posts.content = content

    const updatedPost  = await posts.save()
    res.json(updatedPost)
    }
catch(err){
     console.log(err.message)
     res.status(500).send("Server Error")
}    
}

async function handleSignup(req,res){
   const {userName, email, password} = req.body
   try{
       const name = await user.findOne({userName})

       if(name){
        res.status(400).json("User Already Exists")
       }
       
       const newUser = new user({userName, email, password})
       await newUser.save();
       res.json({message: "SignUp successfully done"})
   }
   catch(err){
     console.log(err.message);
     res.status(500).send("Server Error")
   }
}

async function handleLogin(req, res){
  const {userName, password} = req.body;
  try{
    const User = await user.findOne({userName});
     if(!User){
        res.status(404).json({message:"User Not Found"})
     }

  }
  catch(err){
    console.log(err.message);
    res.status(500).send("Server Error")
  }
}

module.exports = {
    createPost,
    accessPost,
    accessPostByID,
    deletePostByID,
    updatePostByID,
    handleSignup,
    handleLogin,
}