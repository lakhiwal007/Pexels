import React from "react";
import Image from "next/image";
import ProfilePic from "./ProfilePic";
import { BsBookmarks } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
const ImageCard = ({ imageSrc, id, photographerName }) => {
  return (
    <div className="max-w-md min-h-min group relative">
      <div className="w-full p-4 items-start justify-end absolute right-0 z-10 hidden group-hover:flex">
        <BsBookmarks className="w-10 h-10 p-2 bg-white rounded-md mr-2 cursor-pointer" />
        <AiOutlineHeart className="w-10 h-10 p-2 bg-white rounded-md mr-2 cursor-pointer" />
      </div>

      <Image
        src={imageSrc}
        key={id}
        width={500}
        height={500}
        className={`w-full h-full rounded-lg object-center object-cover group-hover:blur-sm`}
        alt=""
      ></Image>

      <div className="w-full p-4 items-center justify-between absolute bottom-0 z-10 hidden group-hover:flex">
        <Link
          href={{
            pathname: "/user",
            query: { name: photographerName },
          }}
        >
          <a>
            <div className="flex items-center cursor-pointer">
              <ProfilePic photographerName={photographerName} width={40} height={40} />
              <span className="ml-2 text-white font-semibold">
                {photographerName}
              </span>
            </div>
          </a>
        </Link>

        <a href={imageSrc} target="_blank" rel="noreferrer">
          <FiDownload className="w-10 h-10 p-2 bg-white rounded-md mr-2 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
