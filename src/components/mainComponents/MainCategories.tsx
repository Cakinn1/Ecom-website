import React from "react";
import { Link } from "react-router-dom";

export default function MainCategories() {
  return (
    <section className="mx-auto max-w-[1200px] mt-[100] p-6 flex gap-x-8">
        
      <div className="mr-auto h-full w-[400px] min-h-[650px] relative overflow-hidden">
        <Link to="/item/5">
          <img src="/01.jpeg" className="img-main min-h-[650px]" alt="" />
          <button className="main-button">for the jewelery</button>
        </Link>
      </div>
      <div className="flex flex-col w-full space-y-8">
        <div className=" h-[200px] min-h-[300px] relative overflow-hidden ">
          <Link to="/item/11">
            <img src="/02.jpeg" alt="" className="img-main min-h-[300px]" />
            <button className="main-button">for the electronics</button>
          </Link>
        </div>
        <div className="w-full h-full flex gap-x-8">
          <div className="w-1/2 h-full relative overflow-hidden">
            <Link to="/item/3">
              <img src="/03.jpeg" alt="" className="img-main min-h-[300px]" />
              <button className="main-button">for the men's clothing</button>
            </Link>
          </div>
          <div className="w-1/2  h-full relative overflow-hidden">
            <Link to="/item/18">
            <img src="/04.jpeg" alt="" className="img-main min-h-[300px]" />
            <button className="main-button">for the women's clothing</button>
            </Link>
          </div>
        </div>
      </div>
    </section>

  );
}
