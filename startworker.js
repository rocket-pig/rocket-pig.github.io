window.onload = function() {
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./worker.js")
    .then(serviceWorker => { serviceWorker.update().then(e=>console.log(e))
    })
    .catch(error => {
      console.error("Error registering and updating the Service Worker: ", error);
    });
}

} //onload
