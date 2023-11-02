const razorPay = require('razorpay')
const crypto = require("crypto")
const SubscriptionSchema = require("../mongo_schema/paymentModel")

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
        res.status(500).json({ message: "Internal server Error" })
    }
}

module.exports = { orders, success }