<<<<<<< HEAD
//const CACHE_NAME = 'fence-calculator-v1'
const urlsToCache = [
	'./',
	'./index.html',
	'./manifest.json',
	'./images/icon-192.png',
	'./images/icon-512.png',
]

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			return cache.addAll(urlsToCache)
		})
	)
})

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request)
		})
	)
}) //
=======
//const CACHE_NAME = 'fence-calculator-v1'
const urlsToCache = [
	'./',
	'./index.html',
	'./manifest.json',
	'./images/icon-192.png',
	'./images/icon-512.png',
]

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			return cache.addAll(urlsToCache)
		})
	)
})

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request)
		})
	)
}) //
>>>>>>> 2dfb4bed4ca786c32bad6d619f96e99e49f3a70e
