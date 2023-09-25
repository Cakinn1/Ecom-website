import React from "react";
import MainIdeasImages from "./MainReusables/MainIdeasImages";

export default function MainIdeas() {
  return (
    <section className="md:h-[600px] flex md:flex-row flex-col space-y-8 md:space-y-0  gap-x-4 mt-12 p-4">
      <div className="w-full md:w-[500px] h-full border rounded-3xl ">
        <MainIdeasImages src="image-gallery-1.jpeg" />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="md:w-[300px] h-1/2 border rounded-3xl">
          <MainIdeasImages src="image-gallery-2.jpeg" />
        </div>
        <div className="mr- md:w-[300px] h-1/2 border rounded-3xl">
          <MainIdeasImages src="image-gallery-3.jpeg" />
        </div>
      </div>
      <div className="h-full border rounded-3xl md:w-[300px] mr-">
        <MainIdeasImages src="image-gallery-4.jpeg" />
      </div>
    </section>
  );
}

// 500 + 200 + 200 + 300 = 1100
