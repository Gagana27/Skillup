const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: { 
        type: String,
        // required: true

    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    reviews: 
    [{ 
        user: String, 
        comment: String
     }],

    subcategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory'
    }]
});
module.exports = mongoose.model('Category', categorySchema);