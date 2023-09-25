import React from "react";

export default function PriceTotal({ subTotal, tax }: any) {
  return (
    <div className="flex flex-col  ml-auto lg:w-[250px]   pr-1 space-y-4">
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
      <button className="border-[#649AAA] border py-2 rounded-lg bg-[#649AAA] text-black font-bold md:w-[300px] md:ml-auto lg:ml-0 lg:w-full">
        Continue to checkout
      </button>
    </div>
  );
}
