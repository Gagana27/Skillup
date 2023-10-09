import React from "react";

export default function TechnologySearchListSection() {
  return (
    <section className="mt-3">
      <h2 className=" font-bold text-4xl align-middle text-center ">
        {" "}
        Find your own way of technologies
      </h2>

      <div className="p-8 w-3/4 mx-auto">
        <div className="bg-gray-50 pl-12 flex items-center rounded-full shadow-xl">
          <input
            className="rounded-l-full w-full py-4 px-6 h-6
             placeholder-gray-700 text-gray-900 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          />

          <div className="p-4   bg-bright-orange">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="50px" stroke="currentColor">
            <path strokeLinecap="round" strokelinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-10 gap-4">
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
            <path
              className="stroke-current text-gray-400 ..."
              fill="currentColor"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">All Categories</h2>
        </div>{" "}
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
            <path
              className="stroke-current text-gray-400 ..."
              fill="currentColor"
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"            ></path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">Development</h2>
        </div>
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
            <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
             
            ></path>
            <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
             
            ></path>
            
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">Design</h2>
        </div>{" "}
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
            <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
             ></path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">Finance</h2>
        </div>
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
           <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
             
            ></path>
            <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" >
              </path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">Photography</h2>
        </div>{" "}
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
            <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"            ></path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">Marketing</h2>
        </div>
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
            <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"            ></path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">Industry</h2>
        </div>{" "}
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
            <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"            ></path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">Cloud</h2>
        </div>
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >N
            <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"            ></path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">Hacking</h2>
        </div>{" "}
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
            <path
              classN="stroke-current text-gray-400 ..."
              fill="white"
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"sss            ></path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">Support</h2>
        </div>
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
            <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"            ></path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">Angular</h2>
        </div>{" "}
        <div className="flex justify-center items-center w-80 h-20 bg-grey-200 ">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            className="svg-inline--fa fa-google fa-w-16"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30px"
            height="30px"
          >
            <path
              className="stroke-current text-gray-400 ..."
              fill="white"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"            ></path>
          </svg>
          <h2 className=" font-medium text-lg text-gray-400 m-1 underline">SQL</h2>
        </div>
      </div>
    </section>
  );
}
