import { Link } from "react-router-dom";
import { ItemProps, MainPostsProps } from "../../types/Types";

export default function MainPosts({ item, loading, isDecor }: MainPostsProps) {
  const title = item.title.replaceAll("Naga", "Bracelet");
  const titleResult = title.substring(0, title.indexOf("Gold"));
  return (
    <>
      {loading ? (
        new Array(3).fill(0).map((_, index) => (
          <div
            key={index}
            className="lg:w-[30%] w-full md:w-[46%] bg-white items-center z-30 p-8 m-3 rounded-lg flex min-h-[140px] h-full gap-x-4 "
          >
            <div className="h-[50px] w-[70px] bg-gray-400 animate-pulse rounded-md" />
            <div className="flex flex-col justify-center space-y-4">
              <p className="h-[30px] w-[100px] bg-gray-400 animate-pulse rounded-md"></p>
              <p className="h-[30px] w-[100px] bg-gray-400 animate-pulse rounded-md"></p>
            </div>
          </div>
        ))
      ) : (
        <Link
          to={`/Shopping/Item/${item.id}`}
          className={`w-full md:w-[46%]  lg:w-[30%] bg-white items-center p-8 m-3 rounded-lg flex min-h-[140px] h-full gap-x-4 ${
            isDecor ? " md:w-[55%] lg:w-[55%]" : ""
          }`}
        >
          <img className="h-[50px]" src={item.image} alt="" />
          <div className="flex flex-col justify-center ">
            <p className="font-bold text-[#434A57]">
              {item.title.split("J")[0].slice(0, 13)}
            </p>

            {isDecor && (
              <p className="font-bold text-[#434A57]">{titleResult}</p>
            )}
            <p className="text-left text-[#576071]">${item.price}</p>
          </div>
        </Link>
      )}
    </>
  );
}
