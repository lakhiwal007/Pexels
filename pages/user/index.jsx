import Head from "next/head";
import React from "react";
import ProfileHeader from "../../components/ProfileHeader";
import UserProfile from "../../components/UserProfile";
import UserGallery from "../../components/UserGallery";

const user = () => {
  return (
    <div>
      <Head>
        <title>User</title>
      </Head>
      <ProfileHeader />
      <UserProfile />
      <UserGallery />
    </div>
  );
};

export default user;
