const express = require("express")
// const post = require("../models/post")
const {createPost, accessPost, accessPostByID, deletePostByID, updatePostByID, handleSignup, handleLogin} = require("../controllers/index")
const router = express.Router();

router.post('/', createPost)
router.get('/',accessPost)
router.get('/:id',accessPostByID)
router.delete('/:id',deletePostByID)
router.put('/:id', updatePostByID)
router.post('/Signup', handleSignup)
router.post('/login', handleLogin)

module.exports = router;