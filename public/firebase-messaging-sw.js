importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAUWeWxbdgCM8Z2nhaJrZGMwVYLAqOwXWs",
  authDomain: "push-message-d3f49.firebaseapp.com",
  projectId: "push-message-d3f49",
  storageBucket: "push-message-d3f49.appspot.com",
  messagingSenderId: "1091871329633",
  appId: "1:1091871329633:web:b5f696485032181abfc920",
  measurementId: "G-57S50NQV29",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
