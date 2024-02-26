const mongoose = require('mongoose');


const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter department'],
        maxLength: [50, 'Department name cannot exceed 50 characters']
    },
    code: {
        type: String,
        required: [true, 'Please enter department code'],
        maxLength: [10, 'Department code cannot exceed 10 characters']
    },
    
    createdAt: {
        type: Date,
        default: Date.now
    },
    
})



module.exports = mongoose.model('Department', departmentSchema);