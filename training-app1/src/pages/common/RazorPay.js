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
       
  <Button
  className="w-1/1"
  variant="primary"
  active
  onClick={(e) => {
    displayRazorPay(e, amount);
        setButtonClicked(true); 
  }}
  disabled={buttonClicked}
>
  {buttonClicked ? "Buy Now" : "Buy Now"}
</Button>
        </>
    );
};

export default RazorPay;
