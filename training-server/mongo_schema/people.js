const mongoose=require("mongoose");

peopleSchema=new mongoose.Schema({
   
    email:String,
    password:String
},{
    collection:"People",
});
mongoose.model("People",peopleSchema)