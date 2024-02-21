import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import serviceWorkerDev from "./service-worker-dev";
const root = ReactDOM.createRoot(document.getElementById("root"));
// Function to show the "Install App" button
function showInstallButton() {
  window.addEventListener("beforeinstallprompt", (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    event.preventDefault();
    // Stash the event so it can be triggered later
    let deferredPrompt = event;

    // Show the install button
    const installButton = document.createElement("button");
    installButton.id = "install-button";
    installButton.innerText = "Install App";
    installButton.addEventListener("click", () => {
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        deferredPrompt = null;
      });
    });
    document.body.appendChild(installButton);
  });
}

// Call the function to show the "Install App" button
showInstallButton();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerDev();
