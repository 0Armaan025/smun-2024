import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div
        className="text-black text-lg font-bold flex flex-row"
        style={{ fontFamily: "Poppins" }}
      >
        <h4>SMUN</h4>
      </div>

      <div className="flex space-x-8 ml-12">
        <a href="/" className="text-gray-700 transition-all hover:text-black">
          Home
        </a>
        <a
          href="/about"
          className="text-gray-700 transition-all hover:text-black"
        >
          Learn
        </a>
      </div>

      <div>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition-all">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
