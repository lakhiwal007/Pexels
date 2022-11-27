import React from "react";
import Image from "next/image";
import useFirestore from "../hooks/useFirestore";

const ProfilePic = ({ photographerName, width, height }) => {
  const { docs } = useFirestore("photographers");
  const photographers = Object.values(docs);

  const photographer = photographers.find(
    (item) => item.email.split("@")[0] === photographerName
  );
  // console.log(photographer);
  return (
    <div className="flex items-center justify-center bg-pexels  rounded-full p-0">
      {photographer ? (
        <Image
          src={photographer.photoURL}
          width={width}
          height={height}
          className="object-contain rounded-full"
          alt=""
        ></Image>
      ) : (
        <Image
          src="/images/user_default.png"
          width={width}
          height={height}
          className="object-contain rounded-full"
          alt=""
        ></Image>
      )}
    </div>
  );
};

export default ProfilePic;
