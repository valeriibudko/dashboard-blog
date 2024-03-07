// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bb92d.firebaseapp.com",
  projectId: "mern-blog-bb92d",
  storageBucket: "mern-blog-bb92d.appspot.com",
  messagingSenderId: "675354026404",
  appId: "1:675354026404:web:2448fc2e642dc2f16a6131"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);