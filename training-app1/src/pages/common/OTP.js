import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OTPPage = () => {
    const [otp, setOTP] = useState("");
    const [otpSent, setOtpSent] = useState(true);
    const [showPopup, setShowPopup] = useState(true);

    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { userId } = location.state
    console.log("location", userId)





    useEffect(() => {
        if (showPopup) {
            const timeoutId = setTimeout(() => {
                setShowPopup(false);
            }, 1000);

            return () => clearTimeout(timeoutId);
        }
    }, [showPopup]);

    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post(`http://localhost:5000/api/user/verifyOTP/${userId}`, { otp });
            console.log(response)
            if (response.data.Validate) {
                setShowPopup(true);

                navigate("/resetpassword", { state: { userId: response.data.userId } });

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
            <h1 className=" text-center mt-4 text-red-600 font-extrabold ">OTP FORM</h1>

            <div className="forgotforms bg-gray-300 shadow-md rounded container-fluid card w-4/12 mt-6 mb-10 ">
                <div className="cardforget">
                    <div className="card-text flex">
                        <form onSubmit={handleOtpSubmit}>

                            <input
                                class=" px-4 py-2 mt-2 border rounded-md "


                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => {
                                    setOTP(e.target.value);
                                }}
                            />
                            <button className="otpbtn bg-green-700 hover:bg-red-700 text-white font-bold py-2 px-8 mb-2 ml-5 rounded-lg" onClick={handleOtpSubmit}>Submit</button>


                            <br />
                        </form>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="popup">


                    <div className="otpalert alert alert-success w-6/12 text-center ml-80  ">
                        OTP has been sent successfully! Check your email.


                    </div>

                </div>

            )}


        </>
    );
};
export default OTPPage;