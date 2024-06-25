// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcIFx1gbnaVEhEKP0PobOaX6dLKUaHoag",
  authDomain: "netflixgpt-fd0c1.firebaseapp.com",
  projectId: "netflixgpt-fd0c1",
  storageBucket: "netflixgpt-fd0c1.appspot.com",
  messagingSenderId: "246511152389",
  appId: "1:246511152389:web:2d624a089b16c499f6db6c",
  measurementId: "G-4ELR6NBQPJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
