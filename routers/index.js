const express = require("express")
// const post = require("../models/post")
const {createPost, accessPost, accessPostByID} = require("../controllers/index")
const router = express.Router();

router.post('/', createPost)
router.get('/',accessPost)
router.get('/:id',accessPostByID)

module.exports = router;