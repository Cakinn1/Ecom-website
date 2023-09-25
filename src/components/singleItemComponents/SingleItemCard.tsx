import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  fetchCategory,
  fetchSingleProduct,
} from "../../api/ApiServices";
import { HomePageProps, ShoppingProps } from "../../types/Types";
import ItemCards from "../homeComponents/ItemCards";
import SingleDescription from "./SingleDescription";

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
  const [showInformation, setShowInformation] = useState<boolean>(false);
  const [showDescription, setShowDescription] = useState<boolean>(false);
  const [showReviews, setShowReviews] = useState<boolean>(false);

  const { id } = useParams();

  const itemQuantity = cart.reduce((total, itemToAdd) => {
    if (itemToAdd.id === item.id) {
      return total + itemToAdd.quantity;
    }
    return total;
  }, 0);

  function handleShowInformation() {
    setShowInformation((prevModal) => !prevModal);
    setShowDescription(false);
    setShowReviews(false);
  }

  function handleShowDescription() {
    setShowDescription((prevModal) => !prevModal);
    setShowInformation(false);
    setShowReviews(false);
  }

  function handleShowReviews() {
    setShowReviews((prevModal) => !prevModal);
    setShowDescription(false);
    setShowInformation(false);
    alert("Reviews are not done :-(");
  }

  function handleClick() {
    handleCart(item);
    setClicked(true);
  }

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
    setProducts(allData);
    setLoading(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchData(id);

    if (item.category) {
      fetchAllData(item.category);
    }
  }, [id, item.category]);

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
      ) : (
        <>
          <div className="text-sm my-10">
            <p className="text-center md:text-left text-[#858c97]">
              Home / {item.category}{" "}
              <span className="text-[#649aaa]">/ {item.title}</span>
            </p>
          </div>
          {clicked && itemQuantity > 0 && (
            <div className="mb-10 min-h-[80px] bg-green-300 text-center  rounded-lg flex  justify-center items-center py-4 px-10 text-sm">
              <p>
                <Link to="/Shopping/Item/cart">
                  <span className="border-b border-green-500 cursor-pointer">
                    View cart
                  </span>
                </Link>{" "}
                {itemQuantity} x "{item.title}" have been added to your cart.
              </p>
            </div>
          )}
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2  shadow-md rounded-lg flex justify-center min-h-[400px] h-full items-center border-black">
              <img src={item.image} className=" w-[200px]" alt="" />
            </div>
            <div className=" md:w-1/2  md:px-16 space-y-6 mt-4 md:mt-0">
              <h1 className="font-bold text-3xl">{item.title}</h1>
              <p className="text-[#576071] text-sm">{item.description}</p>
              <p className="text-black text-2xl">${item.price.toFixed(2)}</p>
              <button
                className="bg-[#649aaa] py-3 px-14 rounded-2xl font-bold text-white "
                onClick={() => handleClick()}
              >
                add this
              </button>
              <hr />
              <p className="text-[#576071]">
                Category:{" "}
                <span className="font-bold text-black">{item.category}</span>
              </p>
            </div>
          </div>

          <div className="my-10">
            <div className="flex items-start flex-col md:flex-rw md:justify-between space-y-8 ">
              <div className="flex justify-between items-center  text-lg md:px-10 w-full">
                <h1
                  className={` md:flex  font-bold cursor-pointer   nav-links ${
                    showDescription && "text-[#649aaa]"
                  }`}
                  onClick={() => handleShowDescription()}
                >
                  Description
                </h1>
                <h1
                  className={` md:flex  font-bold cursor-pointer  nav-links ${
                    showInformation && "text-[#649aaa]"
                  }`}
                  onClick={() => handleShowInformation()}
                >
                  Additional information
                </h1>
                <h1
                  className={` md:flex  font-bold cursor-pointer  nav-links ${
                    showReviews && "text-[#649aaa]"
                  }`}
                  onClick={() => handleShowReviews()}
                >
                  Reviews (0)
                </h1>
              </div>

              {showDescription && (
                <>
                  <SingleDescription
                    image="/desc-1.jpeg"
                    title="Scented Candle"
                    paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nihil adipisci debitis 
                    explicabo iure delectus quos vel odio sit officia deleniti praesentium, dolor voluptatem eius unde enim, excepturi ad numquam!"
                  />
                  <div className="md:flex  gap-x-4">
                    <SingleDescription image="/desc-2.jpeg" width={true} />

                    <div className="space-y-4  md:w-1/2 mt-4 md:mt-0 text-[#576071]">
                      <h1 className="font-bold text-2xl text-black">
                        Description
                      </h1>
                      <p className="text-[#576071]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Natus, animi tempore. Eum, esse? Repellendus
                        maxime quia, fuga illum aliquam non nam. Aut quaerat a,
                        aliquam sapiente labore temporibus corrupti vitae?
                      </p>
                      <p>
                        <span className="font-bold text-black">Lorem:</span>{" "}
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, vel.
                      </p>
                      <p>
                        <span className="font-bold text-black">Lorem:</span>{" "}
                        ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam, vel.
                      </p>
                    </div>
                  </div>
                </>
              )}
              {showInformation && (
                <div className="border h-[80px] w-full text-[#576071] ">
                  <div className="border-b h-[40px] p-2 flex justify-between">
                    <h1 className="font-bold w-1/2 ">Brand</h1>
                    <p className="w-1/2">Moissy Decor</p>
                  </div>
                  <div className="h-[40px] p-2 flex justify-between">
                    <h1 className="font-bold w-1/2 ">Color</h1>
                    <p className="w-1/2">Primary</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="min-h-screen ">
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
