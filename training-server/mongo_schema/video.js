const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: Array,
        required: true,
    },
    
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
        required: true
    }
});
module.exports = mongoose.model('Video', videoSchema);