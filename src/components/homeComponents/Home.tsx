import React, { useEffect, useState } from "react";
import { fetchAllProductData } from "../../api/ApiServices";
import { ShoppingProps } from "../../types/Types";
import HomeSideBar from "./HomeSideBar";
import ItemCards from "./ItemCards";

export default function Home({ handleCart, cart }: any) {
  const [price, setPrice] = useState<number>(0);
  const [products, setProducts] = useState<ShoppingProps[]>([]);
  const [text, setText] = useState<string>("");
  const [results, setResults] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<string>("default");

  const uppercaseFirstLetter = products
  .slice(0, 1)
  .map(
    (item) =>
      item.category.charAt(0).toUpperCase() +
      item.category.slice(1, item.category.length)
  );

  function handlePriceChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newPrice = parseInt(event.target.value, 10);
    setPrice(newPrice);
  }

  async function fetchData() {
    setLoading(true);
    const data: ShoppingProps[] = await fetchAllProductData(text);
    const filterData = data.filter((item) => item.price >= price);
    if (sortOrder === "lowestToHighest") {
      filterData.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highestToLowest") {
      filterData.sort((a, b) => b.price - a.price);
    } else if (sortOrder === "lowestRating") {
      filterData.sort((a, b) => a.rating.rate - b.rating.rate);
    } else if (sortOrder === "highestRating") {
      filterData.sort((a, b) => b.rating.rate - a.rating.rate);
    }
    setProducts(filterData);
    setResults(filterData.length);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [text, sortOrder, price]);



  return (
    <div className="flex">
      <HomeSideBar
        setText={setText}
        handlePriceChange={handlePriceChange}
        setPrice={setPrice}
        price={price}
      />
      <section className="w-full">
        <div className="flex flex-col space-y-8 px-4 mb-10">
          {loading ? (
            <h1 className="font-bold h-10 bg-gray-400 animate-pulse w-40"></h1>
          ) : (
            <h1 className="font-bold text-3xl">{uppercaseFirstLetter}</h1>
          )}
          <div className="flex justify-between items-center">
            {loading ? (
              <p className="flex justify-center items-center gap-x-1 text-[#576071] tracking-wide text-sm ">
                Showing all{" "}
                <p className="w-6 h-5 animate-pulse  rounded-lg bg-gray-400 text-[#576071] tracking-wide text-sm "></p>{" "}
                results
              </p>
            ) : (
              <p className="text-[#576071] tracking-wide text-sm">
                Showing all ({results}) results
              </p>
            )}
            <select
              className="focus:outline-none text-[#576071] tracking-wide text-sm"
              name=""
              id=""
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="Default">Default</option>
              <option value="lowestToHighest">Price: Low to High</option>
              <option value="highestToLowest">Price: High to Low</option>
              <option value="lowestRating">Rating: Low to High</option>
              <option value="highestRating">Rating: High to Low</option>
            </select>
          </div>
        </div>
        <div>
          <ItemCards
            products={products}
            handleCart={handleCart}
            cart={cart}
            loading={loading}
          />
        </div>
      </section>
    </div>
  );
}
