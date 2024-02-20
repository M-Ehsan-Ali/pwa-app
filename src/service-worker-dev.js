export default function serviceWorkerDev() {
  let swUrl = `${process.env.PUBLIC_URL}/service-wroker.js`;
  navigator.serviceWorker
    .register(swUrl)
    .then((response) => console.warn("response", response));
}
