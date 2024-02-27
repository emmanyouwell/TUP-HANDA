const express = require('express')
const router = express.Router()
const upload = require("../utils/multer")

const {createVideo, getVideos, getSingleVideo, updateVideo, deleteVideo} = require('../controllers/videoController')
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth')
router.post('/admin/video/new', isAuthenticatedUser, authorizeRoles('admin'), createVideo)
router.get('/admin/videos', getVideos)
router.get('/admin/videos/:id', getSingleVideo)
router.route('/admin/videos/:id', isAuthenticatedUser,).put(updateVideo).delete(deleteVideo)
module.exports = router