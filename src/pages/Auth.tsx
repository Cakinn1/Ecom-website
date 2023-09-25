import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import AuthButton from "../components/authComponent/AuthButton";
import AuthForm from "../components/authComponent/AuthForm";

export default function Auth() {
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [registerUser, setRegisterUser] = useState<boolean>(false);
  const navigate = useNavigate();

  function createUser() {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        if (user) {
          navigate("/");
        }
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

  function handleUserToggle(isRegister: boolean) {
    setRegisterUser(isRegister);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="starting-container flex w-full relative">
      <div
        className="md:p-40 lg:p-4 flex justify-center p-4 flex-col space-y-4 w-full lg:w-1/2"
        style={{ height: "calc(100vh - 140px)" }}
      >
        <div className="flex justify-between gap-x-4 w-full ">
          <AuthButton
            handleUserToggle={handleUserToggle}
            value={false}
            title="Register"
          />
          <AuthButton
            handleUserToggle={handleUserToggle}
            value={true}
            title="Sign in"
          />
        </div>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <>
            <AuthForm
              value={email}
              setFunction={setEmail}
              title="Email Address"
              type="Email"
            />
            <AuthForm
              type="Password"
              value={password}
              setFunction={setPassword}
              title="Password"
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
    </section>
  );
}
