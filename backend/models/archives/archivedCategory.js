const mongoose = require('mongoose');

const archivedCategorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please enter Category'],
        maxLength: [250, 'Category cannot exceed 250 characters']
    },
    slug:{
        type: String,
        unique: true
    },
    
})

module.exports = mongoose.model('ArchivedCategory', archivedCategorySchema);