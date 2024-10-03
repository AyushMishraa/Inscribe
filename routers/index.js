const express = require("express")
const authenticate = require("../middleware/auth")
const {createPost, accessPost, accessPostByID, deletePostByID, updatePostByID, handleSignup, handleLogin} = require("../controllers/index")
const router = express.Router();

router.post('/', authenticate, createPost)
router.get('/',  accessPost)
router.get('/:id', accessPostByID)
router.delete('/:id', authenticate, deletePostByID)
router.put('/:id', updatePostByID)
router.post('/signup', handleSignup)
router.post('/login', handleLogin)

module.exports = router;