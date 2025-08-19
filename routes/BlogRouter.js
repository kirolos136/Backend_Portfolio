const express = require('express');
const { getAllBlogs, createBlog, makeLike, addComment } = require('../contollers/BlogController');
const blogRouter = express.Router();


blogRouter.get('/',getAllBlogs);
blogRouter.post('/',createBlog);
blogRouter.post('/:id/like',makeLike);
blogRouter.post('/:id/comment',addComment);

module.exports = {blogRouter};