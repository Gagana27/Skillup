import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OTPPage = () => {
const [otp,setOTP]=useState();
    const navigate = useNavigate();

    const handleOtpSubmit =async  (e) => {
   e.preventDefault();
   const response=await axios.post(`http://localhost:5000/api/user/verifyOTP/651fd674978b8633df8ec25f`,{otp})
   console.log("hhhh",response)
        navigate("/resetpassword");
    };

    return (
        <>
            <div class="container-fluid card ">
                <div class="cardforget ">
                    <h3 class="card-titlefor align-center ">Reset password</h3>
                    <div class="card-text">
                        <form onSubmit={handleOtpSubmit}>
                            <div class="form-group">
                                <label
                                    for="exampleInputEmail1">
                                    Enter your email address and we will send you a link to reset your password.
                                </label>
                                <div className="popup">
                                    <h2>Enter OTP</h2>
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        onChange={(e)=>{setOTP(e.target.value)}}
                                        
                                    />
                                    <button onClick={handleOtpSubmit}>Submit</button>
                                </div>

                            </div>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OTPPage;