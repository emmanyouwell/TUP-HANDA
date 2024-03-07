const express = require('express')
const router = express.Router()
const upload = require("../utils/multer")


const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth')
const { createCategory, getCategories, getSingleCategory, updateCategory, deleteCategory, getArchivedCategories, restoreArchivedCategories, getAdminCategories} = require('../controllers/categoryController')
router.post('/admin/category/new', isAuthenticatedUser, authorizeRoles('admin'), createCategory)
router.get('/categories', getCategories)
router.get('/category/:id', getSingleCategory)
router.get('/admin/category/archive', isAuthenticatedUser, authorizeRoles('admin'), getArchivedCategories)
router.route('/admin/category/restore/:id', isAuthenticatedUser, authorizeRoles('admin')).delete(restoreArchivedCategories)
router.route('/admin/category/:id', isAuthenticatedUser, authorizeRoles('admin')).put(updateCategory).delete(deleteCategory)
router.get('/admin/category/all', isAuthenticatedUser, authorizeRoles('admin'), getAdminCategories)
module.exports = router