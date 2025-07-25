import express from 'express'
import { addBlog, addcomment, DeleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComments, togglePublish } from '../controllers/blogController.js';
import upload from '../middleware/Multer.js';
import auth from '../middleware/Auth.js';

const blogRouter=express.Router();

blogRouter.post("/add",upload.single('image'),auth,addBlog)
blogRouter.get('/all',getAllBlogs);
blogRouter.get('/:blogId',getBlogById);
blogRouter.post('/delete',auth,DeleteBlogById);
blogRouter.post('/toggle-publish',auth,togglePublish);
blogRouter.post('/add-comment',addcomment);
blogRouter.post('/comments',getBlogComments);

blogRouter.post('/generate',auth,generateContent)
export default blogRouter