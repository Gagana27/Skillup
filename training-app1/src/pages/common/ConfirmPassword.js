import React, { useState } from "react";
import axios from 'axios'
import { useLocation } from "react-router";
import { Button, message } from 'antd';
import { useNavigate } from "react-router-dom";



const ConfirmPassword = () => {

    const[resetPassword,setConfirm]=useState();
    const location=useLocation();
    const navigate = useNavigate();
    const {userId}=location.state


const handleConfirmPassword = async (e) => {
    e.preventDefault();
    const response=await axios.post(`http://localhost:5000/api/user/resetPassword/${userId}`,{
        resetPassword
     })
     message.success('Password Created Successfully', 4); // '3' is the duration in seconds
     navigate('/login'); 
    console.log("yyyy",response);
    // const result = window.confirm('Are you sure you want to confirm your password?');
    // if (result) {
    //   alert('Password confirmed!');
    // } else {
    //   alert('Password not confirmed.');
    // }
  

}
    return (
        <>
             <p className=" text-center mt-4 mb-4 text-green-800 font-extrabold "> Password Change</p>

             <div class="w-full max-w-sm mx-auto">
  <form class="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleConfirmPassword}>

                       
  <div class="mb-4">
      <label class="block text-black text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"
       value={resetPassword}
       onChange={(e)=>{setConfirm(e.target.value)}}/>
    </div>

    <div class="mb-6">
      <label class="block text-black text-sm font-bold mb-2" for="confirmPassword">
        Confirm Password
      </label>
      <input class="
      shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="Confirm Password"
      value={resetPassword}
      onChange={(e)=>{setConfirm(e.target.value)}}
      />
    </div>
    <div class="mb-6 text-center">
      <button class="bg-bright-orange hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      onClick={handleConfirmPassword}
      type="submit">
        ConfirmPassword
      </button>
    </div>
                                
                               
                          
                          
                          
                        </form>
                    </div>
             
           

        </>
        
    );
}

export default ConfirmPassword;