import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const Logo = ({ width, height }) => {
  const router = useRouter();
  return (
    <Link href="/">
      <a>
        <svg
          width={width}
          height={height}
          viewBox="0 0 32 32"
          className="rounded-lg m-2 ml-8"
        >
          <path
            d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
            fill="#05A081"
          ></path>
          <path
            d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
            fill="#fff"
          ></path>
        </svg>
      </a>
    </Link>
  );
};

export default Logo;
