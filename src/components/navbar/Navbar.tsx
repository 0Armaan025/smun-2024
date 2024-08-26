import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 flex flex-col md:flex-row justify-between items-center sm:shadow-md ">
      <Link href="/">
        <div
          className="text-black text-lg font-bold flex flex-row"
          style={{ fontFamily: "Poppins" }}
        >
          <h4>SMUN</h4>
        </div>
      </Link>

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:ml-12 md:space-x-8 mt-4 md:mt-0">
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
        <Link href="/profile">
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition-all">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
