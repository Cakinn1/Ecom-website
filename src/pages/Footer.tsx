import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black h-[220px] ">
      <section
        className="flex justify-center items-center text-center 
    flex-col py-[50px] mx-auto max-w-[1200px]"
      >
        <div className="flex justify-center items-center flex-col space-y-4">
          <img src="/logo.svg" className="" alt="" />
          <ul className="flex gap-x-4">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
          <p>Copyright © 2023 E-com Store</p>
        </div>
      </section>
    </footer>
  );
}
