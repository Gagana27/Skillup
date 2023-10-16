import React, { useState } from "react";
// import BrowsePage from '../browse_page';
import CategoryList from "./category";
import { Link } from 'react-router-dom';
import VideoList from "./videos";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import ProfileSvg from "../../assets/profilepic.svg";
import { useAuthContext } from "../../hooks/UserAuthContext";
import { useLogOut } from "../../hooks/UserLogout";
// import VideoList from './videos';

export default function Header() {
  const { user } = useAuthContext();
  const { logout } = useLogOut();

  const handleClick = () => {
    logout();
  };
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleProfileClick = () => {
    setShowProfileMenu(true);
  };

  const handleSettingClick = () => {
    setShowProfileMenu(false);
  };

  return (
    <>
      <header className="relative">
        <div className="bg-bright-white pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                
                  <Link to="/">
                  <div className="flex flex-row items-center justify-center ">
                    <span className="sr-only">Workflow</span>
                    <svg
                      className="mt-1 "
                      width="80px"
                      height="80px"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="orange"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path
                        fill="#fff"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                     <span style={{fontWeight:"bold"}}>Learn.</span>
                  </div>
                  </Link>
             
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
                    id="main-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open main menu</span>
                    {/* Heroicon name: outline/menu */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <div className="hidden space-x-8 md:flex md:ml-10">
                  <div>
                    <Link
                      to={`category`}
                      className="inline-flex text-base font-medium text-gray-500  hover:text-gray-300"
                      style={{ marginLeft: "350px", marginRight: "25px" }}
                    >
                      {user ? "Categories" : ""}
                    </Link>
                  </div>

         
                  <Link
                    to="/"
                    className="text-base font-medium text-gray-500 hover:text-gray-300"
                    style={{ marginLeft: user ? "0px" : "220px" }}
                  >
                    Home
                  </Link>
                  <Link
                    to="contactus"
                    className="text-base font-medium text-gray-500 hover:text-gray-300"
                  >
                    Contact
                  </Link>
                  <Link
                    to="about"
                    className="text-base font-medium text-gray-500 hover:text-gray-300"
                  >
                    About
                  </Link>
                </div>
              </div>
              <div className="hidden space-x-8 md:flex md:ml-10">
                <div>
              
                </div>
              </div>
            </div>
            <div
              className="hidden md:flex md:items-center md:space-x-6"
              style={{ marginRight: "-40px" }}
            >
              {!user && <Link
                to="login"
                className="text-white bg-emerald-600 inline-flex items-center px-4 py-2 border  border-gray-500 text-base font-medium rounded-md text-black hover:bg-gray-700"
              >
                Log in
              </Link>}
              {!user && <Link
                to="signUp"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-bright-orange hover:bg-gray-700"
              >
                Sign up
              </Link>}
              <Link
                to="/"
                className="text-base font-medium text-gray-500 hover:text-gray-300"
              >
                {user && <img src={ProfileSvg} alt="Avatar" className="avatar" />}
              </Link>
              {user && (
                <NavDropdown
                  title={user ? user?.loginUser?.firstname : "Guest"}
                  id="basic-nav-dropdown"
                >
                  <>
                    <Dropdown.Item
                      href="/my-cart"
                      className="  inline-flex items-center px-2 py-2 border  border-gray-500 text-base font-medium rounded-md text-black hover:bg-emerald-600"
                    >
                      My Cart
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="/my-learning"
                      className="  inline-flex items-center px-2 py-2 border  border-gray-500 text-base font-medium rounded-md text-black hover:bg-emerald-600"
                    >
                      Learning
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/subscription"
                      className="  inline-flex items-center px-2 py-2 border  border-gray-500 text-base font-medium rounded-md text-black hover:bg-emerald-600"
                    >
                      Subscription
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={handleSettingClick}
                      className="  inline-flex items-center px-2 py-2 border  border-gray-500 text-base font-medium rounded-md text-black hover:bg-emerald-600"
                    >
                      Setting
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={handleClick}
                      className="  inline-flex items-center px-2 py-2 border  border-gray-500 text-base font-medium rounded-md text-black hover:bg-emerald-600"
                    >
                      Logout
                    </Dropdown.Item>
                  </>
                </NavDropdown>
              )}
            </div>
          </nav>
        </div>

        
      </header>
    </>
  );
}
