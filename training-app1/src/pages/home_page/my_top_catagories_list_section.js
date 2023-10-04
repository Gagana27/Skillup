import CategoryList from "../common/category";

export default function TrendingTopicsSection(props){
  return (
      <div className="relative bg-gray-50 pb-20 px-4 sm:px-6 mt-10 lg:pt-14 lg:pb-28 lg:px-8">
      <div className="absolute inset-0 bg-gray-800">
        <div className="bg-gray-800 h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-white sm:text-4xl">
            Trending Topics
          </h2>

        </div>
        <CategoryList/>

        <div className="mt-12 bg-opacity-5 max-w-3xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover rounded-md " src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="/" className="hover:underline">
                  
                  </a>
                </p>
                <a href="/" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Programming             </p>
                  <p className="mt-3 text-base text-gray-500">
                  Cloud computing relies on sharing of resources to achieve coherence and economies of scale.
Advocates of public and hybrid clouds note that cloud computing allows companies to avoid or minimize up-front IT infrastructure costs.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="/">
                    <span className="sr-only">Roel Aufderehar</span>
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1504270997636-07ddfbd48945?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dGVobm9sb2d5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="/" className="hover:underline">
                      mark Zuck
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="2023-03-16">
                      Mar 16, 2023
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span>
                      10 hours 
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full max-w-3xl object-cover" src="https://images.unsplash.com/photo-1611095567219-8fa7d4d8bf48?ixid=MXwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="/" className="hover:underline">
                    
                  </a>
                </p>
                <a href="/" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Web Development 
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                  A web development engineer introduces processes, tools, and methodologies to balance needs throughout the software development life cycle, from coding and deployment, to maintenance and updates.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center ">
                <div className="flex-shrink-0">
                  <a href="/">
                    <span className="sr-only">Brenna Goyette</span>
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1506438352327-36e0db62bf21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVobm9sb2d5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="/" className="hover:underline">
                      Jeff bozes
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="2023-03-10">
                      Mar 10, 2023
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span>
                      5 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
    
        {/*   <div className="flex flex-col rounded-lg bg-gray-500 shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  <a href="/" className="hover:underline">
                    
                  </a>
                </p>
                <a href="/" className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Marketing
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                  Performing any job requires the use of multiple skill sets. Many jobs require skills related to physical or digital tools—these are often called "technical skills.
                  </p>
                </a>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <a href="/">
                    <span className="sr-only">Daniela Metz</span>
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=UgujetFY6E&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </a>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    <a href="/" className="hover:underline">
                      Mike hussen
                    </a>
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="2023-02-12">
                      Feb 12, 2023
                    </time>
                    <span aria-hidden="true">
                      &middot;
                    </span>
                    <span>
                      6 Hours
                    </span>
                  </div>
                </div> */}
            {/*  </div>
             </div>
            
          </div>
        </div> */}
    </div>
    </div>
    </div>
  );
}




