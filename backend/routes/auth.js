const express = require('express')
const router = express.Router()
const upload = require("../utils/multer")

const {registerUser, loginUser, logout, forgotPassword, resetPassword, updatePassword, getUserProfile, updateProfile, allUsers, getUserDetails, deleteUser, updateUser, getAdminUsers, updateRole, getUserPerDepartment, getUserPerCourse, addDownloadedModule, getDownloadedModules, confirmEmail, addToWatchHistory, getWatchHistory, updateExamTaken} = require('../controllers/authController')

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
router.put('/me/modules/add/:id',isAuthenticatedUser, addDownloadedModule)
router.get('/me/modules/downloaded',isAuthenticatedUser, getDownloadedModules)
router.get('/confirm/:token', confirmEmail)
router.put('/me/watchHistory/:id', isAuthenticatedUser, addToWatchHistory)
router.get('/me/watchHistory', isAuthenticatedUser, getWatchHistory)
router.put('/me/examTaken', isAuthenticatedUser, updateExamTaken)
//Admin routes
router.get('/admin/users', isAuthenticatedUser, authorizeRoles('admin'), allUsers)
router.get('/admin/users/all', isAuthenticatedUser, authorizeRoles('admin'), getAdminUsers)
router.route('/admin/user/:id').get(isAuthenticatedUser, getUserDetails).delete(isAuthenticatedUser, authorizeRoles('admin'), deleteUser).put(isAuthenticatedUser, authorizeRoles('admin'), updateUser)

router.put('/admin/user/:id/role',isAuthenticatedUser, authorizeRoles('admin'), updateRole)
router.get('/admin/departments/user', getUserPerDepartment)
router.get('/admin/courses/user', getUserPerCourse)

module.exports = router