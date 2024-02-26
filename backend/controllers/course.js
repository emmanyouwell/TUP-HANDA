const Course = require('../models/courses');
const Department = require('../models/department');
exports.allCourses = async (req, res, next) => {
    try{
        
        const deptId = req.query.department;
        const department = Department.find(deptId)
        let courses;
        if (deptId){
            courses = await Course.find({department: deptId});    
        }
        else{
            courses = await Course.find();
        }
        res.status(200).json({
            status: 'success',
            result: courses.length,
            courses
        })
    }catch (error){
        res.status(404).json({
            status: 'fail',
            message: error
          });
    }
   
   
    
}

exports.createCourse = async (req, res, next) => {
    const dept = await Department.find({name: "Basic Arts & Sciences Department"})
    req.body.department = dept[0]._id
    const courses = await Course.create(req.body)
    
    res.status(201).json({
        success: true,
        courses
    })
}