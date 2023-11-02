import React, { useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useNavigate } from "react-router";

const RazorPay = ({amount,subcategory}) => {

    const [width, setWidth] = React.useState(window.raz);
    const [height, setHeight] = React.useState(window.innerHeight);
    const [buttonClicked, setButtonClicked] = useState(false);

    const navigate=useNavigate()
    
    const displayRazorPay=async (e,payment)=>{
        e.preventDefault();
       
        console.log("first",amount)
        const result=await axios.post("http://localhost:5000/order",{payment})
    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    console.log("order",result)
    const {  id, currency } = result.data;
    const options = {
        key: "rzp_test_ZQPw1lzZZHR076",
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
                details:subcategory
            };
            const value=await axios.post("http://localhost:5000/success",{data})
            console.log("ggggg",value.data)
            navigate("/subscription")
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
        console.log("Button clicked");
   
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
    className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 xl:py-4 xl:px-8 w-auto "
    onClick={(e) => displayRazorPay(e, amount)}
    variant="primary"
  >
    Buy Now
  </button>
        </>
    );
};

export default RazorPay;
