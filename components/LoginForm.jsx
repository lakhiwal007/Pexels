import React from "react";
import { useState } from "react";
// import { app } from "../firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import useFirestore from "../hooks/useFirestore";
import { useRouter } from "next/router";

const LoginForm = () => {
  const router = useRouter();
  const { docs } = useFirestore("photographers");
  const photographers = Object.values(docs);
  let auth = getAuth();
  let googleProvider = new GoogleAuthProvider();
  const [inputData, setInputData] = useState({});
  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setInputData({ ...inputData, ...newInput });
  };

  const googleSubmit = () => {
    signInWithPopup(auth, googleProvider)
      .then((response) => {
        // console.log(response.user.email);
        if (
          photographers.some((item) => {
            console.log(item.email === response.user.email);
            return item.email === response.user.email;
          })
        ) {
          router.push("/");
        } else router.push("/edit-profile");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, inputData.email, inputData.password)
      .then((response) => {
        // console.log(response.user.email);
        if (
          photographers.some((item) => {
            return item.email === response.user.email;
          })
        ) {
          router.push("/");
        } else router.push("/edit-profile");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="w-full h-full flex items-start justify-center">
      <div className="w-[40%] h-[80%] bg-white rounded-md overflow-y-scroll scrollbar-hide">
        <div className="w-full h-screen flex flex-col items-center justify-center text-center relative">
          <div className="p-20 items-start">
            <h2 className="text-5xl font-bold mb-8">Welcome Back To Pexels</h2>
            <button
              type="button"
              className="w-full bg-blue-700 p-2 text-white font-semibold mb-8"
              onClick={() => googleSubmit()}
            >
              Join with Google
            </button>
            <button className="w-full bg-black p-2 text-white font-semibold mb-8">
              Join with Apple
            </button>
            <p className="mb-4">or</p>
            <form action="" method="post" className="w-full">
              <div className="w-full flex flex-col justify-center">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-sm p-2 mb-8 outline-none bg-white border border-gray-400 text-black font-light focus:placeholder:text-black placeholder:font-light overflow-hidden"
                  onChange={(event) => handleInput(event)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full rounded-sm p-2 mb-8 outline-none bg-white border border-gray-400 text-black font-light focus:placeholder:text-black placeholder:font-light overflow-hidden"
                  onChange={(event) => handleInput(event)}
                />
                <button
                  type="submit"
                  className="bg-pexels rounded-sm p-2 text-white font-semibold"
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-[12px] text-gray-400 mt-8">
              By joining, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
