import React from "react";
import Image from "next/image";
import useFirestore from "../hooks/useFirestore";

const ProfilePic = ({ phtographerEmail, width, height }) => {
  const { docs } = useFirestore("photographers");
  const photographers = Object.values(docs);

  const photographer = photographers.find((item) => {
    return item.email === phtographerEmail;
  });
  // console.log(photographer);
  return (
    <div className="flex items-center justify-center bg-pexels  rounded-full p-0">
      {photographer ? (
        <Image
          src={photographer.profilePicURL}
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
