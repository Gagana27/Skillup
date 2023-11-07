import React from 'react';
import ContactImage from '../assets/contactus.svg';
import Googlemap from '../pages/common/Googlemap'
// import { useSignup } from "../../hooks/UserSignup";



function ContactPage() {

    //   const { signup, error, isLoading } = useSignup();

    //   const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const firstname = e.target.firstname.value;
    //     const lastName = e.target.lastName.value;
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     const address = e.target.address.value;
    //     const contact = e.target.contact.value;
    //     await signup(firstname, lastName, email, password, address, contact);
    //     console.log(firstname, "\n", lastName, "\n", email, "\n", password, "\n", contact,"\n", address);
    //   }

    return (
        <>


            <h1 class="text-center mb-5 mt-2 text-xl text-black">Contact us</h1>



            <section class="text-center ml-52 mb-3">



                <div class="row">
                    <div class="col-lg-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124461.06842450322!2d77.48426584190662!3d12.881440922570695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bae3ffcc3cb3149%3A0xe208e403035e51f6!2sNo.%207%2C%201st%20Cross%2C%20Chunchanakatte%2C%20New%20Bank%20Colony%2C%20PNB%20Layout%2C%20Konanakunte%2C%20Bengaluru%2C%20Karnataka%20560062!3m2!1d12.8814538!2d77.5666677!5e0!3m2!1sen!2sin!4v1699268366670!5m2!1sen!2sin"
                            class="h-100 w-100 mr-30" allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="row mb-4">
                                    <div className="mt-15">
                                   

                                        <div>
                                            <form className="space-y-6 px-10   ml-5  bg-white shadow-md rounded ">
                                                {/* <form action="http://localhost:3000/login" className="space-y-6" noValidate> */}

                                                <div className="">
                                                    <div className="space-y-1">
                                                        <label htmlFor="name" className=" text-left block text-sm font-medium text-gray-700">
                                                            Name
                                                        </label>
                                                        <div className="mt-1">
                                                            <input id="name" name="name" type="name" autoComplete="off"
                                                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1">
                                                        <label htmlFor="address" className=" text-left block text-sm font-medium text-gray-700">
                                                            Address
                                                        </label>
                                                        <div className="mt-1">
                                                            <input id="address" name="address" type="address" autoComplete="off"
                                                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                                        </div>
                                                    </div>

                                                    <div >
                                                        <label htmlFor="email" className=" text-left block text-sm font-medium text-gray-700">
                                                            Email
                                                        </label>
                                                        <div className="mt-1">
                                                            <input id="email" name="email" type="email" autoComplete="off"
                                                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                                        </div>
                                                    </div>

                                                    <div className="space-y-1">
                                                        <label htmlFor="contact" className="text-left block text-sm font-medium text-gray-700">
                                                            Contact Number
                                                        </label>
                                                        <div className="mt-1">
                                                            <input id="contact" name="contact" type="contact" autoComplete="off"
                                                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                                        </div>
                                                    </div>

                                                    <br /><div>
                                                        <button type='Submit' className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bright-orange hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                            Submit
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            



            </section>

        </>

    );
}
export default ContactPage;