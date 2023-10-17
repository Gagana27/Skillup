import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const RazorPay = (props) => {

    const [width, setWidth] = React.useState(window.raz);
    const [height, setHeight] = React.useState(window.innerHeight);
    
    const displayRazorPay=async ()=>{
        const result=await axios.post("http://localhost:5000/order")
    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    console.log("order",result)
    const { amount, id, currency } = result.data;
    const options = {
        key: "rzp_test_ZQPw1lzZZHR076",
        amount: amount,
        currency:currency,
        name: "IPrimoFocus Technologies",
        description: "Test transaction",
        image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
        order_id:id,
        handler:async  (response)=> {
              console.log("razor",response)
           try {
            console.log("razor",response)
            const data = {
                orderCreationId: id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };
            const value=await axios.post("http://localhost:5000/success",{data})
            console.log("ggggg",value.data)
           } catch (error) {
            console.log(error)
           }
        },
        prefill: {
            name: "Dinesh",
            contact: "9999999999",
            email: "demo@demo.com"
        },
        notes: {
            address: "Test transaction"
        },
        theme: {
            color: "#F37254",
            hide_topbar: false
        },
    };
    var paymentObject = new window.Razorpay(options);

        paymentObject.open();

   
    }

    useEffect(() => {
        // const script = document.createElement("script");
        // script.src = "https://checkout.razorpay.com/v1/checkout.js";
        // script.async = true;
        // document.body.appendChild(script);
    }, []);

    return (
        <>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => displayRazorPay()}
                variant="primary">
                Pay
            </button>
        </>
    );
};

export default RazorPay;
