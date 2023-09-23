import React from "react";
import { ItemProps, MainItemProps, ShoppingProps } from "../../types/Types";

export default function MainPosts({
  item,
  loading,
}: {
  item: ItemProps;
  loading: boolean;
}) {
  return (
    <>
      {loading ? (
        new Array(3).fill(0).map((_, index) => (
          <div
            key={index}
            className="w-[30%] bg-white items-center p-8 m-3 rounded-lg flex min-h-[200px] h-full gap-x-4 "
          >
            <div className="h-[50px] w-[70px] bg-gray-400 animate-pulse rounded-md" />
            <div className="flex flex-col justify-center space-y-4">
              <p className="h-[30px] w-[100px] bg-gray-400 animate-pulse rounded-md"></p>
              <p className="h-[30px] w-[100px] bg-gray-400 animate-pulse rounded-md"></p>
            </div>
          </div>
        ))
      ) : (
        <div  className="w-[30%] bg-white items-center p-8 m-3 rounded-lg flex min-h-[200px] h-full gap-x-4 ">
          <img className="h-[50px]" src={item.image} alt="" />
          <div className="flex flex-col justify-center">
            <p className="">{item.title.slice(0, 13)}</p>
            <p>${item.price}</p>
          </div>
        </div>
      )}
    </>
  );
}
