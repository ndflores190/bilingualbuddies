// Bilingual Buddies service worker - enables "Add to Home Screen" on Android/Chrome.
// No caching yet: every request goes to the network as usual.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
