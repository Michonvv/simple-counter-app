// service-worker.js

// Define the cache name and list of assets to cache
const CACHE_NAME = 'my-pwa-cache';

// List of assets to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/assets/css/style.css',
  '/assets/img/logo.png',// Add the offline page to the cache
  // Add other assets you want to cache here
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate the service worker and clean up old caches
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
    })
  );
});

// Fetch and serve cached assets or the offline page when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || caches.match('/offline.html'); // Serve the offline page if no match is found
      })
  );
});