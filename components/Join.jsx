import React from "react";
import { useState } from "react";
import { app, database } from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { addDoc, collection } from "firebase/firestore";
import ImageCard from "../components/ImageCard"
import useFirestore from "../hooks/useFirestore"
import { motion } from 'framer-motion';

const Join = () => {
	const { docs } = useFirestore('photos')
	const photos = Object.values(docs)
	
	let auth = getAuth();
	let googleProvider = new GoogleAuthProvider()
	const [inputData, setInputData] = useState({});
	const collectionRef = collection(database, "users");

	const handleInput = (event) => {
		let newInput = { [event.target.name]: event.target.value };
		setInputData({ ...inputData, ...newInput })
	};

	const googleSubmit = () => {
		signInWithPopup(auth, googleProvider)
			.then((response) => {
				console.log(response.user)
			})
			.catch((err) => {
				alert(err.message)
			})
	};

	const handleSubmit = () => {
		addDoc(collectionRef, {
			first_name: inputData.FirstName,
			last_name: inputData.LastName,
			email: inputData.email,
			password: inputData.password,
		})
			.then(() => {
				alert("user added!")
			})
			.catch((err) => {
				alert(err.message);
			})
		createUserWithEmailAndPassword(auth, inputData.email, inputData.password)
			.then((response) => {
				console.log(response.user)
			})
			.catch((err) => {
				alert(err.message)
			})
	};

	return (
		<div className="w-full flex items-center z-0">
			{/* form */}
			<div className="w-full h-screen text-center relative overflow-y-scroll scrollbar-hide">
				<div className="p-24">
					<h2 className="text-5xl font-bold mb-4">Join the Pexel community</h2>
					<p className="text-xl mb-8 text-gray-800">
						Take your photography to the next level. Get it seen by millions.
					</p>
					<button type="button" className="w-full bg-blue-700 p-2 text-white font-semibold mb-8" onClick={() => googleSubmit()}>
						Join with Google
					</button>
					<p className="mb-4">or</p>
					<form action="" method="post" className="w-full">
						<div className="w-full flex justify-center">
							<input
								type="text"
								name="FirstName"
								placeholder="First name"
								className="w-full rounded-md p-2 mr-2 mb-8 outline-none bg-gray-100 text-gray-400 font-semibold focus:bg-white focus:border focus:border-pexels placeholder:font-semibold overflow-hidden"
								onChange={(event) => handleInput(event)}
							/>
							<input
								type="text"
								name="LastName"
								placeholder="Last name(optional)"
								className="w-full rounded-md p-2 mb-8 outline-none bg-gray-100 text-gray-400 font-semibold focus:bg-white focus:border focus:border-pexels placeholder:font-semibold overflow-hidden"
								onChange={(event) => handleInput(event)}
							/>
						</div>
						<div className="w-full flex flex-col justify-center">
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="w-full rounded-md p-2 mb-8 outline-none bg-gray-100 text-gray-400 font-semibold focus:bg-white focus:border focus:border-pexels placeholder:font-semibold overflow-hidden"
								onChange={(event) => handleInput(event)}
							/>
							<input
								type="password"
								name="password"
								placeholder="Password"
								className="w-full rounded-md p-2 mb-8 outline-none bg-gray-100 text-gray-400 font-semibold focus:bg-white focus:border focus:border-pexels placeholder:font-semibold overflow-hidden"
								onChange={(event) => handleInput(event)}
							/>
							<button
								type="submit"
								className="bg-pexels rounded-sm p-2 text-white"
								onClick={handleSubmit}
							>
								Create New Account
							</button>
						</div>
					</form>
					<p className="text-[12px] text-gray-400 mt-8">
						By joining, you agree to our Terms of Service and Privacy Policy
					</p>
				</div>
			</div>
			{/* side background */}
			<div className="w-full min-h-screen relative overflow-hidden p-8">
				<div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3">
							{photos.map((photo) => {
								return (
									<motion.div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8" layout>
										<ImageCard
											imageSrc={photo.url}
											key={photo.id}
											id={photo.id}
											show={false}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 1 }}
											/>
									</motion.div>
								)
							})}


						</div>
			</div>
		</div>
	);
};

export default Join;
