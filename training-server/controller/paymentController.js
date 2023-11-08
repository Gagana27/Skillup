const razorPay = require('razorpay')
const crypto = require("crypto")
const SubscriptionSchema = require("../mongo_schema/paymentModel")
const UserData=require("../mongo_schema/signupUserModel")

const orders = async (req, res) => {

    const {payment}=req.body
    try {
        const instance = new razorPay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET
        })

        const options = {
            amount: payment*100,
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex")
        }

        const order = await instance.orders.create(options);
        if (!order) {
            return res.status(500).send("Some error occured");
        }
        res.json(order)
    } catch (error) {
        res.status(500).send(error)
    }
}

const success = async (req, res) => {
    try {
        const { orderCreationId, razorpayPaymentId, razorpayOrderId, razorpaySignature,details ,videos,userId } = req.body.data
        console.log("first",details)

        const sign = razorpayOrderId + "|" + razorpayPaymentId
        const expectedSign = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET)
            .update(sign.toString()).digest("hex")

        if (razorpaySignature === expectedSign) {  
            const subscriptionVideos = await SubscriptionSchema.create({ razorpay_order_id:orderCreationId, razorpay_payment_id:razorpayPaymentId, razorpay_signature:razorpaySignature, courseName:details.name, videoId:details.videos[0]._id, userId:userId, category:details.category, subcategory:details.videos[0].subcategory, description:details.videos[0].description, price:details.priceDetails, image:details.videos[0].image
            })
            return res.status(200).json({ message: "Payment verified successfully" ,subscriptionVideos})
        }
        else {
            return res.status(200).json({ message: "Invalid signature sent" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message})
    }
}

const getAllPaidVideos=async (req,res)=>{
    
   try {
    const {userId}=req.params
    const videos=await SubscriptionSchema.find({userId:userId})
    res.status(200).json(videos)
   } catch (error) {
    if(error)
    {
        res.status(400).json(error.message)
    }
   }
}

const getAllSubscription = async (req, res) => {
    try {
      // Fetch all subscription records
      const subscriptions = await SubscriptionSchema.find();
  
      // Collect user IDs from the subscription records
      const userIds = subscriptions.map(subscription => subscription.userId);
  
      // Fetch user information for each user ID
      const users = await UserData.find({ _id: { $in: userIds } });
  
      // Create a map to quickly look up user information by user ID
      const userMap = {};
      users.forEach(user => {
        userMap[user._id] = user;
      });
  
      // Replace user IDs with user information in the subscription records
      const subscriptionsWithUserInfo = subscriptions.map(subscription => ({
        ...subscription.toObject(),
        user: userMap[subscription.userId],
      }));
  
      res.status(200).json(subscriptionsWithUserInfo);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
  };
  
  
  const getUserInfoByUserId = async (req, res) => {
 try {
        const videos = await UserData.find();
        res.status(200).json(videos);
      } catch (error) {
        console.error(error); // Log the error
        res.status(400).json({ error: error.message });
      }
  };

module.exports = { orders, success,getAllPaidVideos ,getAllSubscription,getUserInfoByUserId}