import React from "react";
import Link from "next/link";
import Logo from "./Logo";
const LoginHeader = () => {
	return (
		<div className="flex items-center justify-between">
			<div>
				<Logo width={"50px"} height={"50px"} />
			</div>
			<div className="p-4 flex items-center text-white font-light">
				<Link href="/join-contributer" className="flex items-center">
					<a className="flex items-center">
						<p>New to pexels?</p>
						<button className="bg-white text-black p-3 pl-6 pr-6 rounded-md ml-4 font-bold">
							Join
						</button>
					</a>
				</Link>
			</div>
		</div>
	);
};

export default LoginHeader;
