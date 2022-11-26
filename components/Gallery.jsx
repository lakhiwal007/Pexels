import React from "react";
import ImageCard from "./ImageCard";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const Gallery = () => {
  const { docs } = useFirestore("photos");
  const photos = Object.values(docs);
  return (
    <div className="w-full pl-12 pr-12 pt-0">
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {photos.map((photo) => {
            return (
              <motion.div
                key={photo.id}
                className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8 cursor-pointer"
              >
                <ImageCard
                  imageSrc={photo.url}
                  id={photo.id}
                  show={false}
				  photographerName={photo.photographerName}
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
  );
};

export default Gallery;
