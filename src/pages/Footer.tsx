import {
  ChevronDownIcon,
  FlagIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {
  RiAppleFill,
  RiFacebookBoxFill,
  RiGooglePlayFill,
  RiInstagramFill,
  RiMastercardFill,
  RiMastercardLine,
  RiPinterestFill,
  RiTelegramFill,
  RiVisaFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import MainList from "../components/mainComponents/MainReusables/MainList";

export default function Footer() {
  const [clicked, setClicked] = useState<boolean>(false);

  function handleClick() {
    setClicked((prevClick) => !prevClick);
  }

  return (
    <footer className="bg-black text-white pb-4">
      <section className="flex  flex-col lg:flex-row lg:space-y-0 space-y-8 py-[50px] p-6 mx-auto max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-x-4 lg:w-[600px] space-y-8 lg:space-y-0 ">
          <MainList
            title="usefull links"
            list="Trending"
            list2="Sale"
            list3="About us"
            list4="Blog"
            list5="Contact"
            list6="Shipping & Returns"
            list7="Delivery info"
            showroom={false}
          />
          <MainList
            title="decors"
            list="Vases"
            list2="Mirrors"
            list3="Paintings"
            list4="Figurines"
            list5="Textile"
            list6="Lighting"
            list7="Photo frames"
            showroom={false}
          />
          <MainList
            title="Categories"
            list="electronics"
            list2="jewelery"
            list3="men's clothing"
            list4="women's clothing"
            showroom={false}
          />
        </div>
        <div className="lg:w-[600px] lg:ml-10 flex flex-col lg:flex-row  space-y-4">
          <MainList showroom={true} />
          <div className="lg:w-3/4 w-full">
            <h1 className="mb-6 uppercase text-[#FFFFFE] font-semibold">
              download our app
            </h1>
            <div className="flex gap-x-4 ">
              <a
                target="_blank"
                href="https://www.apple.com/au/app-store/"
                className="flex items-center gap-x-1 lg:p-2 lg:px-2 py-2 w-full rounded-2xl bg-[#1B1B1B]"
              >
                <RiAppleFill className="text-3xl" />
                <p className="text-[8px]">
                  download on the
                  <br />
                  <span className="text-lg">App Store</span>
                </p>
              </a>
              <a
                target="_blank"
                href="https://play.google.com/store/games"
                className=" flex items-center gap-x-1 lg:p-2 lg:px-2 py-2 w-full rounded-2xl bg-[#1B1B1B]"
              >
                <RiGooglePlayFill className="text-3xl" />
                <p className="text-[8px]">
                  Get it on
                  <br />
                  <span className="text-lg">Google Play</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-[1200px] p-6 relative">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-x-4 text-[#FFFFFF80]">
            <p>Support</p>
            <p>Privacy</p>
            <p>Terms of use</p>
          </div>
          {clicked && (
            <div
              className="absolute text-white lg:right-20 md:right-20 rounded-3xl p-3
             -top-[90px] border border-[#FFFFFF80] w-[130px] h-[100px]
             hover:duration-500 ease-in-out bg-black right-8"
            >
              <div className="flex items-center gap-x-2">
                <FlagIcon className="h-5" />
                <p className="font-semibold">Turkish</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FlagIcon className="h-5" />
                <p className="font-semibold">Deutsch</p>
              </div>
              <div className="flex items-center gap-x-2">
                <FlagIcon className="h-5" />
                <p className="font-semibold">Italiano</p>
              </div>
            </div>
          )}
          <button
            onClick={() => handleClick()}
            className="border border-[#FFFFFF80] flex rounded-2xl items-center gap-x-2 py-3 px-4"
          >
            <FlagIcon className="h-5" />
            <p className="font-semibold text-sm">Eng / USD</p>
            <ChevronDownIcon className="h-3 " />
          </button>
        </div>
        <hr className="my-6 border-[#FFFFFF80] " />
        <div className="flex justify-between items-center">
          <div className="flex gap-x-4 items-center justify-center">
            <img src="/logo.svg" className="invert" alt="" />
            <div className="flex gap-x-4">
              <div className="rounded-full bg-[#565f70c7]  py-2 px-2 flex justify-center items-center">
                <RiTelegramFill className="" />
              </div>
              <div className="rounded-full bg-[#565f70c7]  py-2 px-2 flex justify-center items-center">
                <RiInstagramFill className="" />
              </div>
              <div className="rounded-full bg-[#565f70c7]  py-2 px-2 flex justify-center items-center">
                <RiFacebookBoxFill className="" />
              </div>
              <div className="rounded-full bg-[#565f70c7]  py-2 px-2 flex justify-center items-center">
                <RiPinterestFill className="" />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-x-4 relative">
            <RiVisaFill className="text-blue-500 bg-white h-6 w-14 rounded-md" />
            <RiMastercardFill className="text-red-500 bg-blue-500 h-6 w-14 rounded-md" />
            <h1 className="absolute text-white right-[10px] text-[6px] ">
              MasterCard
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
