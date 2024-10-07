const Project = require('../models/Project');

//get all projects
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

//get project by id
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

//create a new project
exports.createProject = async (req, res) => {
  try {
    const newProject = new Project({
      name : req.body.name,
      coverImage : req.body.coverImage,
      images : req.body.images,
      description : req.body.description,
      stack : req.body.stack,
      sourceCode : req.body.sourceCode,
      status : req.body.status,
      liveDemo : req.body.liveDemo,
      startDate : req.body.startDate,
      endDate : req.body.endDate,
    });
    await newProject.save();
    res.json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

//update a project
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    project.name = req.body.name || project.name;
    project.coverImage = req.body.coverImage || project.coverImage;
    project.images = req.body.images || project.images;
    project.description = req.body.description || project.description;
    project.stack = req.body.stack || project.stack;
    project.sourceCode = req.body.sourceCode || project.sourceCode;
    project.status = req.body.status || project.status;
    project.liveDemo = req.body.liveDemo || project.liveDemo;
    project.startDate = req.body.startDate || project.startDate;
    project.endDate = req.body.endDate || project.endDate;

    await project.save();
    res.json(project);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

//delete a project
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    await project.deleteOne(project._id);
    res.json({ message: "Project removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}