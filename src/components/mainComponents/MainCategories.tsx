import React from "react";
import { Link } from "react-router-dom";

export default function MainCategories() {
  return (
    <section className="mx-auto max-w-[1200px] mt-[100] p-6 flex flex-col md:flex-row space-y-8 md:space-y-0 gap-x-8">
      <div className="md:mr-auto h-[300px]  md:h-full w-full md:w-[400px] md:min-h-[650px] relative overflow-hidden">
        <Link to="/Shopping/Item/5">
          <span className="img-opactiy "></span>
          <img
            src="/01.jpeg"
            className="img-main md:min-h-[700px]  h-full"
            alt=""
          />
          <button className="main-button">for the jewelery</button>
        </Link>
      </div>
      <div className="flex flex-col w-full space-y-8">
        <div className="h-full min-h-[300px] relative overflow-hidden ">
          <Link to="/Shopping/Item/11">
          <span className="img-opactiy "></span>

            <img src="/02.jpeg" alt="" className="img-main min-h-[300px] z-50 " />
            <button className="main-button">for the electronics</button>
          </Link>
        </div>
        <div className=" w-full  flex md:gap-x-8 flex-col md:flex-row space-y-8 md:space-y-0">
          <div className="min-h-[200px] h-[300px] md:w-1/2  relative overflow-hidden">
            <Link to="/Shopping/Item/3">
          <span className="img-opactiy"></span>

              <img src="/03.jpeg" alt="" className="img-main min-h-[300px]" />
              <button className="main-button">for the men's clothing</button>
            </Link>
          </div>
          <div className="min-h-[300px] h-[300px]   md:w-1/2  relative overflow-hidden">
            <Link to="/Shopping/Item/18">
          <span className="img-opactiy"></span>

            <img src="/04.jpeg" alt="" className="img-main min-h-[300px]" />
            <button className="main-button">for the women's clothing</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
