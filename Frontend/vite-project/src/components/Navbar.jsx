import React, { useState, useEffect } from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [authUser, setAuthUser] = useAuth(); // Correct destructuring
  const [sticky, setSticky] = useState(false);

  // Sticky Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Items
  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/course">Course</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><a href="/about">About</a></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white transition-all duration-300 ease-in-out"
          : "dark:bg-slate-800 dark:text-white"
      }`}
    >
      <div className="navbar max-w-screen-2xl container mx-auto px-4">
        {/* Navbar Start (Logo & Mobile Menu) */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-7 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-52 rounded-box shadow bg-white dark:bg-gray-800 dark:text-white"
            >
              {navItems}
            </ul>
          </div>

          {/* Logo */}
          <a href="/" className="text-2xl font-bold cursor-pointer">
            bookStore
          </a>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* Navbar End (Search & Auth) */}
        <div className="navbar-end space-x-3">
          {/* Search Bar */}
          <div className="hidden md:block">
            <label className="flex items-center gap-2 border px-3 py-2 rounded-md bg-white dark:bg-gray-800 dark:border-gray-700">
              <input
                type="text"
                className="grow outline-none border-none bg-white dark:bg-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-gray-600 dark:text-gray-400"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {/* Login/Logout Button */}
          {authUser ? (
            <Logout />
          ) : (
            <button
              className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Login Modal (Always Rendered but Hidden Until Triggered) */}
      <Login />
    </div>
  );
}

export default Navbar;
