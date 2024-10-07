const express = require('express');
const adminController = require('../controllers/adminController'); 
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');


// @route   GET api/admin/test
// @desc    Test admin route
// @access  Public
router.get('/test', adminController.test);

// @route   GET api/admin
// @desc    Get admin profile
// @access  Private
router.get('/profile/:id', adminController.getAdminProfile);

// @route   PUT api/admin
// @desc    Update admin profile
// @access  Private
router.put('/update-profile/:id',authMiddleware, adminController.updateAdminProfile);

module.exports = router;