import React from 'react'

export default function BrowsePage(props){
    return (
      <div className="relative inline-block text-left">
        <div>
        <a  className="inline-flex text-base font-medium text-gray-500 hover:text-gray-300">BrowsePage<svg className="mt-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>

        </a>

          
        </div>
      
        {/*
          Dropdown panel, show/hide based on dropdown state.
      
          For animated transitions, import { Transition } from '@headlessui/react' and wrap the next tag in this component:
      <Transition
              show={isOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            ></Transition>
        */}
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 invisible" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="py-1">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Edit</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Duplicate</a>
          </div>
          <div className="py-1">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Archive</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Move</a>
          </div>
          <div className="py-1">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Share</a>
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Add to favorites</a>
          </div>
          <div className="py-1">
            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Delete</a>
          </div>
        </div>
      </div>
    );
}