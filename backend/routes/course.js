const express = require('express')
const router = express.Router()

const {allCourses, createCourse} = require('../controllers/course')

router.get('/courses', allCourses)
router.post('/course/new', createCourse)
module.exports = router