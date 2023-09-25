import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllProductData, fetchSingleProduct } from "../../api/ApiServices";
import { ShoppingProps } from "../../types/Types";
import { defaultValue } from "../singleItemComponents/SingleItemCard";
import MainPosts from "./MainPosts";

export default function MainDecor() {
  const [posts, setPosts] = useState<ShoppingProps[]>([defaultValue]);
  const [loading, setLoading] = useState<boolean>(false);

  let text = "";
  async function fetchData(text?: string) {
    setLoading(true);
    try {
      const data: ShoppingProps[] = await fetchAllProductData(text);
      setLoading(false);
      setPosts(data);
    } catch (error) {
      setLoading(false);
      console.error("error", error);
      throw error;
    }
  }
  useEffect(() => {
    fetchData(text);
  }, [text]);

  return (
    <section className="relative group  my-[100px]" style={{ height: "700px" }}>
      <figure className="absolute left-0 right-0 h-[700px] -z-50">
        <span className="bg-black w-full h-full absolute bg-opacity-30"></span>
        <img
          src="/bg02.jpeg"
          className="object-center object-cover -z-50 w-full h-full"
          alt=""
        />
      </figure>
      <div className="mx-auto max-w-[800px] p-6 z-50 text-center flex justify-center space-y-10 items-center flex-col">
        <h1 className="font-bold text-6xl mt-20 text-white tracking-widest ">
          decor for the living room or bedrooms in wood style
        </h1>
        <Link to="/Shopping">
          <button className="px-6  font-bold group-hover:bg-white group-hover:text-black group-hover:duration-500 group-hover:ease-in-out transition-colors duration-500  py-3 border tracking-widest border-white rounded-lg cursor-pointer text-white">
            Explore the catalog
          </button>
        </Link>
        {posts.slice(4, 5).map((item) => (
          <MainPosts
            key={item.id}
            isDecor={true}
            item={item}
            loading={loading}
          />
        ))}
      </div>
    </section>
  );
}
