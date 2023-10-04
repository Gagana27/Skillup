export default function CaseStudySection(props){
  return (
    <div className="px-8 mt-16 mb-8 " >
    <div className="text-center">
          <h2 className="text-1xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Case Studies
          </h2> 
    </div>
                  <ul className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li className="col-span-1 flex shadow-sm rounded-md">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm font-medium rounded-l-md">
            ST
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a href="/" className="text-gray-900 font-medium hover:text-gray-600"> Software Automation</a>
              <p className="text-gray-500">200 Members</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Open options</span>
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>
        </li>
        <li className="col-span-1 flex shadow-sm rounded-md">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md">
            DV
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a href="/" className="text-gray-900 font-medium hover:text-gray-600">Deveops Engineer</a>
              <p className="text-gray-500">500 Members</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Open options</span>
                {/* Heroicon name: solid/dots-vertical */}
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>
        </li>
        <li className="col-span-1 flex shadow-sm rounded-md">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-yellow-500 text-white text-sm font-medium rounded-l-md">
            AJS
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a href="/" className="text-gray-900 font-medium hover:text-gray-600">AngularTemplates</a>
              <p className="text-gray-500">600 Members</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Open options</span>
                {/* Heroicon name: solid/dots-vertical */}
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>
        </li>
        <li className="col-span-1 flex shadow-sm rounded-md">
          <div className="flex-shrink-0 flex items-center justify-center w-16 bg-green-500 text-white text-sm font-medium rounded-l-md">
            RJ
          </div>
          <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
            <div className="flex-1 px-4 py-2 text-sm truncate">
              <a href="/" className="text-gray-900 font-medium hover:text-gray-600">ReactJS </a>
              <p className="text-gray-500">8 Members</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Open options</span>
                {/* Heroicon name: solid/dots-vertical */}
                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}