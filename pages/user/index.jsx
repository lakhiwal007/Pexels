import Head from "next/head";
import React from "react";
import ProfileHeader from "../../components/ProfileHeader";
import UserProfile from "../../components/UserProfile";
import Gallery from "../../components/Gallery";

import { useRouter } from "next/router";

const user = () => {
  
  
  return (
    <div>
      <Head>
        <title>User</title>
      </Head>
      <ProfileHeader />
      <UserProfile />
      <Gallery />
    </div>
  );
};

export default user;
