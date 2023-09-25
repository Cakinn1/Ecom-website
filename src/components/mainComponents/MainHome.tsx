import React from "react";
import { Link } from "react-router-dom";
import { MainProps } from "../../pages/Main";
import MainPosts from "./MainPosts";

export default function MainHome({ posts, loading }: MainProps) {
  return (
    <section className="min-h-screen relative group  bg-black bg-opacity-30  mt-[80px]">
      <figure className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-full h-full -z-50 ">
        <img
          src="/bg.jpeg"
          className="object-center object-cover w-full h-full "
          alt=""
        />
      </figure>
      <div className="mx-auto max-w-[800px]   p-6 flex justify-center space-y-8 items-center flex-col text-center pt-[200px]">
        <h1 className="font-bold text-6xl text-white tracking-widest">
          Discover Amazing Products
        </h1>
        <p className="text-xl text-white tracking-widest">
          Explore a wide range of high-quality products, from fashion to
          electronics and more. Discover the latest trends and unbeatable deals
          on top-rated items. Elevate your shopping experience with us.
        </p>
        <Link to="/Shopping">
          <button className="px-4 font-bold group-hover:bg-white group-hover:text-black group-hover:ease-in-out group-hover:duration-500 transition-colors duration-500 py-2 border tracking-widest border-white rounded-lg cursor-pointer text-white">
            Explore the catalog
          </button>
        </Link>
        <h1 className="pt-[60px] text-white uppercase text-3xl tracking-widest">
          Most popular
        </h1>
      </div>
      <div className="mx-auto max-w-[1200px] md:justify-center lg:justify-normal p-6 flex items-center flex-wrap ">
        {posts.slice(0, 3).map((item) => (
          <MainPosts key={item.id} item={item} loading={loading} />
        ))}
      </div>
    </section>
  );
}
