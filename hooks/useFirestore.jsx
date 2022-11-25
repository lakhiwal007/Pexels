import { useState, useEffect } from 'react';
import { database } from '../firebaseConfig';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = collection(database, collectionName)
	  const Query = query(unsub,orderBy("createdAt","desc"))
      onSnapshot(Query,(data) => {
        let documents = [];
        data.docs.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });

    return () => unsub;
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collectionName]);

  return { docs };
}

export default useFirestore;