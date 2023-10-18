const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        unique: true,
    },
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SignupUsers',
        required: true,

    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
},
{autoIndex:false}
);

module.exports = mongoose.model('cart', cartSchema);