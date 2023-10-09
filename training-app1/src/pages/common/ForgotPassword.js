import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import OTPPage from './OTP';
import axios from 'axios'

const ForgotPassword = () => {
    const [recoveryEmail, setEmail] = useState('');
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const response=await axios.post("http://localhost:5000/api/user/forgetPassword",{
            recoveryEmail
        })
        console.log("OTP",response);
        navigate("/otp");
    };

   
    
    return (
        <>
            <div class="container-fluid card ">
                <div class="cardforget ">
                    <h3 class="card-titlefor align-center ">Reset password</h3>
                    <div class="card-text">
                        <form className="space-y-6" onSubmit={handleResetPassword}>
                            <div class="form-group">
                                <label
                                    for="exampleInputEmail1">
                                    Enter your email address and we will send you a link to reset your password.
                                </label>
                                <input
                                    type="email"
                                    class="form-control form-control-sm"
                                    placeholder="Enter your email address"
                                    value={recoveryEmail}
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                />
                            </div>
                            <br />
                            <button
                              
                                type="submit"
                                class="forgotbutton btn-block mt-4">
                                Send password reset email
                            </button>
                        </form>

                    </div>
                    {isPopupOpen && (
                        <OTPPage/>
                       
                    )}
                </div>

            </div>
        </>
    )
}

export default ForgotPassword;