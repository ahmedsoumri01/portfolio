const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

// @route   GET api/admin
// @desc    Get admin profile
// @access  Private
router.get('/:id', adminController.getAdminProfile);

// @route   PUT api/admin
// @desc    Update admin profile
// @access  Private
router.put('/:id', adminController.updateAdminProfile);

module.exports = router;
