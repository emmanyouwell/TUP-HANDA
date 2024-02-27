const express = require('express')
const router = express.Router()
const upload = require("../utils/multer")

const {createVideo} = require('../controllers/videoController')
const {isAuthenticatedUser, authorizeRoles} = require('../middleware/auth')
router.post('/admin/video/new', isAuthenticatedUser, authorizeRoles('admin'), createVideo)
module.exports = router