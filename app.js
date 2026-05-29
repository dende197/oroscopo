if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((error) => {
      console.warn(
        "Service worker registration failed. Check browser support and ensure the app is served over HTTPS or localhost.",
        error
      );
    });
  });
}
