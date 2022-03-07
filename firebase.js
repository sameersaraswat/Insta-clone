// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXJqwULp5I4iO3FhgniMuW7APkDExyrLU",
  authDomain: "insta-2-e2672.firebaseapp.com",
  projectId: "insta-2-e2672",
  storageBucket: "insta-2-e2672.appspot.com",
  messagingSenderId: "595060222934",
  appId: "1:595060222934:web:ec73e9c02792e8e96d5277"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage }; 