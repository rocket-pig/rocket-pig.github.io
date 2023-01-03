//apparently immediately pre caching entire app isnt going to work. No debug tool was telling me anything - finally I found this output at chrome://serviceworker-internals
//"Error:{"columnNumber":-1,"lineNumber":-1,"message":"ServiceWorker startup timed out. The worker was in startup phase: Script streaming.","sourceURL":""}"

const someFiles = ['/','/index.html']
CACHE_NAME = "V1"


//install 
self.addEventListener("install", event => {
    console.log('inside install event.')
      self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then(cache =>     cache.addAll(someFiles))
  );

  console.log("Service Worker installing.");
});


//activate
self.addEventListener("activate", event => {
  console.log("Service Worker activating.");
});

//fetch plan
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(cacheName);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});



/*
self.addEventListener("fetch", event => {
  // Cache-First Strategy
  event.respondWith(
    caches
      .match(event.request) // check if the request has already been cached
      .then(cached => cached || fetch(event.request)) // otherwise request network
      .then(
        response =>
          cache(event.request, response) // put response in cache
            .then(() => response) // resolve promise with the network response
      )
  );
});
*/
