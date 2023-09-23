import React from "react";

export default function PriceTotal({subTotal, tax}: any) {
  return (
    <div className="flex flex-col  ml-auto w-[250px]  pr-1 space-y-4">
      <hr className="border-black border-2" />
      <div className="flex justify-between items-center  ">
        <h1>Subtotal</h1>
        <p>${subTotal}</p>
      </div>
      <div className="flex justify-between items-center">
        <h1>Tax</h1>
        <p>${tax}</p>
      </div>
      <div className="flex justify-between items-center">
        <h1>total</h1>
        <p>${(parseFloat(subTotal) + parseFloat(tax)).toFixed(2)} </p>
      </div>
      <button className="">Continue to checkout</button>
    </div>
  );
}
