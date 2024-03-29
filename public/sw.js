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
          "/about",
          "/users",
        ])
      )
  )
);

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    if (
      event.request.url ===
      "https://pwa-app-eight.vercel.app/static/js/main.chunk.js"
    ) {
      event.waitUntil(
        this.registration.showNotification("Internet", {
          body: "Your internet is not working",
        })
      );
    }
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
