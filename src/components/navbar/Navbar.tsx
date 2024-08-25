import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 flex flex-col md:flex-row justify-between items-center ">
      <div
        className="text-black text-lg font-bold flex flex-row"
        style={{ fontFamily: "Poppins" }}
      >
        <h4>SMUN</h4>
      </div>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
        <a
          href="/"
          className="text-gray-700 transition-all hover:text-black text-center"
        >
          Home
        </a>
        <a
          href="/about"
          className="text-gray-700 transition-all hover:text-black text-center"
        >
          Learn
        </a>
      </div>

      <div className="mt-4 md:mt-0">
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
