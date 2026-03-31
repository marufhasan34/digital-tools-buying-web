import React, { use } from "react";
import ToolCard from "./ToolCard";

const Tools = ({ toolPromise,carts,setCarts }) => {
  const tools = use(toolPromise);
  return (
    <div className="mt-16 container mx-auto">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Premium Digital Tools</h2>
        <p className="mt-1">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      
      <div className="grid gap-9 mt-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard carts={carts} setCarts={setCarts} key={tool.id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
