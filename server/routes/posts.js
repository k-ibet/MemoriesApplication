import express from 'express'

const router = express.Router();

//functions for posts
import { getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js'

//where is postRoutes?

//http://localhost:5000/posts
router.get('/' , getPosts);
router.post('/' , createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
//a callback function to be executed when someone vists localhost:5000/

export default router