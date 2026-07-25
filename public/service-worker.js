"use strict";

var CACHE_PREFIX = "bl-lunar-";
var CACHE_VERSION = "v2";
var CORE_CACHE = CACHE_PREFIX + "core-" + CACHE_VERSION;
var PAGE_CACHE = CACHE_PREFIX + "pages-" + CACHE_VERSION;
var ASSET_CACHE = CACHE_PREFIX + "assets-" + CACHE_VERSION;
var SCOPE_URL = new URL(self.registration.scope);
var ROOT_URL = new URL("./", SCOPE_URL).toString();
var OFFLINE_URL = new URL("offline.html", SCOPE_URL).toString();
var CORE_URLS = [
  ROOT_URL,
  OFFLINE_URL,
  new URL("manifest.json", SCOPE_URL).toString(),
  new URL("assets/lunar/lunar-app-icon.webp", SCOPE_URL).toString(),
  new URL("assets/lunar/og-image.png", SCOPE_URL).toString(),
  new URL("assets/lunar/starfield.webp", SCOPE_URL).toString()
];

function canCache(response) {
  if (!response || !response.ok || response.type === "opaque") return false;
  var cacheControl = response.headers.get("Cache-Control") || "";
  return !/no-store/i.test(cacheControl);
}

function fetchWithTimeout(request, timeoutMs) {
  var controller = new AbortController();
  var timeout = setTimeout(function abortSlowRequest() { controller.abort(); }, timeoutMs);
  return fetch(request, { signal: controller.signal }).finally(function clearRequestTimeout() {
    clearTimeout(timeout);
  });
}

self.addEventListener("install", function onInstall(event) {
  event.waitUntil((async function precacheCore() {
    var cache = await caches.open(CORE_CACHE);
    await Promise.allSettled(CORE_URLS.map(async function cacheCoreUrl(url) {
      var response = await fetch(url, { cache: "reload" });
      if (canCache(response)) await cache.put(url, response);
    }));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", function onActivate(event) {
  event.waitUntil((async function removeOldCaches() {
    var currentCaches = new Set([CORE_CACHE, PAGE_CACHE, ASSET_CACHE]);
    var cacheNames = await caches.keys();
    await Promise.all(cacheNames.map(function deleteOldCache(cacheName) {
      if (cacheName.startsWith(CACHE_PREFIX) && !currentCaches.has(cacheName)) {
        return caches.delete(cacheName);
      }
      return Promise.resolve(false);
    }));
    await self.clients.claim();
  })());
});

self.addEventListener("message", function onMessage(event) {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", function onFetch(event) {
  var request = event.request;
  if (request.method !== "GET") return;

  var requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin) return;
  if (requestUrl.pathname.startsWith(new URL("api/", SCOPE_URL).pathname)) return;
  if (request.headers.has("range") || request.headers.has("authorization")) return;

  if (request.mode === "navigate") {
    event.respondWith((async function networkFirstNavigation() {
      try {
        var networkResponse = await fetchWithTimeout(request, 6000);
        if (canCache(networkResponse)) {
          var pageCache = await caches.open(PAGE_CACHE);
          event.waitUntil(pageCache.put(request, networkResponse.clone()));
        }
        return networkResponse;
      } catch (error) {
        return (
          await caches.match(request, { ignoreSearch: true }) ||
          await caches.match(ROOT_URL) ||
          await caches.match(OFFLINE_URL) ||
          new Response("Offline", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } })
        );
      }
    })());
    return;
  }

  if (["image", "font", "script", "style", "worker"].includes(request.destination)) {
    event.respondWith((async function staleWhileRevalidateAsset() {
      var cachedResponse = await caches.match(request);
      var networkRequest = fetch(request).then(async function cacheFreshAsset(networkResponse) {
        if (canCache(networkResponse)) {
          var assetCache = await caches.open(ASSET_CACHE);
          await assetCache.put(request, networkResponse.clone());
        }
        return networkResponse;
      });

      if (cachedResponse) {
        event.waitUntil(networkRequest.catch(function ignoreAssetRefreshFailure() {}));
        return cachedResponse;
      }

      return networkRequest;
    })());
  }
});
