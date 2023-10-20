const mongoose = require('mongoose');
const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: { 
        type: String,
        required: true

    },
    priceDetails:{
        type:String,
        require:true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }, 
    videos: [
        
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Video',
        },
    ]
    
});
module.exports = mongoose.model('Subcategory', subcategorySchema);