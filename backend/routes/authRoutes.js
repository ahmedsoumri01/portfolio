const express = require('express');
const authController = require('../controllers/authController'); 
const router = express.Router();

// @route   POST api/auth/register
// @desc    Register an admin
// @access  Public
router.post('/register', authController.register);

// @route   POST api/auth/login
// @desc    Login an admin
// @access  Public
router.post('/login', authController.login);

module.exports = router;