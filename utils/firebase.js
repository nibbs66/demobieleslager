// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKCGAyX5OzHryL7oDO0Gyxe7Y4HmkMTBw",
    authDomain: "demobieleslager.firebaseapp.com",
    projectId: "demobieleslager",
    storageBucket: "demobieleslager.appspot.com",
    messagingSenderId: "310020413042",
    appId: "1:310020413042:web:baef689c8def508b7a14eb",
    measurementId: "G-HZ6M9TPR6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

