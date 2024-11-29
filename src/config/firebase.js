// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB9-nZu7DJNOdZpCXBd5il4O1RS2rhta8",
  authDomain: "swift-aid-af969.firebaseapp.com",
  projectId: "swift-aid-af969",
  storageBucket: "swift-aid-af969.firebasestorage.app",
  messagingSenderId: "928131723097",
  appId: "1:928131723097:web:fd2f6f3fe7b1e57ef96648",
  measurementId: "G-H1J8N7Y5ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

// const analytics = getAnalytics(app);