const express = require('express');
const skillsController = require('../controllers/skillsController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET api/skills
// @desc    Get all skills
// @access  Public
router.get('/', skillsController.getSkills);

// @route   GET api/skills/:id
// @desc    Get skill by id
// @access  Public
router.get('/:id', skillsController.getSkillById);

// @route   POST api/skills
// @desc    Create a new skill
// @access  Private
router.post('/',authMiddleware, skillsController.createSkill);

// @route   PUT api/skills/:id
// @desc    Update a skill
// @access  Private
router.put('/:id',authMiddleware, skillsController.updateSkill);

// @route   DELETE api/skills/:id
// @desc    Delete a skill
// @access  Private
router.delete('/:id',authMiddleware, skillsController.deleteSkill);

module.exports = router;