// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaQmTCXdoQkz9pCTyFwrJkRhAbhARbt64",
  authDomain: "estate-ecommerce-app.firebaseapp.com",
  projectId: "estate-ecommerce-app",
  storageBucket: "estate-ecommerce-app.appspot.com",
  messagingSenderId: "986025382240",
  appId: "1:986025382240:web:5c7f06db6fab4ac86c8e05"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);