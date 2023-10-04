
const mongoose=require("mongoose");

userSchema=new mongoose.Schema({
    fname:String,
	lname:String,
    email:String,
    password:String,
},{
    collection:"UserDets",
});
mongoose.model("UserDets",userSchema)














