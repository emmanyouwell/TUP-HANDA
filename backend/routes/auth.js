const express = require('express');
const router = express.Router();

const {registerUser, loginUser, logout, forgotPassword, resetPassword, getUserProfile, updatePassword, updateProfile} = require('../controllers/authController');
const { isAuthenticatedUser,authorizeRoles} = require('../middleware/auth');


router.post('/register',registerUser);
router.post('/login', loginUser);
router.get('/logout', logout);
router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);
router.get('/me', isAuthenticatedUser, getUserProfile);
router.put('/me/update', isAuthenticatedUser, updateProfile)
router.put('/password/update', isAuthenticatedUser, updatePassword);
module.exports = router;