import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { BlogDefaultDataProps } from "../../types/Types";


export default function BlogItemCards({
  category,
  img,
  date,
  paragraph,
  personalName,
  title,
}: BlogDefaultDataProps) {
  return (
    <section className=" md:w-[47%]  lg:w-[30%] bg-[#f6f9fc] rounded-3xl mb-10 cursor-not-allowed ">
      <img
        src={img}
        className="rounded-t-3xl min-h-[300px]  object-cover"
        alt=""
      />
      <div className="p-8 space-y-4">
        <div className="flex gap-x-4">
          <span className="text-[#858c97]">{date}</span>
          <span>|</span>
          <button className="border text-[#434a57] px-2 text-sm font-semibold rounded-lg">
            {category}
          </button>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-[#434a57]">{title}</h1>
          <p className="text-[#576071]">{paragraph}</p>
        </div>
        <hr />
        <div className="flex items-center gap-x-4">
          <UserCircleIcon className="h-16" />
          <p className="text-[#121519]">{personalName}</p>
        </div>
      </div>
    </section>
  );
}
