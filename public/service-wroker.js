let cacheData = "appV1";
this.addEventListener("install", (event) =>
  event.waitUntil(
    caches
      .open(cacheData)
      .then((cache) =>
        cache.addAll([
          "/static/js/main.chunk.js",
          "/static/js/0.chunk.js",
          "/static/js/bundle.js",
          "/index.html",
          "/",
          "/users",
        ])
      )
  )
);

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl); // Return the fetch request
      })
    );
  }
});
// Check if the browser supports PWA installation
if ("standalone" in window.navigator && window.navigator.standalone) {
  // Browser is already in standalone mode (installed as PWA)
  console.log("The app is installed.");
} else if (window.matchMedia("(display-mode: standalone)").matches) {
  // Browser supports PWA installation and is currently in standalone mode
  console.log("The app is installed.");
} else {
  // Show install button
  const installButton = document.createElement("button");
  installButton.innerText = "Install App";
  installButton.addEventListener("click", () => {
    // Prompt user to install the app
    // You can customize this based on your requirements
    // For example, show a modal or redirect to a page with installation instructions
    console.log("Install button clicked.");
  });
  document.body.appendChild(installButton);
}
