import React from 'react';
import { useLogin } from '../../hooks/UserLogin';
import LoginSvg from '../../assets/login.svg';

function LoginPage() {

  const {login, isLoading, error}=useLogin()
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, "\n", password);
    login(email,password)
 
   }

  return (
    <div class="min-h-screen bg-white flex">
      <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
              Login
            </h2>
          </div>
          <div className="mt-8">
            <div>
              <div>
                <div className="mt-1 grid grid-cols-2 gap-3">
                </div>
              </div>

            </div>
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}  >
                {/* <form action="http://localhost:3000/login" className="space-y-6" noValidate> */}
                <div className="mt-6">
                  <div >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input id="email" name="email" type="email" autocomplete="off"
                        required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div> {/* <input type="text" name="password"  placeholder="Password" /><br/><br/> */}
                  <div className="space-y-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="mt-1">
                      <input id="password" name="password" type="password" autocomplete="off"
                        required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <div>
                    <button type='Submit' className="w-full flex justify-center  mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-bright-orange hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img src={LoginSvg} alt="" height={350} width={500} />
      </div>
    </div>
  );
}

export default LoginPage;