const {model,Schema}=require("mongoose");

const SubscriptionSchema=new Schema({
    razorpay_order_id:{
        type:String,
    }
})