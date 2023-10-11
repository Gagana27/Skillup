import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import OTPPage from './OTP';
import axios from 'axios'

const ForgotPassword = () => {
    const [recoveryEmail, setEmail] = useState('');
    const [isPopupOpen, setPopupOpen] = useState(true);
    const [userId, setUserId] = useState(null);
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    
    

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const response=await axios.post("http://localhost:5000/api/user/forgetPassword",{
            recoveryEmail
        })
        console.log("OTP",response.data);
        console.log("OTP",response.data.emailData._id);
        setUserId(response.data.emailData._id)
        navigate("/otp",{state:{userId:response.data.emailData._id}});
    };
    console.log("aaaa",userId)

   
    
    return (
        <>
            <div className="container-fluid card ">
                <div className="cardforget ">
                    <h3 className="card-titlefor align-center ">Reset password</h3>
                    <div className="card-text">
                        <form className="space-y-6" onSubmit={handleResetPassword}>
                            <div className="form-group">
                                <label
                                    for="exampleInputEmail1">
                                    Enter your email address and we will send you a link to reset your password.
                                </label>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="Enter your email address"
                                    value={recoveryEmail}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                            </div>
                            <br />
                            <button
                              
                                type="submit"
                                className="forgotbutton btn-block mt-4">
                                send otp
                            </button>
                        </form>

                    </div>
                   
                </div>

            </div>
        </>
    )
}

export default ForgotPassword;