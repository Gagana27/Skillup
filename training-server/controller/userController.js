
const SignupUserModel=require("../mongo_schema/signupUserModel");
const nodemailer=require("nodemailer");
const fs=require("fs")
const path=require("path")
const jwt=require("jsonwebtoken")


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
    const data = await jwt.verify(token, process.env.SECRET);
    const user = await SignupUserModel.findOne({ _id: data._id }).exec();
    if (!user) {
      res.json({ Msg: "User is not exist" });
    }
    user.verified = true;
    await user.save();
    return res.redirect("http://localhost:3000/login");
    // return res.json({Message:"Email verified Successfully"})
}


module.exports={userSignup,userLogin,verifyEmailAccount}