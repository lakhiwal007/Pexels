import React from 'react'
import { useEffect } from 'react'
import { database, storage, timestamp } from '../firebaseConfig';
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);
	useEffect(() => {
		const storageRef = ref(storage, `photos/${file.name}`)
		const collectionRef = collection(database, 'photos')
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on('state_changed',
			(snapshot) => {

				const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(percentage);

			},
			(err) => {
				setError(err)
			},
			() => {
				// Upload completed successfully, now we can get the download URL
				getDownloadURL(uploadTask.snapshot.ref)
					.then((downloadURL) => {
						setUrl(downloadURL);
						const createdAt = timestamp();
						addDoc(collectionRef, {
							url: url,
							createdAt: createdAt,
						})
							.then(() => {
								alert("user added!")
							})
							.catch((err) => {
								alert(err.message);
							})
					});
			});
	}, [file]);
	 return { progress, url, error };
};

export default useStorage;