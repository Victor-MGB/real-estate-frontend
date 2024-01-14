// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKMYjA9_0PWW4GeXVw7qvvkArKmzBSChc",
  authDomain: "real-estate-52463.firebaseapp.com",
  projectId: "real-estate-52463",
  storageBucket: "real-estate-52463.appspot.com",
  messagingSenderId: "1097633368745",
  appId: "1:1097633368745:web:992cbf6eb526987e98b7b8",
  measurementId: "G-JC1JX9480C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
