export default function serviceWorkerDev() {
  function urlBaseToUnit8Array(base64String) {
    const padding = "=".repeat(4 - ((base64String.length % 4) % 4));
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  function determineAppServerKey() {
    var vapidPublicKey =
      "BIqveAM0tHsLnBLw89S_Hm0L-bwgNr6sCkPg1H019mQWkpabI9j3st66-Okr9WbqIVWSpXtvzogzqvDLpJrna-s";
    return urlBaseToUnit8Array(vapidPublicKey);
  }
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(swUrl)
    .then((response) => {
      // console.warn("response", response);
      return response.pushManager
        .getSubscription()
        .then(function (subscription) {
          if (subscription) {
            // console.log("Subscription exists:", subscription);
            return subscription;
          }
          return response.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: determineAppServerKey(),
          });
        });
    })
    .catch((error) => {
      console.error("Service Worker registration failed:", error);
    });
}
