import React from "react";
import Image from "next/image";
import ProfilePic from "./ProfilePic";
import { BsBookmarks } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
const ImageCard = ({ imageSrc, id, show }) => {
  let blurVal = "0px";
  return (
    <div className="max-w-md min-h-min group relative">
      {show === true ? (
        <div className="w-full p-4 items-start justify-end absolute right-0 z-10 hidden group-hover:flex">
          <BsBookmarks className="w-10 h-10 p-2 bg-white rounded-md mr-2 cursor-pointer" />
          <AiOutlineHeart className="w-10 h-10 p-2 bg-white rounded-md mr-2 cursor-pointer" />
        </div>
      ) : null}

      {show === true ? blurVal == "1px" : null}
      <Image
        src={imageSrc}
        key={id}
        width={500}
        height={500}
        className={`w-full h-full rounded-lg object-center object-cover group-hover:blur-sm`}
        alt=""
      ></Image>
      {show === true ? (
        <div className="w-full p-4 items-center justify-between absolute bottom-0 z-10 hidden group-hover:flex">
          <div className="flex items-center cursor-pointer">
            <ProfilePic width={40} height={40} />
            <span className="ml-2 text-white font-semibold">
              Ankit Lakhiwal
            </span>
          </div>

          <FiDownload className="w-10 h-10 p-2 bg-white rounded-md mr-2 cursor-pointer" />
        </div>
      ) : null}
    </div>
  );
};

export default ImageCard;
