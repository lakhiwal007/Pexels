import Head from "next/head";
import React from "react";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import LoginBG from "../components/LoginBackground";

const login = () => {
  return (
    <div className="w-full h-screen overflow-hidden absolute z-0">
      <Head>
        <title>Free stock photos - Pexels</title>
      </Head>
      <LoginBG />
      <div className="w-full h-screen absolute top-0 z-10 bg-black opacity-60"></div>
      <div className="w-full h-screen absolute top-0 z-10">
        <LoginHeader />
        <LoginForm />
      </div>
    </div>
  );
};

export default login;
