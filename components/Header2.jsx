import React from "react";
import Logo from "./Logo";
import Link from "next/link";
const Header2 = () => {
	return (
		<div className="flex items-center bg-white border-b border-gray-300 top-0 sticky z-10">
			<div className="w-full flex items-center justify-center">
				<Logo width={"45px"} height={"45px"} />
				<h2 className="p-2 text-2xl">Pexels</h2>
			</div>
			<div className="flex items-center p-4 absolute right-2">
				<Link href="/login">
					<a>
						<span className="text-sm text-gray-400">Have an account?</span>
						<button className="bg-gray-300 pt-2 pb-2 pl-4 pr-4 ml-4 rounded-sm">
							Sign in
						</button>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default Header2;
