const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    // rating: { type: Number, required: true },
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SignupUsers',
        required: true,

    },
    videos: [
        
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video',
        },
    ]
    
  }, { timestamps: true });
  const Comment = mongoose.model('Comment', commentSchema);

const videoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    image: { 
        type: String,
        required: true

    },
    url: {
        type: Array,
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
  
    reviews: {
        type: String,  // Author of the review
    },
   
    // comments: [commentSchema],  // Array of comments
    // ratings: {
    //     type: Number,
    //     default: 0,
    // },

   
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
        required: true,
    },
    comments: [commentSchema], // Embedding comments within the video schema
}, { timestamps: true });
module.exports = {
  Video: mongoose.model('Video', videoSchema),
//   Comment: comment,
}

// module.exports = mongoose.model('Video', videoSchema);
