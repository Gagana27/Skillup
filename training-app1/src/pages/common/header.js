import React from 'react'
import BrowsePage from '../browse_page';
import CategoryList from './category';
import VideoList from './videos';

export default function Header() {
  return (

    <header className="relative">
      <div className="bg-bright-white pt-6">
        <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">

              <a href="/">
                <div class="flex flex-row items-center justify-center ">
                  <span className="sr-only">Workflow</span>
                  {/* <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt /> */}
                  <svg className="mt-1 " width="80px"
                    height="80px" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke="currentColor">
                    <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                  <a href="/" className="text-base font-medium font-bold text-black hover:text-black">Learn.</a>
                </div>

              </a>
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button" className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" id="main-menu" aria-haspopup="true">
                  <span className="sr-only">Open main menu</span>
                  {/* Heroicon name: outline/menu */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>

              </div>
            </div>
            <div>
              <div className="hidden space-x-8 md:flex md:ml-10">

                <a href={`category`} className="inline-flex text-base font-medium text-gray-500  hover:text-gray-300">categories</a>

                {/* <CategoryList/>                 */}
                <a href="Home" className="text-base font-medium text-gray-500 hover:text-gray-300">Home</a>
                <a href="ContactUs" className="text-base font-medium text-gray-500 hover:text-gray-300">ContactUs</a>
                <a href="about" className="text-base font-medium text-gray-500 hover:text-gray-300">About</a>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              <div>
                {/* <a href="/Category" className="inline-flex text-base font-medium text-gray-500  hover:text-gray-300">Categories<svg className="mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> */}
                {/* <CategoryList/>  */}
                {/* <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /> */}

                {/* </svg> */}

                {/* </a> */}
              </div> </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="login" className="inline-flex items-center px-4 py-2 border  border-gray-500 text-base font-medium rounded-md text-black bg-bright-white hover:bg-gray-700">
              Log in
            </a>
            <a href="signUp" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-bright-orange hover:bg-gray-700">
              Sign up
            </a>

          </div>
        </nav>
      </div>
      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <svg className="mt-1 " width="80px"
                height="80px" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>            </div>
            <div className="-mr-2">
              <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600">
                <span className="sr-only">Close menu</span>
                {/* Heroicon name: outline/x */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="pt-5 pb-6" role="menu" aria-orientation="vertical" aria-labelledby="main-menu">

            <div className="px-2 space-y-1" role="menu">

              <CategoryList />
            </div>
            <div role="none" className="mt-6 px-5">
              <a href="/category" className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700">Start free trial</a>
            </div>
            <div role="none" className="mt-6 px-5">
              <p className="text-center text-base font-medium text-gray-500">Existing customer? <a href="#" className="text-gray-900 hover:underline">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
