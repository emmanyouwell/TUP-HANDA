const express = require('express')
const router = express.Router()
const upload = require("../utils/multer")

const {createVideo, getVideos, getSingleVideo, updateVideo, deleteVideo, getAdminVideos, getArchivedVideos, restoreArchivedVideos} = require('../controllers/videoController')
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth')
router.post('/admin/video/new', isAuthenticatedUser, authorizeRoles('admin'), createVideo)
router.get('/admin/videos', getVideos)
router.get('/admin/videos/:id', getSingleVideo)
router.route('/admin/videos/:id', isAuthenticatedUser,).put(updateVideo).delete(deleteVideo)
router.get('/admin/all/videos', getAdminVideos)
router.get('/admin/videos/archive', isAuthenticatedUser, authorizeRoles('admin'), getArchivedVideos)
router.route('/admin/videos/restore/:id', isAuthenticatedUser, authorizeRoles('admin')).delete(restoreArchivedVideos)
module.exports = router