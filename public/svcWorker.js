var CACHE_NAME = 'dots-game-pwa'
var urlsToCache = ['/', '/lobby', '/game']

// Install service worker
self.addEventListener('install', (event) => {
  // Perform the install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Cache opened')
      return cache.addAll(urlsToCache)
    })
  )
})

// Cache and return the requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Return response as Cache is hit
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})

// Update service worker
self.addEventListener('activate', (event) => {
  var cacheWhitelist = ['task-manager-pwa']
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
