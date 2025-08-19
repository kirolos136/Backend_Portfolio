const Project = require('../models/project');

const getAllProjects = async (req , res) =>{
    try{
        const projects = await Project.find();
        res.status(200).json(projects);
    }catch(error){
        res.status(500).json({
            message:"Failed to fetch the projects"
        });
    }
};

const addProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();

    console.log('Project created:', savedProject);
    res.status(201).json({ message: "Project created successfully", project: savedProject });
  } catch (err) {
    console.error('Error creating project:', err);
    res.status(500).json({ message: "Failed to add project", error: err.message });
  }
};



module.exports = {getAllProjects , addProject};