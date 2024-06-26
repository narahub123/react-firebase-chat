// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-5474c.firebaseapp.com",
  projectId: "reactchat-5474c",
  storageBucket: "reactchat-5474c.appspot.com",
  messagingSenderId: "251567193632",
  appId: "1:251567193632:web:31c9a76f4cdabc13244645",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
