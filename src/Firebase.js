// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeDoJzgANytpu7ffPePmME8VVYOJeJw48",
  authDomain: "mette-hjemmeside.firebaseapp.com",
  projectId: "mette-hjemmeside",
  storageBucket: "mette-hjemmeside.appspot.com",
  messagingSenderId: "463625723177",
  appId: "1:463625723177:web:9e7ed93960d0a9580d2b38",
  measurementId: "G-YPDTJGN5F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);