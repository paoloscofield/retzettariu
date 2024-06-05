import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_APIKEY}`,
  authDomain: `${import.meta.env.VITE_AUTHDOMAIN}`,
  projectId: `${import.meta.env.VITE_PROJECTID}`,
  storageBucket: `${import.meta.env.VITE_STORAGEBUCKER}`,
  messagingSenderId: `${import.meta.env.VITE_MESSAGINGSENDERID}`,
  appId: `${import.meta.env.VITE_APPID}`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
