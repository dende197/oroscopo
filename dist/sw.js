const CACHE_NAME = 'astralis-v2';
const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'manifest.json',
  'assets/zodiac/ariete.png',
  'assets/zodiac/toro.png',
  'assets/zodiac/gemelli.png',
  'assets/zodiac/cancro.png',
  'assets/zodiac/leone.png',
  'assets/zodiac/vergine.png',
  'assets/zodiac/bilancia.png',
  'assets/zodiac/scorpione.png',
  'assets/zodiac/sagittario.png',
  'assets/zodiac/capricorno.png',
  'assets/zodiac/acquario.png',
  'assets/zodiac/pesci.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cache and update in background
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
            }
          })
          .catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {});
    })
  );
});
