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
      "BIDlfvWdHHF6M1KsfkqInkqsyR8rH8t9c-S4fFq-C8cUWrTcRoBZDz0jmEjZT3KHLJOo_N_L7-pYOspM1vZqJAI";
    return urlBaseToUnit8Array(vapidPublicKey);
  }
  let swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
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
