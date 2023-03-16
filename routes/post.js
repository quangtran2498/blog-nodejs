import express from 'express'
import { getPosts,createPost,updatePost,register,login } from '../controller/post.js'
const router = express.Router()

router.get("/",getPosts)
router.post("/",createPost)
router.post("/update",updatePost)
router.post("/register",register)





export default router