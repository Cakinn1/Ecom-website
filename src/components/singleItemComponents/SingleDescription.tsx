import React from "react";


export interface SingleDescriptionProps {
  title?: string
  paragraph?: string
  image: string
  width?: boolean
}

export default function SingleDescription({title, paragraph, image, width}:SingleDescriptionProps) {
  return (
    <div className={`relative  w-full ${width ? "md:w-[400px]" : "w-full"}`}>
      <img
        src={image}
        className={`object-cover h-[400px] rounded-3xl ${width ? 'w-full' : "w-full"}`}
        alt=""
      />
      <div className={`${width ? "hidden" : "absolute "} space-y-4 top-1/2 left-1/2 p-6 md:ml-20 -translate-x-1/2 -translate-y-1/2 ${title && "bg-white"}   p h-[300px] max-w-[400px] w-full rounded-3xl`}>
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="tracking-wide text-[#576071]">
          {paragraph}
        </p>
      </div>
    </div>
  );
}
