const mongoose = require('./models');

const projectSchema = new mongoose.Schema({
    name:{type:String , required:true},
    description:{type:String, required : true},
    githubUrl:String,
    stars: {type:Number , min:0}
});

const Project = new mongoose.model('Project',projectSchema);

module.exports = Project;