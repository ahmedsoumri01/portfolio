const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
router.get('/', projectController.getProjects);

// @route   GET api/projects/:id
// @desc    Get project by id
// @access  Public
router.get('/:id', projectController.getProjectById);

// @route   POST api/projects
// @desc    Create a new project
// @access  Private
router.post('/',authMiddleware, projectController.createProject);

// @route   PUT api/projects/:id
// @desc    Update a project
// @access  Private
router.put('/:id',authMiddleware, projectController.updateProject);

// @route   DELETE api/projects/:id
// @desc    Delete a project
// @access  Private
router.delete('/:id',authMiddleware, projectController.deleteProject);