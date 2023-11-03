const express=require("express");
const { orders, success, getAllPaidVideos } = require("../controller/paymentController");

const paymentRouter=express.Router();

paymentRouter.post("/order",orders)

paymentRouter.post("/success",success)

paymentRouter.get("/getAllPaidVideos/:userId",getAllPaidVideos)

module.exports=paymentRouter