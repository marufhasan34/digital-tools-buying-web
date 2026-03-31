import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Counter from "./Components/Counter/Counter";
import Workflow from "./Components/Counter/Workflow/Workflow";
import DigitalTools from "./Components/DigitalTools/DigitalTools";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Pricing from "./Components/Pricing/Pricing";
import Cart from "./Components/Tools/Cart";
import Tools from "./Components/Tools/Tools";

const getTools = async () => {
  const res = await fetch("Tools.json");
  return res.json();
};

const toolPromise = getTools();

function App() {
  const [activeTab, setActiveTab] = useState("tool");
  const [carts, setCarts] = useState([]);
  return (
    <>
      <Navbar carts={carts} />
      <Banner />
      <Counter />
      {/* name of each tab group should be unique */}
      <div className="tabs mt-5 tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${
            activeTab === "tool" ? "bg-blue-600 text-white" : ""
          }`}
          aria-label="Products"
          checked={activeTab === "tool"}
          onChange={() => setActiveTab("tool")}
        />

        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 ${
            activeTab === "cart" ? "bg-blue-600 text-white" : ""
          }`}
          aria-label={`Cart (${carts.length})`}
          checked={activeTab === "cart"}
          onChange={() => setActiveTab("cart")}
        />
      </div>
      {activeTab === "tool" && (
        <Tools carts={carts} setCarts={setCarts} toolPromise={toolPromise} />
      )}
      {activeTab === "cart" && <Cart carts={carts} setCarts={setCarts} />}
      <DigitalTools />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
