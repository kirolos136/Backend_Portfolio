const Blog = require('../models/blog')

const getAllBlogs = async (req,res) =>{
    try {
        const blogs = await Blog.find();

        if(!blogs || blogs.length === 0){
            return res.status(404).json({message:"no blogs"});
        }

        res.status(200).json(blogs);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"failed to fetch blogs"})
    }
}

const createBlog = async (req,res) =>{
    try {
        const blog = new Blog(req.body);
        const createdBlog = await blog.save();
        console.log("Blog created:",createdBlog);
        res.status(201).json("blog created:", createdBlog);
    } catch (error) {
        console.error('Error creating Blog:',error);
        res.status(500).json({message:"failed to fetch the blog"});
    }
}

const makeLike = async (req , res) =>{
    const reqId = req.params.id;
    const io = req.app.get('io');

    try {
        const updatedBlog = await Blog.findOneAndUpdate({_id:reqId},
            {$inc:{likes:1}},
            {new:true}
        );

        if(!updatedBlog){
            return res.status(404).json({message:"Blog not Found"});
        }

        //emit to all clients
        io.emit('message', `Blog liked: ${blog.title}`);

        res.status(200).json({message:"Blog Liked",likes: updatedBlog.likes})
    } catch (error) {
        console.error("failed to like the blog",error);
        res.status(500).json({message:"failed to like Blog"});
    }
}

const addComment = async (req,res) =>{
    const reqId = req.params.id;
    const comment = req.body.comment;
    const io = req.app.get('io');

    try {
        const reqBlog = await Blog.findById(reqId);

        if(!reqBlog){
            return res.status(404).json({message:"blog not found"});
        }

        reqBlog.comments.push(comment);
        await reqBlog.save();

        io.emit('message', `New Comment added on Blog:${blog.title}`);

        res.status(201).json({message:"comment added"});
    } catch (error) {
        console.error("failed to add comment",error);
        res.status(500).json({message:"failed to add comment"});
    }
}

module.exports ={
    getAllBlogs,
    createBlog,
    makeLike,
    addComment
}