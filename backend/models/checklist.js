const mongoose = require('mongoose');


const checklistSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter item name'],
    },
    description: {
        type: String,
        required: [true, 'Please enter item description'],
    },
    recommendation: {
        type: Number,
        required: [true, 'Please enter course price'],
        maxLength: [5, 'Course price cannot exceed 5 characters'],
        default: 0.0
    },
    
    images:{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('CheckList', checklistSchema);