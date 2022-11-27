import Head from "next/head";
import React from "react";
import Link from "next/link";
import ProfileHeader from "./ProfileHeader";
import ProfilePic from "./ProfilePic";
import { addDoc, collection } from "firebase/firestore";
import { database, storage, timestamp } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";

const Edit_profile = () => {
  const [inputData, setInputData] = useState({});
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(null);
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jfif"];

  const collectionRef = collection(database, "photographers");

  const handleFile = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage && types.includes(selectedImage.type)) {
      setFile(selectedImage);
      setErr("");
    } else {
      setFile(null);
      setErr("Please select a image!");
    }
  };

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };
    setInputData({ ...inputData, ...newInput });
  };

  const handleSubmit = () => {
    
    const storageRef = ref(storage, `profilePic/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percentage =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percentage);
        setProgress(percentage);
      },
      (err) => {
        setErr(err);
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setUrl(downloadURL);
          const createdAt = timestamp;
          addDoc(collectionRef, {
            first_name: inputData.firstName,
            last_name: inputData.lastName,
            profilePicURL: downloadURL,
            email: inputData.email ? inputData.email : null,
            PayPalEmail: inputData.Payemail ? inputData.Payemail : null,
            bio: inputData.bio ? inputData.bio : null,
            location: inputData.location ? inputData.location : null,
            Website: inputData.Website ? inputData.Website : null,
            Twitter: inputData.Twitter ? inputData.Twitter : null,
            Instagram: inputData.Instagram ? inputData.Instagram : null,
            Youtube: inputData.Youtube ? inputData.Youtube : null,
            Tiktok: inputData.Tiktok ? inputData.Tiktok : null,
            createdAt: createdAt,
          })
            .then(() => {
              alert("photographer added!");
            })
            .catch((err) => {
              alert(err.message);
            });
        });
      }
    );
  };

  return (
    <div>
      <Head>
        <title>Free Stock Photos, Royality Free Stock Images - Pexels</title>
      </Head>
      <ProfileHeader />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <p className="text-5xl mt-16 font-semibold mb-8">Profile settings</p>
        <div className="w-1/2 min-h-screen flex flex-col items-center justify-center border border-gray-100 p-8">
          <div className="w-full flex items-center justify-center ">
            <ProfilePic width={100} height={100} />
            <form action="" method="post" className="ml-4">
              <input
                type="file"
                className="cursor-pointer file:cursor-pointer file:bg-pexels file:outline-none file:p-2 file:pl-4 file:pr-4 file:rounded-md file:text-white file:font-light file:border-none"
                onChange={handleFile}
              />
            </form>
          </div>
          <div className="w-full relative">
            <form
              action=""
              method="post"
              className="w-full flex flex-col flex-wrap items-center justify-center"
            >
              <div className="w-full flex justify-center">
                <div className="flex flex-col mr-2 mt-8">
                  <label htmlFor="firstName" className="mb-2">
                    First name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="flex flex-col mt-8">
                  <label htmlFor="lastName" className="mb-2">
                    Last name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  />
                </div>
              </div>
              <p className="text-[12px] mt-1 text-gray-300 font-normal">
                We’d like people to use real names in a community, so people
                would know who’s who.
              </p>
              <div className="w-full flex justify-center">
                <div className="flex flex-col mr-2 mt-8">
                  <label htmlFor="email" className="mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="flex flex-col mt-8">
                  <label htmlFor="Payemail" className="mb-2">
                    Paypal email for donations
                  </label>
                  <input
                    type="text"
                    name="Payemail"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  />
                  <p className="text-[12px] mt-1 text-gray-300 font-normal">
                    Note that this email will be public.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold">Password</p>
                <Link href="/change-password">
                  <a>Change Password</a>
                </Link>
                <p className="mt-2 text-xl font-semibold">
                  Remove account and all the data
                </p>
                <Link href="/change-password">
                  <a>Remove account</a>
                </Link>
              </div>
              <p className="text-5xl mt-16 font-semibold mb-8">Recognition</p>
              <div className="w-full flex justify-center">
                <div className="flex flex-col mr-2 mt-8">
                  <label htmlFor="bio" className="mb-2">
                    Short bio
                  </label>
                  <textarea
                    name="bio"
                    id=""
                    cols="50"
                    rows="10"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  ></textarea>
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="flex flex-col mr-2 mt-8">
                  <label htmlFor="location" className="mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  />
                  {/* <p className="text-[12px] mt-1 text-gray-300 font-normal">By sharing your location you help us to make you profile more recognizable.</p> */}
                </div>
                <div className="flex flex-col mt-8">
                  <label htmlFor="website" className="mb-2">
                    Website
                  </label>
                  <input
                    type="text"
                    name="Website"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  />
                  {/* <p className="text-[12px] mt-1 text-gray-300 font-normal">Your portfolio, home page, blog.</p> */}
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="flex flex-col mr-2 mt-8">
                  <label htmlFor="twitter" className="mb-2">
                    Twitter
                  </label>
                  <input
                    type="text"
                    name="Twitter"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="flex flex-col mt-8">
                  <label htmlFor="Instagram" className="mb-2">
                    Instagram
                  </label>
                  <input
                    type="text"
                    name="Instagram"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  />
                </div>
              </div>
              <div className="w-full flex justify-center">
                <div className="flex flex-col mr-2 mt-8">
                  <label htmlFor="Youtube" className="mb-2">
                    Youtube
                  </label>
                  <input
                    type="text"
                    name="Youtube"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="flex flex-col mt-8">
                  <label htmlFor="TikTok" className="mb-2">
                    TikTok
                  </label>
                  <input
                    type="text"
                    name="TikTok"
                    className="p-3 rounded-md focus:shadow-lg outline-none border border-gray-300"
                    onChange={(e) => handleInput(e)}
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <button
                  type="button"
                  className="w-32 bg-pexels mt-8 pt-2 pb-2 pl-4 pr-4 rounded-md text-white font-normal"
                  onClick={handleSubmit}
                >
                  Save profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit_profile;
