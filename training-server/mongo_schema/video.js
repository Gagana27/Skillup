const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    priceDetails: {
        
        currency: String,
        amount: Number,
    },
    reviews: [{
        text: String,
        author: String,  // Author of the review
        rating: Number,  // Rating for the video
    }],
    ratings: {
        type: Number,
        default: 0,  // Default rating value
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
        required: true,
    }
});

module.exports = mongoose.model('Video', videoSchema);
