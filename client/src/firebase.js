// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcIrYAIYHonqkG-NxzjamOHz0mybyIFkE",
  authDomain: "mern-blog-2.firebaseapp.com",
  projectId: "mern-blog-2",
  storageBucket: "mern-blog-2.appspot.com",
  messagingSenderId: "86341159423",
  appId: "1:86341159423:web:1afae64c081a2bc7523fca"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);