
/*
TODO: i may want to set up the other messaging channel

TODO: either new onevent, or a onmessage that adds (and another that removes)  a peer to the ping list
a ping function that polls every N seconds. the 
response can just be discarded (?)
in main, onPeerJoin and onPeerLeave will trigger the
message pass to worker

..multiple problems arise - we dont have access to trystero without moving the import of it here. We have to ...entirely rewrite our interface with it to be running in serviceWorker's context, who forwards msgs back and forth to/from main via...the dodgy-as-fuck postMessage system? ..
*/

const CACHE_NAME = "V1"

var _clog = console.log;

//logging. visible in eruda.
function log(msg) {
    (async () => {
        _clog(msg); //chrome://serviceworker-internals 
        self.clients.matchAll({includeUncontrolled: true}).then((clientList) => {
            clientList.forEach((e) => {
                e.postMessage(msg) })
            })
     })()
    };    

console.error = function(e){ log(e) };
console.log = function(e){ log(e) };
console.warning = function(e){ log(e) };

//https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage
//https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event
//ive come to expect examples to be wrong. finally figured out a way that works:
self.onmessage = function handleMsgfromMain(messageEvent) {
    if (messageEvent.data === 'ping'){ 
        console.log('[Client] '+messageEvent.data);
        messageEvent.source.postMessage('[Service Worker] pong'); 
        };
};
        
       
self.addEventListener('sync', event => {
        if(event.tag == "tag") {       
            //event.source.postMessage('[Service Worker] prime loop init');
            log('[Service Worker] prime loop init');
        event.waitUntil(primeTime());
        }
});
 

//install 
//InstallEvent is apparently 'deprecated'
//https://developer.mozilla.org/en-US/docs/Web/API/InstallEvent
self.addEventListener("install", event => {
    log('[Service Worker] "Installing"...')
      self.skipWaiting();
    caches.open(CACHE_NAME).then(cache=>log('[Service Worker] Cache '+CACHE_NAME+' opened.'))
});


//activate
self.addEventListener("activate", event => {
  log("[Service Worker] Activating...");
});

//fetch plan. This caches _everything and may be the source of the intermittent, extreme minute-long start times? Still dont know.
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      log(`[Service Worker] Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      const response = await fetch(e.request);
      const cache = await caches.open(CACHE_NAME);
      log(`[Service Worker] Caching new resource: ${e.request.url}`);
      cache.put(e.request, response.clone());
      return response;
    })()
  );
});




function primeTime() {
  let primes = [];
let num = 2;
let amts = [10,100,1000,2000,5000,10000,20000,50000,75000,90000,120000]
  
  return new Promise((resolve, reject) => {
    let s=Date.now()
    for(let a of amts) {
      while (primes.length < a) {
        let isPrime = true;
        for (let i = 0; i < primes.length; i++) {
          if (num % primes[i] === 0) {
            isPrime = false;
            break;
          }
        }
        if (isPrime) {
          primes.push(num);
        }
        num++;
      }
      let e = Date.now()
      log((e-s)/1000+" seconds to calculate "+a+" primes" );
      resolve(primes.length);
    }
  });
}