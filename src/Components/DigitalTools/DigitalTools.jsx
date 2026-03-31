import React from "react";
import cartImg from '../../assets/user.png'
import cartImg2 from '../../assets/package.png'
import cartImg3 from '../../assets/rocket.png'

const DigitalTools = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Get Started in 3 Steps</h2>
        <p className="mt-1">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="grid gap-10 grid-cols-1 my-5 md:grid-cols-2 lg:grid-cols-3 text-center">
        <div className="card card-body   border border-gray-200 shadow-2xl p-15 relative">
            <p className="bg-blue-700 hidden lg:block bottom-56 left-86 absolute text-white  p-2 w-10 rounded-full">01</p>
            <div><img  className="bg-gray-100 mx-auto p-2 rounded-full"  src={cartImg} alt="" /></div>
            <h4 className="font-bold text-2xl">Create Account</h4>
            <p className="text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className="card card-body  border border-gray-200 shadow-2xl p-15 relative">
            <p className="bg-blue-700 hidden lg:block bottom-56 left-86 absolute text-white  p-2 w-10 rounded-full">02</p>
            <div><img  className="bg-gray-100 mx-auto p-2 rounded-full"  src={cartImg2} alt="" /></div>
            <h4 className="font-bold text-2xl">Choose Products</h4>
            <p className="text-gray-500">Browse our catalog and select the tools that fit your needs.</p>
        </div>
        <div className="card card-body border border-gray-200 shadow-2xl p-15 relative">
            <p className="bg-blue-700 hidden lg:block bottom-56 left-86 absolute text-white  p-2 w-10 rounded-full">03</p>
            <div><img  className="bg-gray-100 mx-auto p-2 rounded-full"  src={cartImg3} alt="" /></div>
            <h4 className="font-bold text-2xl">Start Creating</h4>
            <p className="text-gray-500">Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;
