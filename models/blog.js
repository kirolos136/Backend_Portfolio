const mongoose = require('./models');

const blogSchema = new mongoose.Schema({
    title:{type:String , required:true},
    date:{type:Date , default:Date.now},
    url:{type:String , required:true},
    likes:Number,
    comments:[String]
});

const Blog = new mongoose.model('Blog',blogSchema);

module.exports = Blog;
