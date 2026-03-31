import React from "react";
import { IoCheckmark } from "react-icons/io5";

const Pricing = () => {
  return (
    <div className="mt-40 container mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Simple, Transparent Pricing</h2>
        <p className="mt-1">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 rounded-2xl md:grid-cols-2 lg:grid-cols-3">
        <div className="card  transition-all duration-300 hover:-translate-y-2 hover:shadow-xl card-body mt-10 shadow-2xl p-7">
          <h4 className="text-2xl font-bold">Starter</h4>
          <p className="text-gray-500">Perfect for getting started</p>
          <h4 className="text-4xl pb-9 font-bold">
            $0<span className="text-gray-500 text-xl">/month</span>
          </h4>
          <ul className="text-gray-500 space-y-2">
            <li className="flex gap-3 items-center">
              <IoCheckmark className="text-green-500" /> Access to 10 free tools
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark className="text-green-500" /> Basic templates
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark className="text-green-500" /> Community support
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark className="text-green-500" /> 1 project per month
            </li>
          </ul>
          <button className="btn w-full mt-5 rounded-full text-white bg-blue-700">
            Get Started Free
          </button>
        </div>
        <div className="card card-body mt-10 transition-all duration-300 hover:-translate-y-4 hover:shadow-xl  text-white bg-blue-800 shadow-2xl p-7">
          <h4 className="text-2xl font-bold">Pro</h4>
          <p>Best for professionals</p>
          <h4 className="text-4xl py-3 font-bold">
            $29<span className=" text-xl">/month</span>
          </h4>
          <ul className=" space-y-2">
            <li className="flex gap-3 items-center">
              <IoCheckmark />
              Access to all premium tools
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark />
              Unlimited templates
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark /> Priority support
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark /> Unlimited projects
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark /> Cloud sync
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark />Advanced analytics
            </li>
          </ul>
          <button className="btn w-full mt-5 rounded-full text-blue-600 bg-white">
            Start Pro Trial
          </button>
        </div>
        <div className="card  transition-all duration-300 hover:-translate-y-2 hover:shadow-xl card-body mt-10 shadow-2xl p-7">
          <h4 className="text-2xl font-bold">Enterprise</h4>
          <p className="text-gray-500">For teams and businesses</p>
          <h4 className="text-4xl py-3 font-bold">
            $99<span className="text-gray-500 text-xl">/month</span>
          </h4>
          <ul className="text-gray-500 space-y-2">
            <li className="flex gap-3 items-center">
              <IoCheckmark className="text-green-500" />Everything in Pro
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark className="text-green-500" /> Team collaboration
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark className="text-green-500" /> Custom integrations
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark className="text-green-500" /> Dedicated support
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark className="text-green-500" />SLA guarantee
            </li>
            <li className="flex gap-3 items-center">
              <IoCheckmark className="text-green-500" /> Custom branding
            </li>
          </ul>
          <button className="btn w-full mt-5 rounded-full text-white bg-blue-700">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
