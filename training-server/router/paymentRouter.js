const express=require("express");
const { orders, success } = require("../controller/paymentController");

const paymentRouter=express.Router();

paymentRouter.post("/order",orders)

paymentRouter.post("/success",success)

module.exports=paymentRouter