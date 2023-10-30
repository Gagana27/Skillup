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
    videos: 
        
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video',
            required: true,

        },
        
   
    
  }, { timestamps: true });

  module.exports = mongoose.model('Comment', commentSchema);
