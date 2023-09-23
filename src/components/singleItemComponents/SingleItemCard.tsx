import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchAllProductData,
  fetchCategory,
  fetchSingleProduct,
} from "../../api/ApiServices";
import { HomePageProps, ShoppingProps } from "../../types/Types";
import ItemCards from "../homeComponents/ItemCards";
import Quantity from "../cartComponents/Quantity";

export const defaultValue: ShoppingProps = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  quantity: 0,
  rating: {
    rate: 0,
  },
};

export default function SingleItemCard({
  handleCart,
  cart,
  isSingleItemView,
}: HomePageProps) {
  const [item, setItem] = useState<ShoppingProps>(defaultValue);
  const [clicked, setClicked] = useState<boolean>(false);
  const [products, setProducts] = useState<ShoppingProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { id, currentItemId } = useParams();

  async function fetchData(id?: string) {
    if (!id) {
      return;
    }
    setLoading(true);
    const data: ShoppingProps = await fetchSingleProduct(id);
    setItem(data);
    setLoading(false);
  }

  async function fetchAllData(text: string) {
    setLoading(true);
    const allData: ShoppingProps[] = await fetchCategory(text);

    // const filteredData = allData.filter((itemData) => itemData.id !== item.id);
    setProducts(allData);
    setLoading(false);
  }

  useEffect(() => {
    fetchData(id);
  }, [id]);

  useEffect(() => {
    if (item.category) {
      fetchAllData(item.category);
    }
  }, [item.category]);

  function handleClick() {
    handleCart(item);
    setClicked(true);
  }

  const itemQuantity = cart.reduce((total, itemToAdd) => {
    if (itemToAdd.id === item.id) {
      return total + itemToAdd.quantity;
    }
    return total;
  }, 0);

  return (
    <div className="mt-[80px] mx-auto max-w-[1200px] p-6 ">
      {loading ? (
        <>
          <div
            className="text-sm my-10 hover:text-blue-500 cursor-pointer bg-gray-400 animate-pulse
          h-[30px] rounded-md w-1/2"
          ></div>

          <div className="flex">
            <div className="w-1/2 bg-gray-400 animate-pulse  shadow-md rounded-lg flex justify-center min-h-[400px] h-full items-center border-black"></div>
            <div className="w-1/2 px-16 space-y-6">
              <h1 className="bg-gray-400 animate-pulse h-[30px] rounded-md"></h1>
              <p className="bg-gray-400 animate-pulse h-[200px] rounded-md"></p>
              <p className="bg-gray-400 animate-pulse h-[30px] rounded-md"></p>
              <p className="bg-gray-400 animate-pulse h-[30px] rounded-md"></p>
              <p className="bg-gray-400 animate-pulse h-[30px] rounded-md"></p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between px-20">
              <button>Description</button>
              <button>Additional information</button>
              <button>Reviews (0)</button>
            </div>
            <div></div>
          </div>

          <div className="h-screen mt-10 ">
            <h1 className="font-bold text-2xl px-4">You may also like</h1>
            <ItemCards
              cart={cart}
              handleCart={handleCart}
              loading={loading}
              products={products}
              isSingleItemView={true}
            />
          </div>
        </>
      ) : (
        <>
          <div className="text-sm my-10 hover:text-blue-500 cursor-pointer">
            <p>
              Home / {item.category} / {item.title}
            </p>
          </div>
          {clicked && itemQuantity > 0 && (
            <div className="mb-10 min-h-[80px] bg-green-300 text-center  rounded-lg flex  justify-center items-center py-4 px-10 text-sm">
              <p>
                <Link to="/cart">
                  <span className="border-b border-green-500 cursor-pointer">
                    View cart
                  </span>
                </Link>{" "}
                {itemQuantity} x "{item.title}" have been added to your cart.
              </p>
            </div>
          )}
          <div className="flex">
            <div className="w-1/2  shadow-md rounded-lg flex justify-center min-h-[400px] h-full items-center border-black">
              <img src={item.image} className="w-[200px]" alt="" />
            </div>
            <div className="w-1/2 px-16 space-y-6">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>${item.price.toFixed(2)}</p>
              <button onClick={() => handleClick()}>add this</button>
              <p>Category: {item.category}</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex justify-between px-20">
              <button>Description</button>
              <button>Additional information</button>
              <button>Reviews (0)</button>
            </div>
            <div></div>
          </div>

          <div className="h-screen mt-10 ">
            <h1 className="font-bold text-2xl px-4 ">You may also like</h1>
            <ItemCards
              cart={cart}
              handleCart={handleCart}
              loading={loading}
              products={products}
              isSingleItemView={true}
            />
          </div>
        </>
      )}
      
    </div>
  );
}
