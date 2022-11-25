import Head from "next/head";
import React from "react";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import ImageCard from "../components/ImageCard";
import useFirestore from "../hooks/useFirestore";

const login = () => {
	const { docs } = useFirestore('photos')
	const photos = Object.values(docs)
	return (
		<div className="w-full h-screen overflow-hidden absolute z-0">
			<Head>
				<title>Free stock photos - Pexels</title>
			</Head>
			<div className="grid grid-cols-1 gap-y-10 p-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
				{photos.map((photo) => {
					return (
						<div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
							<ImageCard imageSrc={photo.url} key={photo.id} id={photo.id} show={false} />
						</div>
					)
				})}
			</div>
			<div className="w-full h-screen absolute top-0 z-10 bg-black opacity-60"></div>
			<div className="w-full h-screen absolute top-0 z-10">
				<LoginHeader />
				<LoginForm />
			</div>
		</div>
	);
};

export default login;
