// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { initializeApp } from "firebase/app";
//import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6UGgM0-AL-ijJEZq_C_Ut1Qnzhv988gs",
    authDomain: "clone-5833c.firebaseapp.com",
    projectId: "clone-5833c",
    storageBucket: "clone-5833c.appspot.com",
    messagingSenderId: "841515590559",
    appId: "1:841515590559:web:4d9c140ddc3d483db013aa",
    measurementId: "G-T2E8B24N0W"
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();
export { auth, db };