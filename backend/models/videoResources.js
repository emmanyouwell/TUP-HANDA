const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please enter Module title'],
        maxLength: [250, 'Course name cannot exceed 250 characters']
    },
    videoLink: {
        type: String,
        required: [true, 'Please enter Module video link'],
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
        type: mongoose.Schema.ObjectId,
        ref: 'Categories',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Videos', videoSchema);