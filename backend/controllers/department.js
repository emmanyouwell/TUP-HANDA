const Department = require('../models/department')
exports.allDepartment = async (req, res, next) => {
    const depts = await Department.find()
    res.status(200).json({
        success: true,
        depts
    })
}

exports.createDepartment = async (req, res, next) => {
    const dept = await Department.create(req.body)
    res.status(201).json({
        success: true,
        dept
    })
}