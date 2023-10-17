import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OTPPage from './OTP';
import axios from 'axios';

const ForgotPassword = () => {
  const [recoveryEmail, setEmail] = useState('');
  const [isPopupOpen, setPopupOpen] = useState(true);
  const [userId, setUserId] = useState(null);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Validation for empty email
    if (!recoveryEmail.trim()) {
      setError('Invalid recovery email. Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/user/forgetPassword', {
        recoveryEmail,
      });

      console.log('OTP', response.data);
      console.log('OTP', response.data.emailData._id);
      setUserId(response.data.emailData._id);
      navigate('/otp', { state: { userId: response.data.emailData._id } });
    } catch (error) {
      console.error('Error sending reset password email:', error);
      setError('Invalid recovery email. Please try again.');
    }
  };

  return (
    <>
      <h1 className="text-center mt-4 text-blue-600 font-extrabold">Reset Password</h1>

      <div className="forgotforms bg-gray-300 shadow-md rounded container-fluid card w-4/12 mt-6 mb-10 ">
        <div className="cardforget ">
          <div className="card-text">
            {error && <div className="alert alert-danger">{error}</div>}
            <form className="space-y-6" onSubmit={handleResetPassword}>
              <div className="form-group mt-4">
                <label htmlFor="exampleInputEmail1">
                  Enter your email address and we will send you a link to reset your password.
                </label>
                <input
                  type="email"
                  className="form-control mt-4"
                  placeholder="Enter your email address"
                  value={recoveryEmail}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(null); // Clear the error when the email changes
                  }}
                />
              </div>
              <br />
              <div className="flex justify-center items-center">
                <button className="bg-green-700 hover:bg-red-700 text-white font-bold py-2 px-4 mb-2 rounded-lg">
                  Click Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
