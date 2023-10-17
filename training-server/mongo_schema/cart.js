const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    coursename: {
        type: String,
        required: true,
        unique: true
    },


    // subcategories: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Subcategory'
    // }]
});
module.exports = mongoose.model('cart', cartSchema);