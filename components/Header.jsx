import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./Logo";
import { GoSearch } from "react-icons/go";
import { app } from "../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import Image from "next/image";
import { useState } from "react";
import useFirestore from "../hooks/useFirestore";
const Header = () => {
  const router = useRouter();
  const [user, loading] = useAuthState(getAuth(app));
  const [value, setValue] = useState(false);
  const { docs } = useFirestore("photographers");
  const photographers = Object.values(docs);
  const auth = getAuth();
  const handleSubmit = () => {
    setValue(!value);
  };
  useEffect(() => {
    if (user == null) {
      router.push("/login");
    }
  }, [user, router]);

  if (loading)
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );

  return (
    <div className="w-full h-20 bg-white flex items-center justify-between top-0 sticky z-50 ">
      <Link href="/">
        <a>
          <div className="min-w-min flex items-center">
            <Logo width={"50px"} height={"50px"} />
            <h2 className="p-2 text-2xl">Pexels</h2>
          </div>
        </a>
      </Link>
      <div className="w-full flex relative items-center group">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for free photos"
          className="w-full rounded-md p-3 m-2 outline-none bg-gray-100 text-gray-400 font-semibold group-hover:bg-white group-hover:border group-hover:border-gray-300 placeholder:font-semibold overflow-hidden"
        />
        <div className="absolute right-2 bg-gray-100 font-semibold p-3 rounded-md group-hover:bg-white group-hover:border-r  group-hover:border-gray-300 cursor-pointer">
          <GoSearch className="text-2xl right-8 text-gray-400 " />
        </div>
      </div>
      <div className="min-w-min relative">
        <ul className="flex text-xl items-center">
          {user ? (
            <li className="px-8 hover:cursor-pointer">
              <Link href="/upload">
                <a>Upload</a>
              </Link>
            </li>
          ) : (
            ""
          )}

          {user ? (
            <li onClick={handleSubmit} className="pr-2 hover:cursor-pointer">
              <Image
                src={user.photoURL}
                width={70}
                height={70}
                className={`w-full h-full rounded-full object-center cursor-pointer object-cover`}
                alt=""
              ></Image>
            </li>
          ) : (
            <li onClick={handleSubmit} className="pr-2 hover:cursor-pointer">
              <Image
                src={"/images/user_default.png"}
                width={70}
                height={70}
                className={`w-full h-full rounded-full object-center cursor-pointer object-cover`}
                alt=""
              ></Image>
            </li>
          )}
          {value ? (
            <div className="w-[120px] h-[60px] px-2 bg-gray-400 rounded top-20 font-bold text-lg right-5 fixed">
              <ul>
                <Link href="/edit-profile">
                  <a>
                    <li>edit-profile</li>
                  </a>
                </Link>
                <li>
                  <a onClick={signOut(auth)}>log out</a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
          {user ? (
            ""
          ) : (
            <li className="pl-8 hover:cursor-pointer pr-4 text-white">
              <button
                type="button"
                className="bg-pexels pt-3 pb-3 pr-4 pl-4 rounded-md hover:cursor-pointer"
                onClick={() => router.push("/join-contributer")}
              >
                Join
              </button>{" "}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
