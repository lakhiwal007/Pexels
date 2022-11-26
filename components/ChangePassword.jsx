import React, { useEffect } from "react";

import { useRouter } from "next/router";
import { app } from "../firebaseConfig.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
const Change_password = () => {
  const router = useRouter();

  const [user, loading] = useAuthState(getAuth(app));

  useEffect(() => {
    if (user) {
      console.log("signed in!");
    } else if (user == null) {
      router.push("/login");
    }
  }, [user, router]);
  return (
    <div className="w-full h-full flex items-center justify-center mt-8">
      <div className="w-1/2 min-h-full flex items-start justify-center border border-gray-400">
        <form
          action=""
          method="post"
          className="w-full flex items-center justify-center p-4 pr-8 pl-8"
        >
          <p className="text-4xl mt-16 font-semibold mb-8">Change Password</p>
          <div className="w-full flex flex-col justify-start">
            <div className="flex flex-col mr-2 mt-8">
              <label htmlFor="Current password" className="mb-2">
                Current password
              </label>
              <input
                type="password"
                name="Current password"
                className="p-2 rounded-md focus:shadow-lg outline-none border border-gray-300"
              />
            </div>
            <div className="flex flex-col mt-8">
              <label htmlFor="New Password" className="mb-2">
                New Password
              </label>
              <input
                type="password"
                name="New Password"
                className="p-2 rounded-md focus:shadow-lg outline-none border border-gray-300"
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <button
                type="button"
                className="w-32 bg-blue-700 mt-8 pt-2 pb-2 pl-4 pr-4 rounded-md text-white font-normal"
                onClick={() => router.push("/edit-profile")}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-48 bg-pexels mt-8 pt-2 pb-2 pl-4 pr-4 rounded-md text-white font-normal"
              >
                Change Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Change_password;
