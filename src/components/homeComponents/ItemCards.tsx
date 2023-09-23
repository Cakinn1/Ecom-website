import { ItemCardProps, ShoppingProps } from "../../types/Types";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function ItemCards({
  products,
  handleCart,
  cart,
  loading,
  isSingleItemView = false,
  isTrending = false,
}: ItemCardProps) {
  function getStarRating(rating: number) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<RiStarFill className="text-yellow-500" />);
    }

    if (halfStar) {
      stars.push(<RiStarHalfFill className=" text-yellow-500" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<RiStarLine />);
    }

    return stars;
  }
  return (
    <div className="flex  flex-wrap  w-full ">
      {loading
        ? new Array(9)
            .fill(0)
            .map((_, index) => (
              <div
                className="w-[28%] m-4 bg-gray-400 h-[250px] animate-pulse"
                key={index}
              ></div>
            ))
        : isTrending === false
        ? products?.slice(3, 7).map((item) => (
            <div key={item.id} className="w-[28%] m-4 ">
              {isSingleItemView === true && (
                <Link to={`/item/${item.id}`}>
                  <div className="  bg-opacity-20 shadow-md flex justify-center items-center h-[300px]">
                    <img
                      src={item.image}
                      className="w-[200px] object-contain h-[200px]"
                      alt=""
                    />
                  </div>
                </Link>
              )}
              {isSingleItemView === false && (
                <Link to={`/item/${item.id}`}>
                  <div className="  bg-opacity-20 shadow-md flex justify-center items-center h-[300px]">
                    <img
                      src={item.image}
                      className="w-[200px] object-contain h-[200px]"
                      alt=""
                    />
                  </div>
                </Link>
              )}

              <div className="p-4 space-y-2">
                <p>{item.title}</p>
                <div className="flex justify-between items-center">
                  <p>${item.price}</p>
                  <div className="relative">
                    <button
                      onClick={() => handleCart(item)}
                      className="flex justify-center item-center gap-x-1"
                    >
                      <ShoppingCartIcon className="h-5" />
                    </button>
                    {cart?.some((cartItem) => cartItem.id === item.id) && (
                      <div className="absolute  transform top-0 -left-20 w-full group-hover:opacity-100 transition-opacity duration-200">
                        <Link to="/cart">
                          <p className="w-[70px]">view cart</p>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center" key={item.id}>
                  {getStarRating(item.rating.rate)}
                </div>
              </div>
            </div>
          ))
        : products?.map((item) => (
            <div key={item.id} className="w-[28%] m-4 ">
              {isSingleItemView === true && (
                <Link to={`/item/${item.id}`}>
                  <div className="  bg-opacity-20 shadow-md flex justify-center items-center h-[300px]">
                    <img
                      src={item.image}
                      className="w-[200px] object-contain h-[200px]"
                      alt=""
                    />
                  </div>
                </Link>
              )}
              {isSingleItemView === false && (
                <Link to={`/item/${item.id}`}>
                  <div className="  bg-opacity-20 shadow-md flex justify-center items-center h-[300px]">
                    <img
                      src={item.image}
                      className="w-[200px] object-contain h-[200px]"
                      alt=""
                    />
                  </div>
                </Link>
              )}

              <div className="p-4 space-y-2">
                <p>{item.title}</p>
                <div className="flex justify-between items-center">
                  <p>${item.price}</p>
                  <div className="relative">
                    <button
                      onClick={() => handleCart(item)}
                      className="flex justify-center item-center gap-x-1"
                    >
                      <ShoppingCartIcon className="h-5" />
                    </button>
                    {cart?.some((cartItem) => cartItem.id === item.id) && (
                      <div className="absolute  transform top-0 -left-20 w-full group-hover:opacity-100 transition-opacity duration-200">
                        <Link to="/cart">
                          <p className="w-[70px]">view cart</p>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center" key={item.id}>
                  {getStarRating(item.rating.rate)}
                </div>
              </div>
            </div>
          ))}
    </div>
  );
}
