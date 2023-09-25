import {
  Bars3Icon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Auth, onAuthStateChanged, signOut, User } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { RiLockFill, RiMenu2Fill, RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import BurgerMenuLinks from "../components/navComponents/BurgerMenuLinks";
import { auth } from "../firebase/Firebase";
import { AuthProps, NavProps } from "../types/Types";

export default function Nav({ counter, cart }: NavProps) {
  const [cartMenu, setCartMenu] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [user, setUser] = useState<AuthProps | null>(null);

  function handleCartMenu() {
    setCartMenu((prevBooleanValue) => !prevBooleanValue);
  }

  function handleBurgerMenu() {
    setIsOpen((prevBooleanValue) => !prevBooleanValue);
  }

  async function logoutUser() {
    try {
      await signOut(auth);
      console.log("sign out successful");
    } catch (error) {
      console.log("sign out error", error);
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user: User | null) => {
      setUser(user && { email: user.email || "" });
    });
  }, []);

  return (
    <section className="fixed top-0 w-full shadow-md  bg-white z-50  ">
      {cartMenu && (
        <div className="relative w-full bg-black  h-full p-0 m-0 mx-auto">
          <div
            onClick={() => handleCartMenu()}
            className=" cursor-pointer w-full bg-black absolute h-screen bg-opacity-30"
          ></div>
          <div
            className={`absolute h-full bg-white min-h-screen w-full md:w-1/2  right-0 p-20  ${
              cartMenu ? "animate-slide-in-right" : "animate-slide-out-right"
            } `}
          >
            <XMarkIcon
              className="h-8 cursor-pointer ml-auto  border-2 rounded-full text-[#649AAA]  "
              onClick={() => handleCartMenu()}
            />

            <div className="flex justify-center items-center h-full text-center flex-col space-y-4">
              {cart.length > 0 ? (
                "add cart here"
              ) : (
                <>
                  {" "}
                  <RiLockFill className="text-[70px] text-[#649AAA]" />
                  <h1 className="font-bold text-2xl">
                    Your cart is currently empty!
                  </h1>
                </>
              )}

              <Link to="/shopping" onClick={() => handleCartMenu()}>
                <button className=" px-6 py-2 rounded-2xl text-white font-semibold bg-[#649AAA]">
                  Start shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="bg-white absolute w-full h-screen">
          <div className="relative w-full h-full  mx-auto max-w-[1200px] ">
            <div
              className={`absolute w-full min-h-screen p-10 animation-overlay__menu `}
            >
              <XMarkIcon
                onClick={() => handleBurgerMenu()}
                className="h-8 cursor-pointer border-2 rounded-full text-[#649AAA] ml-auto mb-10"
              />
              <ul className="border  rounded-3xl shadow-lg p-10 text-lg font-semibold  ">
                <BurgerMenuLinks
                  linkto="/"
                  title="Home"
                  handleBurgerMenu={handleBurgerMenu}
                />
                <BurgerMenuLinks
                  linkto="/Blog"
                  title="Blog"
                  handleBurgerMenu={handleBurgerMenu}
                />
                <BurgerMenuLinks
                  linkto="/shopping"
                  title="Shopping"
                  handleBurgerMenu={handleBurgerMenu}
                />
                <BurgerMenuLinks
                  linkto="/contact"
                  title="Contact"
                  handleBurgerMenu={handleBurgerMenu}
                />
              </ul>
            </div>
          </div>
        </div>
      )}

      <nav className="max-w-[1200px] mx-auto flex justify-between    items-center p-6 h-[80px]">
        <div className=" lg:flex justify-center items-center gap-12 hidden">
          <Link to="/">
            <img src="/logo.svg" alt="" />
          </Link>
          <ul className="flex justify-center items-center gap-x-12">
            <Link to="/">
              <li className="nav-links">Home</li>
            </Link>
            <Link to="/Blog">
              <li className="nav-links">Blog</li>
            </Link>
            <Link to="/shopping">
              <li className="nav-links">Shopping</li>
            </Link>
            <Link to="/contact">
              <li className="nav-links">Contact</li>
            </Link>
          </ul>
        </div>

        {!isOpen && (
          <div className="lg:hidden">
            <Bars3Icon
              className="h-5 cursor-pointer"
              onClick={() => handleBurgerMenu()}
            />
          </div>
        )}

        <div className="relative">
          <div className="flex justify-center items-center gap-x-4 ">
            {counter > 0 && (
              <div className="flex justify-center items-center gap-x-4">
                {user === null && (
                  <Link to="/my-account">
                    <p className="text-sm">Sign up</p>
                  </Link>
                )}
                <UserIcon
                  onClick={() => logoutUser()}
                  className="h-6 cursor-pointer"
                />
                <Link to="/Shopping/Item/cart">
                  <ShoppingCartIcon className="h-6 cursor-pointer" />
                </Link>
              </div>
            )}
            {counter > 0 ? (
              <p className="absolute -top-3 text-white  bg-red-300 rounded-full w-[24px] flex justify-center items-center -right-2">
                {counter}
              </p>
            ) : null}
            {counter <= 0 && !cartMenu && (
              <>
                <div className="flex justify-center items-center gap-x-4">
                  {user === null ? (
                    <Link to="/my-account">
                      <p className="text-sm">Sign up</p>
                    </Link>
                  ) : (
                    ""
                  )}
                  <UserIcon
                    onClick={() => logoutUser()}
                    className="h-6 cursor-pointer"
                  />
                </div>
                <ShoppingCartIcon
                  onClick={() => handleCartMenu()}
                  className="h-6 cursor-pointer"
                />
              </>
            )}

            {cartMenu ? (
              ""
            ) : (
              <>
                {((user !== null && counter <= 0) ||
                  (user !== null && counter > 0)) && (
                  <div className="absolute left-4 bottom-0 bg-green-500 h-2 w-2 rounded-full"></div>
                )}
                {((user === null && counter > 0) ||
                  (user === null && counter <= 0)) && (
                  <div className="absolute left-[80px] bottom-0 bg-red-500 h-2 w-2 rounded-full"></div>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </section>
  );
}
