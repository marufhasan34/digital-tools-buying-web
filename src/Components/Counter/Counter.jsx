import React from "react";

const Counter = () => {
  return (
    <div className="bg-blue-700 text-white my-10">
      <div class="flex flex-col md:flex-row container mx-auto items-center justify-around p-15 text-white">
        <div class="px-8 text-center">
          <h2 class="text-4xl font-bold">50K+</h2>
          <p className="text-gray-200 mt-1">Active Users</p>
        </div>

        <div class="h-12 md:border-r border-white/30"></div>

        <div class="px-8 text-center">
          <h2 class="text-4xl font-bold">200+</h2>
          <p className="text-gray-200 mt-1">Premium Tools</p>
        </div>

        <div class="h-12 md:border-r border-white/30"></div>

        <div class="px-8 text-center">
          <h2 class="text-4xl font-bold">4.9</h2>
          <p className="text-gray-200 mt-1">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
