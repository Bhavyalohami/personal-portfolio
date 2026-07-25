(function registerPortfolioServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (window.location.protocol !== "https:" && window.location.hostname !== "localhost") return;

  var registrationScript = document.currentScript && document.currentScript.src;
  if (!registrationScript) return;

  var workerUrl = new URL("service-worker.js", registrationScript);
  var workerScope = new URL("./", registrationScript).pathname;

  window.addEventListener("load", function registerAfterLoad() {
    navigator.serviceWorker.register(workerUrl.href, { scope: workerScope }).then(function scheduleUpdates(registration) {
      var lastUpdateCheck = 0;
      var checkForUpdate = function checkForUpdate() {
        var now = Date.now();
        if (document.visibilityState === "visible" && now - lastUpdateCheck > 60 * 60 * 1000) {
          lastUpdateCheck = now;
          registration.update().catch(function ignoreUpdateFailure() {});
        }
      };
      document.addEventListener("visibilitychange", checkForUpdate);
    }).catch(function ignoreRegistrationFailure() {});
  }, { once: true });
})();
