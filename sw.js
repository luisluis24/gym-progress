self.addEventListener('install', e => {
  console.log('Service Worker instalado');
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  console.log('Service Worker activado');
});

self.addEventListener('fetch', e => {
  console.log('Fetch interceptado:', e.request.url);
});
