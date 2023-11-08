const express=require("express");
const { orders, success, getAllPaidVideos, getAllSubscription, getUserInfoByUserId } = require("../controller/paymentController");

const paymentRouter=express.Router();

paymentRouter.post("/order",orders)

paymentRouter.post("/success",success)

paymentRouter.get("/getAllPaidVideos/:userId",getAllPaidVideos)


paymentRouter.get("/getAllSubscriptin",getAllSubscription)

paymentRouter.get("/getUserInfoByUserId",getUserInfoByUserId)


module.exports=paymentRouter