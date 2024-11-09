// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwP7ejb5rwIHCmpPAb2jMXzSZqJ6hcMpw",
  authDomain: "mern--book-management.firebaseapp.com",
  projectId: "mern--book-management",
  storageBucket: "mern--book-management.appspot.com",
  messagingSenderId: "914368705403",
  appId: "1:914368705403:web:a16ce098b66bee51b703de",
  measurementId: "G-566CX2QPVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;