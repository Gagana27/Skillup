import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OTPPage = () => {
    const [otp, setOTP] = useState("");
    const [otpSent, setOtpSent] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const {userId} = location.state
    console.log("location", userId)



    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post(`http://localhost:5000/api/user/verifyOTP/${userId}`, { otp });
            console.log(response)
            if (response.data.Validate) {
                setOtpSent(true);
                setTimeout(() => {
                    navigate("/resetpassword",{state:{userId:response.data.userId}});
                }, 1000);
            } else {
                setError(response.data);
            }
        } catch (Error) {
            console.error("Error:", Error);
            setError(Error.response.data);
        }
    };
    return (
        <>
            <div className="container-fluid card">
                <div className="cardforget">
                    <h3 className="card-titlefor align-center">Reset password</h3>
                    <div className="card-text">
                        <form onSubmit={handleOtpSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">
                                    Enter your email address, and we will send you a link to reset your password.
                                </label>
                                <div className="popup">
                                    <h2>Enter OTP</h2>
                                    <input
                                        type="text"
                                        placeholder="Enter OTP"
                                        value={otp}
                                        onChange={(e) => {
                                            setOTP(e.target.value);
                                        }}
                                    />
                                    <button onClick={handleOtpSubmit}>Submit</button>
                                    {error && (
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    )}
                                    {otpSent && (
                                        <div className="alert alert-success">
                                            OTP has been sent successfully! Check your email or phone.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default OTPPage;