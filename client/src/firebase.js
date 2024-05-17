
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-41510.firebaseapp.com",
  projectId: "mern-blog-41510",
  storageBucket: "mern-blog-41510.appspot.com",
  messagingSenderId: "944048657994",
  appId: "1:944048657994:web:0725703c0c0fc64283b8b3"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
 export const app = initializeApp(firebaseConfig);