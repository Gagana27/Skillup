import React from 'react'
import { Card } from 'antd';


export default function AboutPage() {

  return (
    <div>
      <h1 className="text-xl font-bold text-black hover:text-black p-2 ml-6">Our Story</h1>
      <div className="relative mx-6 bg-white shadow-2xl rounded-xl border-2 border-gray-400 mb-24">
        <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
          <div className="max-w-xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:pl-10">
            <p className="text-lg font-bold text-black">
              <span className="text-blue-700">LEARN</span>  began in 2021 with the conviction that in an ever-changing industry, professional need to
              continuously upskill themselves in order to stay relevant. since then we always focused on
              a great online learning experience by collaboration with the right instructor and industry partners.
            </p>
            <p className="text-center text-lg font-bold text-black">
              We then steadily built a strong support system around our learners.
            </p>
            <div className="p-6 flex flex-row justify-between">
              <div className="mt-6 flex flex-col items-center text-center">
                <div className="flex-shrink-0">
                  <a href="/">
                    <span className="sr-only">Lava kumar</span>
                    <img className="h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1587554801471-37976a256db0?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="p-2 text-sm font-medium text-blue-700">
                    <a href="/" className="hover:underline">
                      Lava kumar
                    </a>
                  </p>
                  <div className="text-sm font-medium text-blue-700">
                    <span>
                      CEO , Learn Academy
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col items-center text-center">
                <div className="flex-shrink-0">
                  <a href="/">
                    <span className="sr-only">Mark zuck</span>
                    <img className="h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1615945524151-d41b869675ec?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="p-2 text-sm font-medium text-blue-700">
                    <a href="/" className="hover:underline">
                      Mark zuck
                    </a>
                  </p>
                  <div className="text-sm font-medium text-blue-700">
                    <span>
                      CO Founder , Learn Academy
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col items-center text-center">
                <div className="flex-shrink-0">
                  <a href="/">
                    <span className="sr-only">james franlin</span>
                    <img className="h-20 w-20 rounded-full" src="https://images.unsplash.com/photo-1611095973362-88e8e2557e58?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="p-2 text-sm font-medium text-blue-700">
                    <a href="/" className="hover:underline">
                      james franlin
                    </a>
                  </p>
                  <div className="text-sm font-medium text-blue-700">
                    <span aria-hidden="true">
                      CO Partner , Learn Academy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Card
        style={{
          width: 300,
        }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card> */}
    </div>
  )
}
