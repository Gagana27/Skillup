const mongoose = require('mongoose');






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
   
    
   
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
        required: true,
    },
})


module.exports  =mongoose.model('Video', videoSchema);

