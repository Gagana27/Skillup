import React from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-white">
          <div>
              <div className="relative">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
                <div className="max-w-7xl mx-auto">
                  <div className="relative shadow-xl  sm:overflow-hidden">
                    <div className="absolute inset-0">
                      <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="People working on laptops" />
                      <div className="absolute inset-0 bg-red-300" style={{mixBlendMode: 'multiply'}} />
                    </div>
                    <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                      <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-white">Take control of your</span>
                        <span className="block text-white">career</span>
                      </h1>
                      <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                      Technologies which supports all types of platform for the customer
                         in order to explore new pathways.                      </p>
                      <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                          <Link to="/freetrial" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:bg-green-500 bg-bright-orange sm:px-8">
                            Free Trial
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>             
            </div>
        </div>
    )
}
