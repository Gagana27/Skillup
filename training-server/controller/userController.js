
const SignupUserModel=require("../mongo_schema/signupUserModel");
const nodemailer=require("nodemailer");
const bcrypt=require("bcrypt")
const fs=require("fs")
const path=require("path")
const jwt=require("jsonwebtoken");
const forgetPasswordModel = require("../mongo_schema/forgetPasswordModel");


//generate token for signup user
const generateToken=(_id)=>{
    return  jwt.sign({_id},process.env.SECRET,{expiresIn:"1d"})
}

//user Signup controller
const userSignup=async (req,res)=>{
    const { firstname, lastName, email, password, address, contact } = req.body;
    try {
      const signupUser = await SignupUserModel.signup(firstname, lastName, email, password, address, contact)
      const token= generateToken(signupUser._id)
      signupUser.token=token;
      signupUser.save();


      //create transporter && service credentials for mail nodemailer
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "dineshlogan31@gmail.com",
          pass: "pjkv fzll lpjh wgtn",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      //html content for mailContent
      const verifyHtmlPage = fs.readFileSync(
        path.join(__dirname, "../public/pages/verification.html"),
        "utf-8"
      );
  
      const verifyHtmlContent = verifyHtmlPage.replace("{{token}}", signupUser.token);

      //describe the mail content for deliver
      const mailContent = {
        from: "dineshlogan31@gmail.com",
        to: email,
        subject: "Account Verification Email",
        html: verifyHtmlContent,
      };

      //send mail the mailcontent through the transporter
      transporter.sendMail(mailContent, (err, info) => {
        if (err) throw err;
        console.log("Email send successfully");
      });

      res.send({ status: "Verification mail send Successfully",signupUser });
    } catch (error) {
      res.send({ status: "error" });
    }
}

//user Login Controller
const userLogin=async (req,res)=>{
    const { email, password } = req.body;
    try {
        const loginUser=await SignupUserModel.login(email, password)
      res.send({ status: "Login Successfully",loginUser });
    } catch (error) {
      res.status(500).send({error:error.message});
    }
}

//Email account verification
const verifyEmailAccount=async (req,res)=>{
    const { token } = req.params;
   try {
    const data = await jwt.verify(token, process.env.SECRET);
    const user = await SignupUserModel.findOne({ _id: data._id }).exec();
    if (!user) {
      res.json({ Msg: "User is not exist" });
    }
    user.verified = true;
    await user.save();
    return res.redirect("http://localhost:3000/login");
   } catch (error) {
    console.log(error)
    res.json(error.message)
   }
    // return res.json({Message:"Email verified Successfully"})
}

//forgetPassword and logic for generate OTP
const forgetPassword=async (req,res)=>{
  const {recoveryEmail}=req.body
  const user=await SignupUserModel.findOne({email:recoveryEmail})
  console.log("user",user)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dineshlogan31@gmail.com",
      pass: "pjkv fzll lpjh wgtn",
    },
    tls: {
      rejectUnauthorized: false,
    }
  });
let OTP=Math.floor(Math.random()*10000);
while(OTP < 999)
{
  OTP=Math.floor(Math.random()*10000)
}

const forgetPasswordRecovey = fs.readFileSync(
  path.join(__dirname, "../public/pages/forgetPasswordOTP.html"),
  "utf-8"
);

const forgetPasswordHtml=forgetPasswordRecovey.replace("{{OTP}}",OTP)
  const mailContent = {
    from: "dineshlogan31@gmail.com",
    to: recoveryEmail,
    subject: "Reset Password",
    html: forgetPasswordHtml,
  };

  transporter.sendMail(mailContent, (err, info) => {
    if (err) throw err;
    console.log("Email send successfully");
  });
  const emailData=await forgetPasswordModel.create({_id:user._id,OTP:OTP})
  // setTimeout(async()=>{
  //  await  forgetPasswordOtpModel.deleteOne({_id:userId})
  //  console.log("Otp deleted Successfully")
  // },100000)
  res.status(200).json({Msg: "OTP send successfully",emailData});
}

//verifyOTP
const verifyOTP=async (req,res)=>{
  const {userId}=req.params
  const {otp}=req.body
 
  try {
    const user=await forgetPasswordModel.findById({_id:userId});
   
    if(!user)
    {
       throw Error("OTP expired")
    }
  else if(user.OTP == otp)
  {
    console.log(otp)
    res.status(200).json({Validate:true,userId})
  }
  else{
    throw Error("Invalid OTP")
  }
  } catch (err) {
    if(err)
    {
      res.status(400).json(err.message)
    }
  }
}

//resetPassword
const resetPassword=async (req,res)=>{
  const {resetPassword}=req.body
  const {userId}=req.params
 try {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(resetPassword, salt);

  const user=await SignupUserModel.findById({_id:userId})
  user.password=hash
  await user.save();
  res.json({Status:"Password reset Successfully",user})
 } catch (error) {
  if(error) console.log(error)
  res.status(400).json(error.message)
 }
}


module.exports={userSignup,userLogin,verifyEmailAccount,forgetPassword,verifyOTP,resetPassword}