import { ArrowPathIcon } from "@heroicons/react/24/outline";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registerUser, setRegisterUser] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  function createUser() {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user.email);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }

  function signUserIn() {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        if (user) {
          navigate("/");
        }
        setLoading(false);
        console.log(user.email);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }
  const navigate = useNavigate();

  function handleUserToggle(isRegister: boolean) {
    setRegisterUser(isRegister);
  }

  return (
    <div className="mt-[80px] flex w-full mx-auto max-w-[1200px] relative">
      <div
        className="md:p-40  lg:p-4 flex justify-center p-4 flex-col space-y-4 w-full lg:w-1/2"
        style={{ height: "calc(100vh - 140px)" }}
      >
        <div className="flex justify-between gap-x-4 w-full ">
          <button
            onClick={() => handleUserToggle(false)}
            className="border-[#649aaa] border text-[#649aaa]  font-bold text-lg w-full py-4 rounded-2xl"
          >
            Register
          </button>
          <button
            onClick={() => handleUserToggle(true)}
            className="border-[#649aaa] border text-[#649aaa] font-bold text-lg w-full py-4 rounded-2xl"
          >
            Sign In
          </button>
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <>
            <h1 className="text-sm">
              Email address <span className="text-red-500">*</span>
            </h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full focus:outline-none border py-4 px-4 rounded-2xl focus:border-black text-sm"
            />
            <h1 className="text-sm">
              Password <span className="text-red-500">*</span>
            </h1>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full focus:outline-none border py-4 px-4 rounded-2xl focus:border-black text-sm"
            />
            {loading ? (
              <button
                className="w-full flex justify-center items-center  text-white bg-[#649aaa] font-bold py-3 rounded-2xl"
                onClick={() => (!registerUser ? createUser() : signUserIn())}
              >
                <AiOutlineLoading3Quarters className="text-2xl text-black animate-spin" />
              </button>
            ) : (
              <button
                className="w-full  text-white bg-[#649aaa] font-bold py-3 rounded-2xl"
                onClick={() => (!registerUser ? createUser() : signUserIn())}
              >
                {!registerUser && "Register"}
                {registerUser && "Sign in"}
              </button>
            )}
          </>
        </form>
      </div>
      <img
        src="/cover.jpeg"
        className="hidden lg:flex w-1/2 object-cover absolute right-0 h-full "
        alt=""
      />
    </div>
  );
}
