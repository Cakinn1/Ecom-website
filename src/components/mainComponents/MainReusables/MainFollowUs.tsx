import React from "react";
import { RiInstagramFill, RiInstagramLine } from "react-icons/ri";

export default function MainFollowUs() {
  return (
    <div className="relative">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex  flex-col md:flex-row md:justify-between md:p-6 md:pb-0  ">
          <div className="w-full md:w-1/4 flex justify-center items-center md:flex-none md:justify-normal md:items-start ">
            <img
              src="/image-gallery-5.jpeg"
              className="object-fill rounded-3xl w-[260px] h-full"
              alt=""
            />
          </div>
          <div className="mt-10 flex flex-col items-center text-4xl space-y-4 mb-4 md:mb-0 ">
            <RiInstagramLine className="text-[#649AAA] " />
            <h1 className="font-bold  tracking-wide">Follow us</h1>
            <p className=" text-[#649AAA] font-bold">#deco</p>
          </div>
          <div className="w-full md:w-1/4 flex justify-center items-center md:flex-none md:justify-normal md:items-start mb-4 md:mb-0 ">
            <img
              src="/image-gallery-10.jpeg"
              className="object-fill rounded-3xl w-[260px] md:w-full h-full"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-4 md:p-6 md:pb-0 max-w-[260px] w-full md:max-w-none mx-auto md:mx-0 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/4 flex justify-center items-center  ">
            <img
              src="/image-gallery-9.jpeg"
              className="object-fill rounded-3xl "
              alt=""
            />
          </div>
          <div className="w-full md:w-1/4 flex justify-center items-center ">
            <img
              src="/image-gallery-8.jpeg"
              className="object-fill rounded-3xl "
              alt=""
            />
          </div>
          <div className="w-full md:w-1/4 flex justify-center items-center">
            <img
              src="/image-gallery-7.jpeg"
              className="object-fill rounded-3xl "
              alt=""
            />
          </div>
          <div className="w-full md:w-1/4 flex justify-center items-center  ">
            <img
              src="/image-gallery-6.jpeg"
              className="object-fill rounded-3xl "
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="hidden absolute -bottom-[150px] -z-50 lg:flex bg-black h-[300px] w-full "></div>
    </div>
  );
}
