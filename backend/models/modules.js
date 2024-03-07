const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please enter Module title'],
        maxLength: [250, 'Course name cannot exceed 250 characters']
    },
    img:{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    file:{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    description:{
        type: String,
        required: [true, 'Please enter Module description'],
    },
    shortDesc:{
        type: String,
        required: [true, 'Please enter Module short description'],
    
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Modules', moduleSchema);