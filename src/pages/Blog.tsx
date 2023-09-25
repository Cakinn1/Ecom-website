import React, { useEffect, useState } from "react";
import { BlogData } from "../BlogData/BlogData";
import BlogItemCards from "../components/blogComponents/BlogItemCards";
import BlogNav from "../components/blogComponents/BlogNav";
import { BlogDefaultDataProps } from "../types/Types";

export default function Blog() {
  const initialData: BlogDefaultDataProps[] = BlogData
  const [data, setData] = useState<BlogDefaultDataProps[]>(initialData);
  const [sortOrder, setSortOrder] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0)
    }, [])
    
  return (
    <div className="my-[100px] mx-auto max-w-[1200px] p-6 ">
      <>
        <BlogNav setSortOrder={setSortOrder} data={data} sortOrder={sortOrder} />
      </>
      <div className="mt-10 w-full flex flex-wrap gap-x-10">
        {data
          .filter((item) => item.category === sortOrder || sortOrder === "")
          .map((item) => (
            <BlogItemCards
              category={item.category}
              date={item.date}
              paragraph={item.paragraph}
              personalName={item.personalName}
              title={item.title}
              img={item.img}
            />
          ))}
      </div>
    </div>
  );
}
