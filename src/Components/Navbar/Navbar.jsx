import React from "react";
import navIcon from "../../assets/products/shopping-cart.png";

const Navbar = ({ carts }) => {
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
              className="menu menu-sm z-10 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <a className=" font-extrabold text-4xl bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)] cursor-pointer bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="md:flex hidden items-center gap-3">
            <div>
              <img className="relative" src={navIcon} alt="" />{" "}
              <span className="absolute z-10 right-44 -top-1 text-white bg-red-500 p-1 rounded-full">{carts.length}</span>
            </div>
            <div>Login</div>
          </div>
          <a className="btn bg-[linear-gradient(88deg,#4f39f6_0%,#9514fa_100%)]  rounded-full text-white">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
