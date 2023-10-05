const {model,Schema}=require("mongoose");
const bcrypt=require("bcrypt")

//signup user schema
const userSchema=new Schema({
    firstname: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    }, 
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    token: {
        type: String,
      },
      verified: {
        type: Boolean,
        required: true,
        default: false,
      },
},{
    collection:"SignupUsers",
});

//signup model statics method 
userSchema.statics.signup=async function (firstname, lastName, email, password, address, contact)
{
    const salt=await bcrypt.genSalt(10);
    const hashPassword=await bcrypt.hash(password,salt);
   const user=await this.create({firstname, lastName, email, password:hashPassword, address, contact})
   return user
}

//login method static method for authentication
userSchema.statics.login=async function(email,password)
{
    const userExist=await this.findOne({email:email})
    if(!userExist)
    {
        throw Error("User doesn't exist")
    }
    else{
         const checkPassword=await bcrypt.compare(password,userExist.password)
               if(!checkPassword)
                {
                   throw  Error("Incorrect Password")
                }
              else{
                if(userExist.verified)
                {
                  return userExist
                }
                else{
                    throw Error("First Verify your Email Account")
                 }
               }
    }
}


module.exports=model("SignupUsers",userSchema)














