
const mongoose=require("mongoose");

userSchema=new mongoose.Schema({
    firstname: String,
    lastName: String, 
    email: String,
    password: String,
    address: String,
    contact: Number
},{
    collection:"UserDets",
});
mongoose.model("UserDets",userSchema)














