// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbNaQf9n6K2munpdtjGaifI22BqS6brtk",
  authDomain: "instagram-ui-a8d30.firebaseapp.com",
  projectId: "instagram-ui-a8d30",
  storageBucket: "instagram-ui-a8d30.appspot.com",
  messagingSenderId: "849692790204",
  appId: "1:849692790204:web:77934b4c71fd4ca4db6fb9",
  measurementId: "G-931RRHES0P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);