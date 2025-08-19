const express = require('express');
const projectRouter = express.Router();
const {getAllProjects , addProject} =require('../contollers/ProjectController')

projectRouter.get('/',getAllProjects);
projectRouter.post('/',addProject);

module.exports = {projectRouter};