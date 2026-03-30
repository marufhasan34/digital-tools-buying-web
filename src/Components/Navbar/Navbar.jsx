import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar mt-7 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             <li><a href="#">Products</a></li>
           <li><a href="#">Features</a></li>
           <li><a href="#">Pricing</a></li>
           <li><a href="#">Testimonials</a></li>
           <li><a href="#">FAQ</a></li>
            </ul>
          </div>
          <a className=" font-extrabold text-4xl bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] cursor-pointer bg-clip-text text-transparent">DigiTools</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
           <li><a href="#">Products</a></li>
           <li><a href="#">Features</a></li>
           <li><a href="#">Pricing</a></li>
           <li><a href="#">Testimonials</a></li>
           <li><a href="#">FAQ</a></li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
            <p className="flex gap-3 items-center"><FaShoppingCart /> Login</p>
          <a className="btn bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]  rounded-full text-white">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
