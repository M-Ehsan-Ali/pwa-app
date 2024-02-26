importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (registeration) {
      console.log("Registration successful, scope is:", registeration.scope);
    })
    .catch(function (err) {
      console.log("Service Worker registration failed, error:", err);
    });
}
firebase.initializeApp({
  messagingSenderId: "918710150267",
});
const initMessaging = firebase.messaging();
