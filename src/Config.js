// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAtuCPDRjiRsdwXUQQtxFm_Bk9sErz_Xoc",
    authDomain: "react-13d3e.firebaseapp.com",
    projectId: "react-13d3e",
    storageBucket: "react-13d3e.appspot.com",
    messagingSenderId: "38404779284",
    appId: "1:38404779284:web:befd293e70370f13c4e601",
    measurementId: "G-39ZGF2SWLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth