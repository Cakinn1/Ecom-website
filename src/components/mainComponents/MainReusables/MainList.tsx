import React from "react";
import { MainListProps } from "../../../types/Types";

export default function MainList({
  list,
  list2,
  list3,
  list4,
  list5,
  list6,
  list7,
  title,
  showroom,
}: MainListProps) {
  return (
    <>
      {showroom ? (
        <ul className=" lg:w-1/2 ">
          <li className="mb-3 uppercase tracking-wide font-semibold text-[#FFFFFE]">
            showroom
          </li>
          <div className="space-y-2">
            <li>1501 Main st, ste 50</li>
            <li>Amercia MA 000001</li>
            <li>email@example.com</li>
            <li>+04 00000000</li>
          </div>
          <div className="mt-4 space-y-1">
            <li>Mon-Fri: 8:00 – 21:00</li>
            <li>Sat: 8:00 – 21:00</li>
            <li>Sun: 8:00 – 21:00</li>
          </div>
        </ul>
      ) : (
        <ul className="w-full  lg:w-1/3">
          <li className="mb-3 uppercase tracking-wide font-semibold text-[#FFFFFE]">
            {title}
          </li>
          <div className="space-y-2">
            <li className="text-sm text-[#f6f6f6]">{list}</li>
            <li className="text-sm text-[#f6f6f6]">{list2}</li>
            <li className="text-sm text-[#f6f6f6]">{list3}</li>
            <li className="text-sm text-[#f6f6f6]">{list4}</li>
            <li className="text-sm text-[#f6f6f6]">{list5}</li>
            <li className="text-sm text-[#f6f6f6]">{list6}</li>
            <li className="text-sm text-[#f6f6f6]">{list7}</li>
          </div>
        </ul>
      )}
    </>
  );
}
