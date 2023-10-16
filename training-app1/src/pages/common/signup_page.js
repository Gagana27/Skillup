import React from 'react';
import { useSignup } from "../../hooks/UserSignup";
import { useState } from "react";
function SignUpPage() {
  const { signup, isLoading } = useSignup();
  const [firstname, setFirstname] = useState();
  const [lastName, setLastName] = useState();
  const [contact, setContact] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState({});

  const checkValidation = (e) => {
    const newError = {};
    if (e.target.firstname.value === "") {
      newError.firstname = "Enter your First Name";
    }

    if (e.target.lastName.value === "") {
      newError.lastName = "Enter your Last Name";
    }

    if (e.target.contact.value === "") {
      newError.contact = "Enter your Contact Number";
    }

    if (e.target.email.value === "") {
      newError.email = "Enter your Email";
    }

    if (e.target.password.value === "") {
      newError.password = "Enter your Password";
    }

    if (e.target.address.value === "") {
      newError.address = "Enter your Address";
    }
    setError(newError);
    return newError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;
    const contact = e.target.contact.value;

    console.log(firstname, "\n", lastName, "\n", email, "\n", password, "\n", contact, "\n", address);
    const newError = checkValidation(e);
    if (Object.keys(newError).length == 0) {
      console.log("Form submitted Successfully");
      await signup(firstname, lastName, email, password, address, contact);
    } else {
      console.log("Validation Error");
    }

    if (!firstname || !lastName || !address || !password || !email || !password) {
      alert('Please enter all required fields.');
    } else {
      
      alert({ status: "Verification mail send Successfully",signupUser });
          }
    
  }

  return (
    <div className="  g-8 flex h-full flex-wrap items-center justify-center lg:justify-between  ">

      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign up
            </h2>
          </div>
          <div className="mt-8">
            <div>
              <div>

                <div className="mt-1 grid grid-cols-2 gap-3">

                </div>
              </div>
              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                </div>

              </div>
            </div>
            <div>
              <form onSubmit={(e) => handleSubmit(e)} className='bg-white shadow-md rounded px-10 pb-8 mb-4'>
                {/* <form action="http://localhost:3000/login" className="space-y-6" noValidate> */}
                <div className="mt-6">
                  <div className="space-y-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <div className="mt-1">
                      <input id='firstname' type="text" name="firstame" value={firstname} className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />


                      {error.firstname && <span className='valid'>{error.firstname}</span>}

                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <div className="mt-1">
                      <input id="lastName" name="lastName" type="lastName" autoComplete="off" value={lastName}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      {error.lastName && <span className='valid'>{error.lastName}</span>}
                    </div>
                  </div>
                  <div >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" autoComplete="off" value={email}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      {error.email && <span className='valid'>{error.email}</span>}
                    </div>
                  </div>
                  {/* <input type="text" name="password"  placeholder="Password" /><br/><br/> */}
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input id="password" name="password" type="password" autoComplete="off" value={password}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      {error.password && <span className='valid'>{error.password}</span>}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                     Address
                    </label>
                    <div className="mt-1">
                      <input id="address" name="address" type="address" autoComplete="off" value={address}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      {error.address && <span className='valid'>{error.address}</span>}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                      Contact Number
                    </label>
                    <div className="mt-1">
                      <input id="contact" name="contact" type="contact" autoComplete="off" value={contact}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      {error.contact && <span className='valid'>{error.contact}</span>}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>

                  </div>
                  <div>
                    <button type='Submit'  onSubmit={(e) => handleSubmit(e)} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bright-orange hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Sign up
                    </button>
                  </div>
                </div>
              </form>
              
            </div>
          </div>
        </div> 
      </div>
      <div className="  w-full md:w-1/2 md:pl-2 mr-14">
        <img className="  shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-10/12 " src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?size=626&ext=jpg" alt="" />
      </div>
    

    </div>
  );
}
export default SignUpPage;