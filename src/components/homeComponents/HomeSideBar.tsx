import React from "react";
import { HomeProps } from "../../types/Types";

export default function HomeSideBar({
  setText,
  handlePriceChange,
  setPrice,
  price,
}: HomeProps) {
  return (
    <div className="w-[200px] h-[300px] hidden lg:flex lg:flex-col text-[#434a57] ">
      <div className="space-y-4">
        <h1 className="font-bold text-black text-lg">Categories</h1>
        <p
          className="cursor-pointer"
          onClick={() => setText(`/category/men's%20clothing`)}
        >
          men's clothing (4)
        </p>
        <p
          className="cursor-pointer"
          onClick={() => setText(`/category/women's%20clothing`)}
        >
          women's clothing (6)
        </p>
        <p
          className="cursor-pointer"
          onClick={() => setText("category/electronics")}
        >
          electronics (6)
        </p>
        <p
          className="cursor-pointer"
          onClick={() => setText("category/jewelery")}
        >
          jewelery (4)
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <h1 className="font-bold text-xl text-black ">Price</h1>
        <input
          type="range"
          min="0"
          className="bg-[#649AAA] text-[#649AAA] custom-slider"
          max="999"
          value={price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePriceChange(e)
          }
        />
        <p>
          <span className="font-bold text-black">Selected Price:</span> ${price}
        </p>
        <button className="bg-[#649AAA] border-[#649AAA] border w-full py-2 rounded-lg font-bold text-black" onClick={() => setPrice(0)}>Reset Price</button>
      </div>
    </div>
  );
}
