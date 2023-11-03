const express=require("express");
const { userSignup, userLogin, verifyEmailAccount, forgetPassword, verifyOTP, resetPassword , userEnterEmail, resendOTP } = require("../controller/userController");
const AdminUserController  = require("../controller/AdminUser");

const userRouter=express.Router();

//user signup router
userRouter.post("/userSignup",userSignup)

//user enteremail router
userRouter.post("/enterEmail",userEnterEmail)

//user login router
userRouter.post("/userLogin",userLogin)

//verifyUserEmailAccount
userRouter.get("/verifyAccount/:token",verifyEmailAccount)

//forgetPassword
userRouter.post("/forgetPassword",forgetPassword)

//verifyOTP
userRouter.post("/verifyOTP/:userId",verifyOTP)

//resetPassword
userRouter.post("/resetPassword/:userId",resetPassword)

//resendOtp
userRouter.post("/resendOTP/:userId",resendOTP)



userRouter.post("/adminuser_signup",AdminUserController.createDetails)
userRouter.post("/adminuser_signin",AdminUserController.LoginData)
userRouter.get("/userdata",AdminUserController.getAllUsers)


module.exports=userRouter