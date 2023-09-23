import React from "react";
import { Link } from "react-router-dom";

export default function BestSelling() {
  return (
    <Link to="/cart">
      <section className="mb-12 mt-6 h-full min-h-[300px]  flex bg-[#e3e5e9] bg-opacity-80 rounded-lg hover-button">
        <div className="p-6 py-12 flex flex-col w-1/2 space-y-6 text-center md:text-left items-center md:items-start">
          <p className="text-sm uppercase">Best Selling</p>
          <h1 className="text-3xl font-semibold tracking-wide">
            Cozy corner for the living room at a{" "}
            <span className="inline-block text-[#649aaa]">
              discount up to 40%
            </span>
          </h1>
          <button className="w-[90px] border border-black py-2 font-bold rounded-2xl text-sm  hover:ease-in-out duration-500">
            Explore
          </button>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <img
            src="/shop-banner.png"
            className="object-contain h-[300px]  "
            alt=""
          />
        </div>
      </section>
    </Link>
  );
}
