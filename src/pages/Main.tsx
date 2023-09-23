import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllProductData } from "../api/ApiServices";
import { ItemCardProps, ShoppingProps } from "../types/Types";
import ItemCards from "../components/homeComponents/ItemCards";
import { defaultValue } from "../components/singleItemComponents/SingleItemCard";
import MainHome from "../components/mainComponents/MainHome";
import MainPosts from "../components/mainComponents/MainPosts";
import MainCategories from "../components/mainComponents/MainCategories";
import MainTrending from "../components/mainComponents/MainTrending";

export interface MainProps {
  posts: ShoppingProps[];
  loading: boolean;
}

export default function Main({ handleCart, cart, products }: ItemCardProps) {
  const [posts, setPosts] = useState<ShoppingProps[]>([defaultValue]);
  const [loading, setLoading] = useState<boolean>(false);

  const text = "";
  async function fetchData(text: string) {
    setLoading(true);
    const data: ShoppingProps[] = await fetchAllProductData(text);
    data.sort((a, b) => b.rating.rate - a.rating.rate);
    setPosts(data);
    setLoading(false);
  }
  useEffect(() => {
    fetchData(text);
  }, []);
  return (
    <div>
      <MainHome posts={posts} loading={loading} />
      <div className="my-[100px]">
        <h1 className="mx-auto max-w-[1200px] p-6 font-bold text-3xl">
          Categories
        </h1>
        <MainCategories />
      </div>
      <div>
        <h1 className="mx-auto max-w-[1200px] p-6 font-bold text-3xl">
          Trending Products
        </h1>
        <MainTrending handleCart={handleCart} cart={cart}  />
      </div>
    </div>
  );
}
