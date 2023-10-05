import React from 'react';
import ContactImage from '../assets/contactus.svg';
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
        <div class="min-h-screen bg-white flex">
            <div class="flex-1 flex flex-col py-12 px-4 sm:px-4 lg:flex-none lg:px-20 xl:px-24">
                <div class="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                            Contact Us
                        </h2>
                    </div>
                    <div className="mt-8">

                        <div>
                            <form className="space-y-6">
                                {/* <form action="http://localhost:3000/login" className="space-y-6" noValidate> */}

                                <div className="mt-6">
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                            Name
                                        </label>
                                        <div className="mt-1">
                                            <input id="name" name="name" type="name" autocomplete="off"
                                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                            Address
                                        </label>
                                        <div className="mt-1">
                                            <input id="address" name="address" type="address" autocomplete="off"
                                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div >
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input id="email" name="email" type="email" autocomplete="off"
                                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                                            Contact Number
                                        </label>
                                        <div className="mt-1">
                                            <input id="contact" name="contact" type="contact" autocomplete="off"
                                                required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                    </div>

                                    <br /><div>
                                        <button type='Submit' className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bright-orange hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                        className="w-full lg:inset-y-0 lg:left-0 ml-40 lg:h-full lg:w-auto lg:max-w-none"
                        src={ContactImage} alt />

                    {/* <img className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg" alt /> */}
                </div>
            </div>
        </div>
    );
}
export default ContactPage;