import React, { useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router";



const ConfirmPassword = () => {

    const[resetPassword,setConfirm]=useState();
    const location=useLocation();

    const {userId}=location.state


const handleConfirmPassword = async (e) => {
    e.preventDefault();
    const response=await axios.post(`http://localhost:5000/api/user/resetPassword/${userId}`,{
        resetPassword
     })
    console.log("yyyy",response);
    const result = window.confirm('Are you sure you want to confirm your password?');
    if (result) {
      alert('Password confirmed!');
    } else {
      alert('Password not confirmed.');
    }
  

}
    return (
        <>
            <div className="card ">
                <div className="cardforget ">
                    <h3 className="card-titlefor align-center ">Password Change</h3>
                    <div className="card-text">
                        <form onSubmit={handleConfirmPassword}>
                            <div className="form-group">
                                <label
                                    for="exampleInputEmail1">
                                    Enter your email address and we will send you a link to reset your password.
                                </label>
                                
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="new Password"
                                    value={resetPassword}
                                    onChange={(e)=>{setConfirm(e.target.value)}}
                                />
                                <br/>
                                <input
                                    type="email"
                                    className="form-control form-control-sm"
                                    placeholder="confirm Password"
                                    onChange={(e)=>{setConfirm(e.target.value)}}

                                />
                            </div>
                            <br />
                            <button onClick={handleConfirmPassword}
                                type="submit"
                                className="forgotbutton btn-block mt-4">
                                Confirm Password
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ConfirmPassword;