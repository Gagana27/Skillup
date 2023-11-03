const {model,Schema}=require("mongoose");
const mongoose = require('mongoose');
const SubscriptionSchema=new Schema({
    razorpay_order_id:{
        type:String,
    },
    razorpay_payment_id:{
        type:String,
    },
    razorpay_signature:{
        type:String,
    },
    courseName: {
        type: String,
        required: true,
        unique: true,
    },
    videoId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'videos',
        required: true,
    },
    userId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'signupusers',
        required: true,
    }, category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
        required: true,
    }, description: {
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
})


module.exports  =mongoose.model('PaymentSuccess', SubscriptionSchema);