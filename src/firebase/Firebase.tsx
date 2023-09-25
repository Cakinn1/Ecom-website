// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzgPX73I9ckYYzIXWUGnvOmqs83pEZ14w",
  authDomain: "ecom-website-f43fa.firebaseapp.com",
  projectId: "ecom-website-f43fa",
  storageBucket: "ecom-website-f43fa.appspot.com",
  messagingSenderId: "457749161555",
  appId: "1:457749161555:web:4456a01f5745043192c8a6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
