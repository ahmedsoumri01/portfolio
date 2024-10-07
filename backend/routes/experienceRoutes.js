const express = require('express');
const experienceController = require('../controllers/experienceController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
// @route   GET api/experience
// @desc    Get all experiences
// @access  Public
router.get('/', authMiddleware,experienceController.getExperiences);

// @route   GET api/experience/:id
// @desc    Get experience by id
// @access  Public
router.get('/:id',authMiddleware, experienceController.getExperienceById);

// @route   POST api/experience
// @desc    Create a new experience
// @access  Private
router.post('/',authMiddleware, experienceController.createExperience);

// @route   PUT api/experience/:id
// @desc    Update an experience
// @access  Private
router.put('/:id',authMiddleware, experienceController.updateExperience);

// @route   DELETE api/experience/:id
// @desc    Delete an experience
// @access  Private
router.delete('/:id',authMiddleware, experienceController.deleteExperience);

module.exports = router;