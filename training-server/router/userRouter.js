const express=require("express");
const { userSignup, userLogin, verifyEmailAccount } = require("../controller/userController");

const userRouter=express.Router();

//user signup router
userRouter.post("/userSignup",userSignup)

//user login router
userRouter.post("/userLogin",userLogin)

//verifyUserEmailAccount
userRouter.get("/verifyAccount/:token",verifyEmailAccount)

module.exports=userRouter