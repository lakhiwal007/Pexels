import React from "react";
// import { useState, useEffect } from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import ImageCard from "../components/ImageCard";
// import { getDocs, collection, onSnapshot } from "firebase/firestore";
// import { database } from "../firebaseConfig";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const Main = () => {
  const { docs } = useFirestore("photos");
  const photos = Object.values(docs);
  const mainPhotosUrl = photos.map((photo) => {
    return photo.url;
  });

  const mainPhotoUrl =
    mainPhotosUrl[Math.floor(Math.random() * mainPhotosUrl.length)];

  return (
    <div className="w-full min-h-screen relative">
      <div className="w-full z-0 h-[80vh] relative">
        <Image src={mainPhotoUrl} alt="" layout="fill"></Image>
      </div>
      <div className="w-full bg-white">
        <ul className="w-full flex items-center justify-center p-8 text-lg">
          <li className="pl-4 text-gray-800 cursor-pointer pt-2 pb-2 pl-4 pr-4 hover:bg-black hover:text-white hover:rounded-full">
            Home
          </li>
          <li className="pl-4 text-gray-800 cursor-pointer pt-2 pb-2 pl-4 pr-4 hover:bg-black hover:text-white hover:rounded-full">
            Videos
          </li>
          <li className="pl-4 text-gray-800 cursor-pointer pt-2 pb-2 pl-4 pr-4 hover:bg-black hover:text-white hover:rounded-full">
            Leaderboard
          </li>
          <li className="pl-4 text-gray-800 cursor-pointer pt-2 pb-2 pl-4 pr-4 hover:bg-black hover:text-white hover:rounded-full">
            Challenges
          </li>
        </ul>
      </div>

      <div className="w-full min-h-min flex items-center justify-center flex-col relative">
        <div className="w-full flex items-center justify-center flex-col px-auto relative">
          <div className="w-full min-h-min flex items-center justify-center relative">
            <ul className="w-full flex items-center justify-between p-4">
              <li className="text-3xl">Free Stock Photos</li>
              <li className="flex items-center text-lg bg-white border pr-6 pl-8 pt-4 pb-4 border-gray-300 rounded-md cursor-pointer">
                Trending
                <MdKeyboardArrowDown className="text-xl ml-2" />
              </li>
            </ul>
          </div>
          <div className="w-full min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {photos.map((photo) => {
                return (
                  <motion.div
                    key={photo.id}
                    className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
                    layout
                  >
                    <ImageCard
                      imageSrc={photo.url}
                      key={photo.id}
                      id={photo.id}
                      show={true}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
