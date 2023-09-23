import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllProductData } from "../../api/ApiServices";
import { ItemCardProps, ShoppingProps } from "../../types/Types";
import ItemCards from "../homeComponents/ItemCards";

export default function MainTrending({ handleCart, cart }: ItemCardProps) {
  const [posts, setPosts] = useState<ShoppingProps[]>([]);
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
    <section className="mx-auto max-w-[1200px] p-6 min-h-screen h-full">
      <div className="flex flex-wrap gap-x-4  ">
        <ItemCards
          handleCart={handleCart}
          cart={cart}
          products={posts}
          loading={loading}
        />
      </div>
      <div className="flex">
        <Link to="/" className="mx-auto">
          <button className="mx-auto p-4 border-black border">
            View all products
          </button>
        </Link>
      </div>
    </section>
  );
}
