import React from "react";
import { Link } from "react-router-dom";
import { MainProps } from "../../pages/Main";
import MainPosts from "./MainPosts";

export default function MainHome({ posts, loading }: MainProps) {
  return (
    <section className="min-h-screen relative bg-black bg-opacity-30  mt-[80px]">
      <figure className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-50 ">
        <img
          src="/bg.jpeg"
          className="object-center object-cover w-full h-full "
          alt=""
        />
      </figure>
      <div className="mx-auto max-w-[1200px] p-6 flex justify-center space-y-8 items-center flex-col text-center pt-[200px]">
        <h1 className="font-bold text-6xl">Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis
          reprehenderit non accusantium!
        </p>
        <Link to="/">
          <button className="px-4 py-2 border border-white rounded-lg cursor-pointer text-white">
            Explore the catalog
          </button>
        </Link>
        <h1>Most popular</h1>
      </div>
      <div className="mx-auto max-w-[1200px] p-6 flex items-center flex-wrap ">
        {posts.slice(0, 3).map((item) => (
          <MainPosts key={item.id} item={item} loading={loading} />
        ))}
      </div>
    </section>
  );
}
