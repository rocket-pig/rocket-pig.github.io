//chrome://serviceworker-internals: "Error:{"columnNumber":-1,"lineNumber":-1,"message":"ServiceWorker startup timed out. The worker was in startup phase: Script streaming.","sourceURL":""}"

const CACHE_NAME = "V1"

var log=[];
z = console.log
console.log = function(msg,z) {
  log.push(msg);
  z(msg);
}


//make a pipeline out of special context for log messages. Doesnt work as far as I can tell.  For a brief moment the 'window.sw' assignment worked and I could toy with it. Unclear why it stopped. 
self.addEventListener('message', messageEvent => {
  if (messageEvent.data === 'skipWaiting') return skipWaiting();
  if (messageEvent.data === 'getLog') return log;
  
});

//install 
//InstallEvent is apparently 'deprecated'
//https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent
self.addEventListener("install", event => {
    console.log('[Service Worker] Inside deprecated install event...unclear what it even does...')
      self.skipWaiting();
 caches.open(CACHE_NAME).then(cache=>console.log('[Service Worker] Cache '+CACHE_NAME+' opened.'))
});


//activate
self.addEventListener("activate", event => {
  console.log("[Service Worker] Activating...");
});

//fetch plan. This caches _everything and may be the source of the extreme minute-long start times? Still dont know.
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      console.log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(CACHE_NAME);
      console.log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});
