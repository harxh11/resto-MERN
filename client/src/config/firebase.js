// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLYWDu_mNTqd5JeQ62gfsPaJW7RvY6W7M",
  authDomain: "resto-b32fa.firebaseapp.com",
  projectId: "resto-b32fa",
  storageBucket: "resto-b32fa.appspot.com",
  messagingSenderId: "609930380275",
  appId: "1:609930380275:web:98d6fd93b5f45436804886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
