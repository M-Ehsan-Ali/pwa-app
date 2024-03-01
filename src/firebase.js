import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// Replace this firebaseConfig object with the congurations for the project you created on your firebase console.
var firebaseConfig = {
  apiKey: "AIzaSyDvcWHmQMDHH6d5snJMdNrer6YnioDI7zA",
  authDomain: "fair-column-343422.firebaseapp.com",
  projectId: "fair-column-343422",
  storageBucket: "fair-column-343422.appspot.com",
  messagingSenderId: "409796469282",
  appId: "1:409796469282:web:60c3af69a28d2f6ebe607b",
};

initializeApp(firebaseConfig);
const messaging = getMessaging();
export const requestForToken = (setToken) => {
  const theVapidKey =
    "BIqveAM0tHsLnBLw89S_Hm0L-bwgNr6sCkPg1H019mQWkpabI9j3st66-Okr9WbqIVWSpXtvzogzqvDLpJrna-s";
  return getToken(messaging, { vapidKey: theVapidKey })
    .then((currentToken) => {
      if (currentToken) {
        setToken(currentToken);
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
export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
