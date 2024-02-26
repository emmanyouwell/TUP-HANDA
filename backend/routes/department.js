const express = require('express')
const router = express.Router()

const {allDepartment, createDepartment} = require('../controllers/department')

router.get('/departments', allDepartment)
router.post('/department/new', createDepartment)
module.exports = router