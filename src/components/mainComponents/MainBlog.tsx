import React from "react";

export interface MainBlogProps {
  title: string;
  paragraph: string;
  img: string;
}

export default function MainBlog({ title, paragraph, img }: MainBlogProps) {
  return (
    <div className="w-full md:w-[47%] lg:w-[32%] flex flex-col space-y-8 md:space-x-0 md:mb-6 lg:mb-0  ">
      <figure>
        <img src={img} alt="" className="rounded-2xl" />
      </figure>
      <h1 className="font-bold text-2xl tracking-wider">{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
}
