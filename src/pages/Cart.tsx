import { CartProps, ShoppingProps } from "../types/Types";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PriceTotal from "../components/cartComponents/PriceTotal";
import Quantity from "../components/cartComponents/Quantity";

export default function Cart({
  cart,
  setCart,
  setCounter,
  counter,
}: CartProps) {
  
  const subTotal = cart
    .reduce((subtotal, item) => subtotal + item.price * item.quantity, 0)
    .toFixed(2);
  const tax = cart
    .reduce((taxTotal, item) => taxTotal + item.quantity * 2.9, 0)
    .toFixed(2);

  function handleDelete(id: number) {
    const filterCart = cart.filter((item) => item.id !== id);
    const itemToRemove = cart.find((item) => item.id === id);
    if (itemToRemove) {
      if (setCounter) {
        setCounter((prevCount: number) => prevCount - itemToRemove.quantity);
      }
    }
    setCart(filterCart);
  }

  function handleQuantityChange(id: number, newQuantity: number) {
    if (newQuantity <= 0) {
      handleDelete(id);
    } else {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      );

      setCart(updatedCart);
      const totalQuantity = updatedCart.reduce(
        (total, item) => total + item.quantity,
        0
      );

      if (setCounter) {
        setCounter(totalQuantity);
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="mt-[100px] mx-auto p-10 max-w-[1200px]"
      style={{ minHeight: "80vh" }}
    >
      <div className="flex justify-center items-center mb-4">
        <h1 className="font-bold text-3xl">Cart</h1>
      </div>
      <div className=" p-2 px-4 flex justify-between items-center bg-[#649AAA] rounded-md text-black">
        <p>Item</p>
        <p className="ml-[136px]">Quantity</p>
        <p>Price</p>
      </div>
      {cart.length <= 0 ? (
        <div className="flex justify-center items-center flex-col  space-y-8">
          <img src="/empty_cart.svg" alt="" className="w-[350px] mt-16" />
          <h1 className="font-bold text-center text-4xl">
            You don't have any items in your cart?
          </h1>
          <Link to="/Shopping">
            <button className="border-[#649AAA] border py-3 rounded-lg bg-[#649AAA] text-black font-bold px-14">
              Browse Items
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="p-2 flex items-center w-full  ">
            <div className="flex w-[100%] flex-wrap">
              {cart.map(
                (item) =>
                  cart.length > 0 && (
                    <div
                      className="w-full flex justify-center items-center"
                      key={item.id}
                    >
                      <div className="my-6 flex  ">
                        <img
                          className="hidden md:flex w-[100px]"
                          src={item.image}
                          alt=""
                        />
                        <div className="flex justify-center w-[200px] space-y-2 md:ml-4 flex-col text-sm">
                          <p className="text-[15px] font-bold">{item.title}</p>
                          <p>${item.price.toFixed(2)}</p>
                          <p
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500 cursor-pointer"
                          >
                            Remove
                          </p>
                          {item.quantity}
                        </div>
                      </div>
                      <div
                        className=" mx-auto flex items-center justify-center"
                        key={item.id}
                      >
                        <Quantity
                          handleQuantityChange={handleQuantityChange}
                          item={item}
                        />
                      </div>
                      <div className="flex justify-end items-center lg:w-[17%]  ml-auto  lg:ml-0">
                        <div key={item.id}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <PriceTotal subTotal={subTotal} tax={tax} />
        </>
      )}
    </div>
  );
}
