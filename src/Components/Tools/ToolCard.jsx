import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { toast } from "react-toastify";

const ToolCard = ({ tool, carts, setCarts }) => {
  const [isBuy, setIsBuy] = useState(false);
  const badgeConfig = {
    "Best Seller": "bg-yellow-100 text-yellow-600",
    Popular: "bg-purple-100 text-purple-600",
    New: "bg-green-100 text-green-600",
    Recommended: "bg-blue-100 text-blue-600",
    Trending: "bg-pink-100 text-pink-600",
    Starter: "bg-gray-100 text-gray-600",
  };

  const handleIsBuy = () => {
    setIsBuy(true);

    const isFound = carts.find((item) => item.id === tool.id);
    if (isFound) {
      toast.error("Tool already in cart");
      return;
    }
    setCarts([...carts, tool]);
    toast.success("Tool added to cart ");
  };

  return (
    <div
      className="card card-body border border-gray-200 shadow-2xl "
      key={tool.id}
    >
      <div className="flex justify-end">
        <span
          className={`rounded-full px-4 py-1 text-sm font-semibold ${
            badgeConfig[tool.badge] || "bg-gray-100 text-gray-500"
          }`}
        >
          {tool.badge}
        </span>
      </div>
      <div>
        <img
          className="border border-gray-200 rounded-full p-3"
          src={tool.image}
          alt=""
        />
      </div>
      <h3 className="text-2xl font-bold ">{tool.title}</h3>
      <p className="text-gray-500">{tool.description}</p>
      <h4 className="font-bold my-3 text-2xl">
        ${tool.price}{" "}
        <span className="text-lg text-gray-400">/{tool.billing}</span>
      </h4>
      <ul className="space-y-2">
        {tool.features.map((f, index) => (
          <li className="flex gap-2 items-center text-gray-500" key={index}>
            <IoMdCheckmark className="text-green-500" />
            {f}
          </li>
        ))}
      </ul>
      <button
        onClick={handleIsBuy}
        className={`btn mt-4 text-white w-full rounded-full ${
          isBuy ? "bg-green-500" : "bg-blue-700"
        }`}
      >
        {isBuy ? (
          <div>
            <p className="flex items-center gap-2 ">
              <IoMdCheckmark /> Added to Cart
            </p>
          </div>
        ) : (
          "Buy Now"
        )}
      </button>
    </div>
  );
};

export default ToolCard;
