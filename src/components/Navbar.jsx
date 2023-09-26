import React from "react";

function Navbar() {
  return (
    <nav className="p-6 fixed w-screen">
      <ul className="justify-center items-center  gap-5 text-2xl hidden space-x-8 lg:flex  ">
        <li className="hover:bg-white rounded-full hover:scale-110 active:scale-95 hover:bg-opacity-25 p-3">
          HOME
        </li>
        <li className="hover:bg-white rounded-full hover:scale-110 active:scale-95 hover:bg-opacity-25 p-3">
          ABOUT
        </li>
        <li className="hover:bg-white rounded-full hover:scale-110 active:scale-95 hover:bg-opacity-25 p-3">
          PROJECTS
        </li>
        <li className="hover:bg-white rounded-full hover:scale-110 active:scale-95 hover:bg-opacity-25 p-3">
          CONTACT
        </li>
      </ul>
      <div className="lg:hidden flex justify-end">
        <button className="flex items-center px-6 py-4 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
