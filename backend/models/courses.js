const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter Course name'],
        maxLength: [250, 'Course name cannot exceed 250 characters']
    },
    code:{
        type: String,
        required: [true, 'Please enter Course name'],
        maxLength: [50, 'Course name cannot exceed 50 characters']
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Department'
    },
})

module.exports = mongoose.model('Course', courseSchema);