import React from "react";
import { HomeProps } from "../../types/Types";

export default function HomeSideBar({
  setText,
  handlePriceChange,
  setPrice,
  price,
}: HomeProps) {
  return (
    <div className="w-[200px] h-[300px] ">
      <div className="space-y-4">
        <h1 className="font-bold">Categories</h1>
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
      <div className="mt-4">
        <h1>Price</h1>
        <input
          type="range"
          min="0"
          className="bg-black custom-slider"
          max="999"
          value={price}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handlePriceChange(e)
          }
        />
        <p>Selected Price ${price}</p>
        <button onClick={() => setPrice(0)}>Reset</button>
      </div>
    </div>
  );
}
