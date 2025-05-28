// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDiNDixrHwvDtKRedlRCD-LiymOe6Aemo",
  authDomain: "cofee-store-913f0.firebaseapp.com",
  projectId: "cofee-store-913f0",
  storageBucket: "cofee-store-913f0.firebasestorage.app",
  messagingSenderId: "57111263449",
  appId: "1:57111263449:web:7b25b58db7f3a118d066c8"
};

// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);