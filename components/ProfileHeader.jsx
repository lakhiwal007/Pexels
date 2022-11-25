import React from "react";
import { useRouter } from "next/router";
import { GoSearch } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import ProfilePic from "./ProfilePic";
import Logo from "./Logo";
const ProfileHeader = () => {
  const router = useRouter();
  return (
    <div className="w-full h-20 bg-white flex items-center justify-between top-0 sticky z-50 border border-gray-100">
      <div className="min-w-min flex items-center">
        <Logo width={"50px"} height={"50px"} />
        <h2 className="p-2 text-2xl">Pexels</h2>
      </div>
      <div className="w-full flex relative items-center group">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for free photos"
          className="w-full rounded-md p-3 m-2 outline-none bg-gray-100 text-gray-400 font-semibold group-hover:bg-white group-hover:border group-hover:border-gray-300 placeholder:font-semibold overflow-hidden"
        />
        <div className="absolute right-2 bg-gray-100 font-semibold p-3 rounded-md group-hover:bg-white group-hover:border group-hover:border-gray-300 cursor-pointer">
          <GoSearch className="text-2xl right-8 text-gray-400 " />
        </div>
      </div>
      <div className="min-w-min">
        <ul className="flex text-xl items-center">
          <li className="pl-8 hover:cursor-pointer">
            <AiOutlineBell />
          </li>
          <li className="flex items-center pl-8 hover:cursor-pointer">
            <ProfilePic width={20} height={20} />
            <span>
              <MdKeyboardArrowDown />
            </span>
          </li>
          <li className="pl-8 hover:cursor-pointer pr-4 text-white">
            {" "}
            <button
              type="button"
              className="bg-pexels pt-3 pb-3 pr-4 pl-4 rounded-md hover:cursor-pointer"
              onClick={() => router.push("/upload")}
            >
              Upload
            </button>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileHeader;
