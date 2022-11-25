import React from 'react'
import { useEffect, useState } from 'react'
import { database, storage, timestamp } from '../firebaseConfig';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const UploadFooter = ({ file, setProgress, setErr, url, setUrl }) => {
	const handleSubmit = () => {
		const storageRef = ref(storage, `photos/${file.name}`)
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on('state_changed',
			(snapshot) => {

				const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log(percentage);
				setProgress(percentage);

			},
			(err) => {
				setErr(err)
			},
			() => {
				// Upload completed successfully, now we can get the download URL
				getDownloadURL(uploadTask.snapshot.ref)
					.then((downloadURL) => {
						console.log(downloadURL)
						setUrl(downloadURL);
					});
			});
	}
	return (
		<div className='w-full absolute sticky bottom-0 p-4 flex items-center justify-center border-t-[1px] border-gray-300 z-10 bg-white'>
			<button type='button' className='bg-pexels pt-2 pb-2 pl-4 pr-4 rounded-md text-white font-light' onClick={handleSubmit} >Publish</button>
		</div>
	)
}

export default UploadFooter