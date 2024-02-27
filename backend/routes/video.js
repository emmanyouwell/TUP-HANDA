const express = require('express')
const router = express.Router()
const upload = require("../utils/multer")

const {createVideo, getVideos, getSingleVideo} = require('../controllers/videoController')
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth')
router.post('/admin/video/new', isAuthenticatedUser, authorizeRoles('admin'), createVideo)
router.get('/admin/videos', getVideos)
router.get('/admin/videos/:id', getSingleVideo)
module.exports = router