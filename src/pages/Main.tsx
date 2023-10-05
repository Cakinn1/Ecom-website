import { useEffect, useState } from "react";
import { fetchAllProductData } from "../api/ApiServices";
import { ItemCardProps, ShoppingProps } from "../types/Types";
import { defaultValue } from "../components/singleItemComponents/SingleItemCard";
import MainHome from "../components/mainComponents/MainHome";
import MainCategories from "../components/mainComponents/MainCategories";
import MainTrending from "../components/mainComponents/MainTrending";
import MainDecor from "../components/mainComponents/MainDecor";
import MainServices from "../components/mainComponents/MainServices";
import MainIdeas from "../components/mainComponents/MainIdeas";
import MainDiscount from "../components/mainComponents/MainDiscount";
import MainBlog from "../components/mainComponents/MainBlog";
import { Link } from "react-router-dom";
import MainFollowUs from "../components/mainComponents/MainReusables/MainFollowUs";
import { ArchiveBoxIcon } from "@heroicons/react/24/outline";
import {
  RiHeadphoneLine,
  RiMoneyCnyBoxLine,
  RiSafe2Line,
} from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export interface MainProps {
  posts: ShoppingProps[];
  loading: boolean;
}

export default function Main({ handleCart, cart, products }: ItemCardProps) {
  const [posts, setPosts] = useState<ShoppingProps[]>([defaultValue]);
  const [loading, setLoading] = useState<boolean>(false);
  const [onLoad, setOnLoad] = useState<boolean>(true);
  const text = "";
  async function fetchData(text: string) {
    setLoading(true);
    const data: ShoppingProps[] = await fetchAllProductData(text);
    data.sort((a, b) => b.rating.rate - a.rating.rate);
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setOnLoad(false);
    }, 3000);
    window.scrollTo(0, 0);
    fetchData(text);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative">
      {onLoad && (
        <div
          className="bg-[#101820]  animate-slide-out-top absolute w-screen flex justify-center items-center -top-20 z-50"
          style={{ height: "200vh" }}
        >
          <AiOutlineLoading3Quarters className="text-white mb-[100vh] text-4xl animate-spin" />
        </div>
      )}

      <MainHome posts={posts} loading={loading} />
      <div className="my-[100px] ">
        <h1 className="mx-auto max-w-[1200px] p-6 font-bold text-3xl text-center md:text-left">
          Categories
        </h1>
        <MainCategories />
      </div>
      <div>
        <h1 className="mx-auto max-w-[1200px] p-6 font-bold text-3xl">
          Trending Products
        </h1>
        <MainTrending handleCart={handleCart} cart={cart} />
      </div>
      <div className="">
        <MainDecor />
      </div>
      <div>
        <div className="mx-auto max-w-[1200px] p-6 ">
          <div className="flex flex-wrap w-full ">
            <MainServices
              icon={<ArchiveBoxIcon className="h-10 text-[#649aaa]" />}
              title="Fast and free delivery"
              paragraph="Free delivery for all orders over $200 honcus egestas lorem honcus egestas"
            />
            <MainServices
              icon={
                <RiMoneyCnyBoxLine className="text-[40px] text-[#649aaa]" />
              }
              title="Money back guarantee"
              paragraph="We return money within 30 days honcus egestas lorem honcus egestas"
            />
            <MainServices
              icon={<RiHeadphoneLine className="text-[40px] text-[#649aaa]" />}
              title="24/7 customer support"
              paragraph="Friendly 24/7 customer support honcus egestas lorem honcus egestas"
            />
            <MainServices
              icon={<RiSafe2Line className="text-[40px] text-[#649aaa]" />}
              title="Secure online payment"
              paragraph="We possess SSL / Secure certificate honcus egestas lorem honcus egestas"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] p-6 my-[100px]">
        <h1 className="font-bold text-4xl px-6">Ideas for your home</h1>
        <MainIdeas />
      </div>
      {/* <div className=" mx-auto max-w-[1200px] p-6">
        <MainDiscount />
      </div> */}
      <div className="mx-auto max-w-[1200px] p-6 my-[100px]">
        <h1 className="font-bold text-3xl tracking-wide">Our Blog</h1>
        <div className="mt-[20px] flex flex-wrap gap-x-4 space-y-8 md:space-y-0">
          <MainBlog
            paragraph="Sed convallis integer egestas sapien sapien purus enim massa porttitor vulputate metus purus in fringilla…"
            title="How to define goals and objectives"
            img="/post-4.jpg"
          />
          <MainBlog
            paragraph="Mauris suscipit in tempor, platea lobortis mollis rutrum aliquam pulvinar ultricies orci augue libero…"
            title="Outgoing year results, the main news"
            img="/post-5.jpg"
          />
          <MainBlog
            paragraph="Orci massa sapien varius odio et vel egestas ultricies commodo tristique ullamcorper sit vitae cursus…"
            title="New business strategies for 2023"
            img="/post-7.jpg"
          />
        </div>
        <Link to="/" className="flex justify-center mt-10">
          <button className="px-6 py-3 rounded-2xl border border-[#649AAA] text-[#649AAA] font-semibold">
            More articles
          </button>
        </Link>
      </div>

      <MainFollowUs />
    </div>
  );
}
