import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ counter }: { counter: number }) {
  return (
    <section className="fixed top-0 w-full shadow-md  bg-white z-50 ">
      <nav className="max-w-[1200px] mx-auto flex justify-between    items-center p-6 h-[80px]">
        <div className="flex justify-center items-center gap-12">
          <Link to="/">
            <img src="/logo.svg" alt="" />
          </Link>
          <ul className="flex justify-center items-center gap-x-12">
            <li>Home</li>
            <li>Pages</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <Link to="/cart">
          <div className="relative">
            <ShoppingCartIcon className="h-6" />
            {counter > 0 ? (
              <p className="absolute -top-3 text-white  bg-red-300 rounded-full w-[24px] flex justify-center items-center -right-2">
                {counter}
              </p>
            ) : null}
          </div>
        </Link>
      </nav>
    </section>
  );
}
