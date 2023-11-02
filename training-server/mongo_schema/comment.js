const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: { 
        type: String, 
        required: true 
    },

    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SignupUsers',
        required: true,

    },
    username:{

        type: String,
        required: true,
    },

   
    videos:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video',
        required: true,
    },
    reviewRating:
        [{
            type: Array,
            required: true,
        }]

}, { timestamps: true });

module.exports = mongoose.model('Comment', commentSchema);
