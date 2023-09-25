import React from "react";
import { BlogDefaultDataProps } from "../../BlogData/BlogData";

interface BlogNavProps {
  setSortOrder: any;
  data: BlogDefaultDataProps[];
  sortOrder: string;
}

export default function BlogNav({
  setSortOrder,
  data,
  sortOrder,
}: BlogNavProps) {
  const filteredData = data.filter((item) => item.category === sortOrder);
  return (
    <div className="flex justify-between md:items-center flex-col md:flex-row space-y-3 lg:space-y-0 ">
      <div>
        {sortOrder ? (
          <h1 className="font-bold text-3xl flex gap-x-4">
            Category:
            <span>
              {filteredData.length > 0 && <div>{filteredData[0].category}</div>}
            </span>
          </h1>
        ) : (
          <h1 className="font-bold text-3xl flex gap-x-4">Blog</h1>
        )}
      </div>

      <div className="border text-[#576071] text-sm py-4 px-6 rounded-2xl ">
        <select
          className="pr-2 focus:outline-none w-full"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Travel">Travel</option>
          <option value="Books">Books</option>
          <option value="Strategy">Strategy</option>
          <option value="Business">Business</option>
          <option value="Inspiration">Inspiration</option>
          <option value="Ecommerce">Ecommerce</option>
        </select>
      </div>
    </div>
  );
}
