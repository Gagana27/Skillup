import React from 'react';
import { useLogin } from '../../hooks/UserLogin';
import LoginSvg from '../../assets/login.svg';
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from 'antd';

import { Link } from 'react-router-dom';

function LoginPage() {

  const {login, error,isLoading}=useLogin()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error1, setError1] = useState({});

  const navigate = useNavigate();


  const checkValidation = (e) => {
    const newError = {};

    if (e.target.email.value === "") {
      newError.email = "Enter your Email";
    }

    if (e.target.password.value === "") {
      newError.password = "Enter your Password";
    }
    setError1(newError);
    return newError;
  };



  const handleSubmit = async(e) => {
    e.preventDefault();

   await login(email,password);

    const newError = checkValidation(e);
    if (Object.keys(newError).length == 0) {
      console.log("Form submitted Successfully");
    } else {
      console.log("Validation Error");
    }

  //   fetch("http://localhost:5000/login", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-origin": "*",
  //     },
  //     body: JSON.stringify({

  //       email,
  //       password
  //     }),
  //   }).then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
   }
   const forgot = () => {
    navigate("/forgotPassword");
}

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Login
            </h2>
          </div>
          <div className="mt-8">
            <div>
              <div>
                <div className="mt-1 grid grid-cols-2 gap-3">
                </div>
              </div>

            </div>
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}  >
                {/* <form action="http://localhost:3000/login" className="space-y-6" noValidate> */}
                <div className="mt-6">
                  <div >
                    <label htmlFor="email"  className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" onChange={(e) => setEmail(e.target.value)} autoComplete="off" value={email}
                         className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    {error1.email && <span className="valid">{error1.email}</span>}
                    </div>
                  </div> {/* <input type="text" name="password"  placeholder="Password" /><br/><br/> */}
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input id="password" name="password" type="password"onChange={(e) => setPassword(e.target.value)} autoComplete="off" value={password}
                         className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                     {error1.password && <span className="valid">{error1.password}</span>}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <Link to="/ForgotPassword" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </Link>
                    </div>
                  
                  </div>
                  <div>
                                {/* <Button disabled={isLoading} type="primary">Login</Button> */}
                                <button className="w-full flex justify-center  mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bright-orange hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    disabled={isLoading}
                                    type="primary">
                                    Login
                                </button>
                                {error &&
                                    <div>
                                        <Alert
                                            message={error}
                                            showIcon
                                            type="error"
                                        />
                                    </div>}
                            </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img src={LoginSvg} alt="" height={350} width={500} />
      </div>
    </div>
  );
}

export default LoginPage;