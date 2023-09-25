import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import React, { ReactElement } from "react";


export interface MainServicesProps {
  title: string
  paragraph: string
  icon: ReactElement
}

export default function MainServices({icon, paragraph, title}:MainServicesProps){
  return (
    <div className=" lg:w-1/4 md:w-[24%] space-y-3 mb-10 ">
     
      {icon}
      <h1 className="font-bold text-lg  md:w-[150px]">
        {title}
      </h1>
      <p className="text-sm text-[#576071] md:w-[180px] lg:w-[230px]">{paragraph}</p>
    </div>
  );
}
