import { Link } from "react-router-dom";

export default function MainDiscount() {
  return (
    <div>
      <div className="flex gap-x-12 flex-col lg:flex-row space-y-8 lg:space-y-0">
        <div className="flex flex-col  w-full lg:max-w-[600px] space-y-4">
          <h1 className="font-bold text-3xl text-center md:text-left">
            Discount and sales
          </h1>
          <p className="text-center md:text-left text-[#576071] tracking-wide">
            Find aute irure reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur neque congue aliqua dolor do amet sint ovar
            velit officia reprehenderit in voluptate pariatur.
          </p>
          <div className="border md:h-[500px] group relative p-12 w-full md:flex-row flex flex-col bg-[#649aaa59] rounded-3xl">
            <div className="flex flex-col md:space-y-12 space-y-8 md:w-2/3  ">
              <p className="text-[#576071] text-sm uppercase">best selling</p>
              <h1 className="text-[#121519] text-2xl font-bold">
                Wall clocks with a discount of up to 40%
              </h1>
              <p>put the timers here</p>
              <Link to="/shopping">
                <button className="w-1/2 md:w-4/5 group-hover:bg-white    group-hover:duration-500 group-hover:border-none  transition-colors duration-500  border text-[#121519] border-[#121519] rounded-2xl px-4 py-3">
                  explore the catalog
                </button>
              </Link>
            </div>
            <img
              src="/banner-2.png"
              className="md:w-1/2 lg:w-2/3 lg:absolute  object-contain -right-32 bottom-[100px] "
              alt=""
            />
          </div>
        </div>

        <div className="space-y-12 ">
          <div className=" px-12 py-20 lg:max-w-[550px] w-full  bg-[#f6f9fc] rounded-3xl flex  ">
            <div className="w-1/2 flex  space-y-16 ">
              <div className="space-y-4">
                <p className="uppercase text-sm text-[#576071] ">sale</p>
                <h1 className="font-bold text-3xl tracking-wider">
                  <span className="text-7xl">10%</span> <br />
                  off the first order
                </h1>
                <p className="text-sm text-[#576071]">
                  When ordering from $120 in one payment
                </p>
              </div>
            </div>

            <figure className="flex mx-auto justify-center items-center w-1/2">
              <img src="banner-1.png" alt="" />
            </figure>
          </div>
          <div className="border w-full rounded-3xl p-10 space-y-3">
            <h1 className="text-2xl">Subscribe to the newsletter</h1>
            <p className="text-[#576071] text-sm">Recieve information about discounts and new arrivals</p>
            <form onSubmit={(e) => e.preventDefault()} className="relative">
              <input
                type="email"
                className="h-[60px] placeholder:text-sm w-full text-lg pr-32 focus:outline-none border px-4 rounded-2xl"
                placeholder="Your email"
              />
              <button className="absolute right-4 top-2 bottom-2 border bg-[#649aaa] text-white px-4 rounded-2xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
