import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };
  const handleRemove = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.error("Tool remove!");
  };
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold ">Your Cart</h2>

      {carts.length === 0 ? (
        <p className="text-center text-xl font-bold p-12">Cart is empty </p>
      ) : (
        <>
          {carts.map((item) => (
            <div
              className="mt-8 bg-gray-300 p-7 rounded-2xl flex justify-between items-center"
              key={item.id}
            >
              <div className="flex items-center gap-7">
                <div>
                  {" "}
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <h4 className="font-normal text-xl">${item.price}</h4>
                </div>
              </div>
              <div
                onClick={() => handleRemove(item)}
                className="text-red-500 cursor-pointer"
              >
                Remove
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-24">
            <div>Total :</div>
            <div className="text-2xl font-bold">${totalPrice}</div>
          </div>
          <button
            onClick={handlePayment}
            className="p-3 w-full mt-19 cursor-pointer bg-blue-700 text-white text-xl rounded-full "
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
