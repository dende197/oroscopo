const CACHE_NAME = 'astralis-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
  '/assets/zodiac/ariete.png',
  '/assets/zodiac/toro.png',
  '/assets/zodiac/gemelli.png',
  '/assets/zodiac/cancro.png',
  '/assets/zodiac/leone.png',
  '/assets/zodiac/vergine.png',
  '/assets/zodiac/bilancia.png',
  '/assets/zodiac/scorpione.png',
  '/assets/zodiac/sagittario.png',
  '/assets/zodiac/capricorno.png',
  '/assets/zodiac/acquario.png',
  '/assets/zodiac/pesci.png'
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
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
