import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Header2 from '../components/Header2'
import UploadFooter from '../components/UploadFooter'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { database, timestamp } from '../firebaseConfig';
import { addDoc, collection } from "firebase/firestore";

const upload = () => {
	const router = useRouter();
	const [file, setFile] = useState(null);
	const [err, setErr] = useState(null);
	const [progress, setProgress] = useState(0);
	const [url, setUrl] = useState(null);
	const [photoData, setPhotoData] = useState({});
	const types = ['image/png', 'image/jpeg', 'image/jfif'];

	const collectionRef = collection(database, 'photos')

	const handleInput = (e) => {
		const selectedImage = e.target.files[0];
		if (selectedImage && types.includes(selectedImage.type)) {
			setFile(selectedImage);
			setErr('')
		}
		else {
			setFile(null);
			setErr('Please select a image!')
		}
	};

	const handleChange = (event) => {
		const newInput = { [event.target.name]: event.target.value };
		setPhotoData({ ...photoData, ...newInput })
	}
	const handleSubmit = () => {
		const createdAt = timestamp;
		addDoc(collectionRef, {
			title: photoData.Title,
			tags: photoData.Tags,
			location: photoData.Location,
			url: url,
			createdAt: createdAt,
		})
			.then(() => {
				alert("photo added!")
				router.push("/")
			})
			.catch((err) => {
				alert(err.message);
			})
	}
	return (
		<div>
			<Head>
				<title>Upload Photos & Videos - Pexel</title>
			</Head>
			<Header2 />
			<div className='w-full h-screen flex flex-col items-center justify-start overflow-y-scroll pt-14 scrollbar-hide relative'>
				<div className='w-full flex flex-col items-center justify-start pr-36 pl-36 relative'>
					<p className='text-3xl font-bold'>Upload Photos & Videos</p>
					<ul className='text-md font-light text-gray-800 list-disc p-8 pr-24 pl-24'>
						<li>Your uploads will be distributed for free under the Pexels license. Learn more</li>
						<li>To increase the chance of being featured, please ensure that your submissions meet our guidelines.</li>
						<li>We will review your submission. If it gets selected, you will receive an email notification and your content will be featured in our search.</li>
					</ul>
				</div>
				<div className='w-full flex flex-col items-center justify-center mt-8 pl-20 pr-20'>
					<form action="" method="post" className='w-full h-24 bg-gray-100 border-2 border-gray-400 border-dashed flex flex-col items-center justify-center cursor-pointer'>
						<input type="file" name="image" id="image" className='cursor-pointer file:cursor-pointer file:bg-pexels file:outline-none file:p-2 file:pl-4 file:pr-4 file:rounded-md file:text-white file:font-light file:border-none' onChange={handleInput} />
					</form>
					<button type="button" className='bg-pexels p-2 pl-4 pr-4 rounded-sm mt-4 font-light text-white' onClick={() => router.push('/')}>Upload later</button>
				</div>
				<div className="w-full flex items-center justify-center p-16 mb-8 relative">
					{url ? (
						<div className="w-full h-[60vh] flex mt-16 mb-8 p-4 border border-gray-100 rounded-md aspect-w-1 aspect-h-1 overflow-y-scroll xl:aspect-w-7 xl:aspect-h-8 scrollbar-hide">
							<div className="w-full h-full flex  aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
								<img src={url} className="w-full h-full object-center object-cover lg:w-full lg:h-full" alt="image" />
							</div>
							<div className="w-full h-full flex justify-center items-center p-4" >
								<form className="w-full h-full flex flex-col justify-center items-center m-4 p-4">
									<input type="text" name="Title" placeholder="Title" className="w-full p-4 m-2 rounded-md outline-none border border-gray-100 focus:bg-gray-300 " onChange={(event) => handleChange(event)} />
									<input type="text" name="Tags" placeholder="Tags" className="w-full p-4 m-2 rounded-md outline-none border border-gray-100 focus:bg-gray-300 " onChange={(event) => handleChange(event)} />
									<input type="text" name="Location" placeholder="Location" className="w-full p-4 m-2 rounded-md outline-none border border-gray-100 focus:bg-gray-300 " onChange={(event) => handleChange(event)} />
									<button type="button" name="Save" className="w-1/2 p-4 m-2 rounded-md outline-none border border-gray-100 bg-pexels text-white pointer-cursor font-light " onClick={handleSubmit}> Save</button>
								</form>
							</div>
						</div>
					) : (progress > 0 && (
						<motion.div className="h-[30px] text-white font-semibold mt-8 rounded-xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center"
							initial={{ width: 0 }}
							animate={{ width: progress + '%' }}
						>
							<p>{Math.trunc(progress)}%</p>
						</motion.div>
					))}
				</div>
			</div>
			<UploadFooter file={file} setProgress={setProgress} setError={setErr} url={url} setUrl={setUrl} />
		</div>
	)
}

export default upload