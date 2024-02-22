const express = require('express')
const router = express.Router()
const upload = require("../utils/multer")

const {registerUser, loginUser, logout, forgotPassword, resetPassword, updatePassword, getUserProfile, updateProfile, allUsers, getUserDetails, deleteUser, updateUser} = require('../controllers/authController')

const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth')

//User routes
router.post('/register', upload.array("avatar",10), registerUser)
router.post('/login', loginUser)
router.get('/logout', logout)
router.post('/password/forgot', forgotPassword)
router.put('/password/reset/:token', resetPassword)
router.put('/password/update', isAuthenticatedUser, updatePassword)
router.get('/me', isAuthenticatedUser, getUserProfile)
router.put('/me/update',isAuthenticatedUser, upload.array('avatar',10), updateProfile)

//Admin routes
router.get('/admin/users', isAuthenticatedUser, authorizeRoles('admin'), allUsers)
router.route('/admin/user/:id').get(isAuthenticatedUser, getUserDetails).delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser).put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)

module.exports = router