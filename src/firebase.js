// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUWeWxbdgCM8Z2nhaJrZGMwVYLAqOwXWs",
  authDomain: "push-message-d3f49.firebaseapp.com",
  projectId: "push-message-d3f49",
  storageBucket: "push-message-d3f49.appspot.com",
  messagingSenderId: "1091871329633",
  appId: "1:1091871329633:web:b5f696485032181abfc920",
  measurementId: "G-57S50NQV29",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
