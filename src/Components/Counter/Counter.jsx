import React from "react";

const Counter = () => {
  return (
    <div className="bg-blue-700 text-white my-10">
      <div className="flex flex-col md:flex-row container mx-auto items-center justify-around p-15 text-white">
        <div className="px-8 text-center">
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-gray-200 mt-1">Active Users</p>
        </div>

        <div className="h-12 md:border-r border-white/30"></div>

        <div className="px-8 text-center">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-gray-200 mt-1">Premium Tools</p>
        </div>

        <div className="h-12 md:border-r border-white/30"></div>

        <div className="px-8 text-center">
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-gray-200 mt-1">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
