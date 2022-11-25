import { initializeApp } from "firebase/app";
import {getFirestore, serverTimestamp } from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCalQoJJO1HZXssDo7b6U1RzlBpqjbwSA0",
  authDomain: "pexels-86b63.firebaseapp.com",
  projectId: "pexels-86b63",
  storageBucket: "pexels-86b63.appspot.com",
  messagingSenderId: "826104882451",
  appId: "1:826104882451:web:9bda5e6344fd3629baa6e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)
const storage = getStorage(app)
const timestamp = serverTimestamp()
export {app, database, storage, timestamp}