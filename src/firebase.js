// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";
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
const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BF3bywNf2U4XrCHZ57ayLDFkoQbEUOhtIzQ0mfy_E8Qd7ZYJztRTVoz4tojJc9787mcrr2d50mA8X18s1ooUU", // Your server key
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

const analytics = getAnalytics(app);
