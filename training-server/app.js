const express=require("express");
const mongoose = require('mongoose');
const app=express();
app.use(express.json());
const cors=require("cors")
app.use(cors());
const dotenv = require("dotenv");

dotenv.config()
    const DB_URL = process.env.MONGO_URL;
    mongoose.set('strictQuery', true);

    mongoose.connect(DB_URL ,
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>
{
    console.log("connected database");
}).catch((e)=>console.log(e));


//user

 require("./mongo_schema/users");
const user=mongoose.model("UserDets");
app.post("/register",async(req,res)=>{   
    const {fname,lname,email,password} = req.body;
    try{
        await user.create({
         fname,
         lname,
         email,
         password,       
        });
        res.send({status:"ok"});
    }catch (error){
        res.send({status:"error"});
    }

     
  }); 
  require("./mongo_schema/people");
  const people=mongoose.model("People");
  app.post("/login",async(req,res)=>{   
      const {email,password} = req.body;
      try{
          await people.create({
           
           email,
           password,       
          });
          res.send({status:"ok"});
      }catch (error){
          res.send({status:"error"});
      }
  
       
    }); 

  //categories
  app.use("/",require("./categoriesCollection"));
//   require("./mongo_schema/categories");
   

  //subcategories
  // app.use("/",require("./subCategoriesCollection"));
//   require("./mongo_schema/subcategories"); 

  app.listen(5000,()=>{
    console.log("server started")
});
  
