// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVD2Da8iEVxiV75DHGgIaydBNvtzVE6J4",
  authDomain: "netflixgpt-36fb1.firebaseapp.com",
  projectId: "netflixgpt-36fb1",
  storageBucket: "netflixgpt-36fb1.firebasestorage.app",
  messagingSenderId: "893185399457",
  appId: "1:893185399457:web:d690d6cf4e4c23d7d3aee0",
  measurementId: "G-SJN7BELGT8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();