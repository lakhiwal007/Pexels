
import React from "react";
import ImageCard from "../components/ImageCard";
import useFirestore from "../hooks/useFirestore";

const LoginBG = () => {
  const { docs } = useFirestore("photos");
  const photos = Object.values(docs);
  return (
    <div className="grid grid-cols-1 gap-y-10 p-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {photos.map((photo) => {
        return (
          <div
            className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
            key={photo.id}
          >
            <ImageCard
              imageSrc={photo.url}
              key={photo.id}
              id={photo.id}
              show={false}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LoginBG;
