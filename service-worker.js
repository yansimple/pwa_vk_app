self.addEventListener('install', (e) => {
  console.log('Service Worker установлен');
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker активирован');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
