const express = require('express')
const router = express.Router()
const upload = require("../utils/multer")

const {createModule, getModules, getSingleModule, updateModule, deleteModule, getAdminModules} = require('../controllers/moduleController')
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth')
router.post('/admin/module/new', isAuthenticatedUser,  upload.fields([{name: 'image', maxCount: 1}, {name: 'pdf', maxCount: 1}]),authorizeRoles('admin'), createModule)
router.get('/modules', getModules)
// router.get('/admin/products', isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);
router.get('/module/:id', getSingleModule)
router.route('/admin/module/:id', isAuthenticatedUser,).put(upload.fields([{name: 'image', maxCount: 1}, {name: 'pdf', maxCount: 1}]), updateModule).delete(deleteModule)
router.get('/admin/modules/all', isAuthenticatedUser, authorizeRoles('admin'), getAdminModules)
module.exports = router