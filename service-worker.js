"use strict";var precacheConfig=[["worcestercountycarpentry.com/index.html","16c19f549e13dddbe1f95e7c2d27ebb7"],["worcestercountycarpentry.com/static/css/main.1d39147c.css","98ff84181152f905bd0f00e8b8103c55"],["worcestercountycarpentry.com/static/js/main.5bc7c812.js","55398bc83978a3122419a17dae445a3f"],["worcestercountycarpentry.com/static/media/customdeckstairs1.53adc751.jpg","53adc751b92e7268942bf219b3779950"],["worcestercountycarpentry.com/static/media/decksporches1.70163471.jpg","701634717da6e8ae2120ebdf9238be00"],["worcestercountycarpentry.com/static/media/decksporches4.10379c58.jpg","10379c58b9686c85d7684b7ff6c828fc"],["worcestercountycarpentry.com/static/media/decksporches8.70e7200a.jpg","70e7200a69b102ddc12f33a0858c5561"],["worcestercountycarpentry.com/static/media/flooring1.7f9e21e8.jpg","7f9e21e8a44902bf2a03e574f030ee2e"],["worcestercountycarpentry.com/static/media/flooring3.48a769c5.jpg","48a769c523a66c60a80bf99e0d2243e3"],["worcestercountycarpentry.com/static/media/flooring4.deeccce4.jpg","deeccce4229252e51ef779f2c1e6e333"],["worcestercountycarpentry.com/static/media/flooring6.679586f9.jpg","679586f9e99459fcf2c0d15f4e4661b7"],["worcestercountycarpentry.com/static/media/light-veneer.472486bc.png","472486bc26a777c101008fe117f8a352"],["worcestercountycarpentry.com/static/media/logo.737998b8.jpg","737998b8ef5b571592cb74b9a6e83b1c"],["worcestercountycarpentry.com/static/media/remodel1.22316bf0.jpg","22316bf0fc936747ed70241a5524a0c3"],["worcestercountycarpentry.com/static/media/remodel4.14c8e7c6.jpg","14c8e7c686b352e8831fa31f3e80e872"],["worcestercountycarpentry.com/static/media/remodel7.c65a71de.jpg","c65a71ded94483254030d97ec2ab3721"],["worcestercountycarpentry.com/static/media/remodel9.29285eba.jpg","29285ebaf365542493e8f90a4dee7006"],["worcestercountycarpentry.com/static/media/restoration_1.480144d3.JPG","480144d357937c70a92c4790739c8eab"],["worcestercountycarpentry.com/static/media/restoration_2.0245d648.JPG","0245d6484abaa966613ddc4237eb771c"],["worcestercountycarpentry.com/static/media/roofing2.b031afb7.JPG","b031afb7e6fbd3ef6b7e438bc7328eac"],["worcestercountycarpentry.com/static/media/roofing4.9db76538.JPG","9db76538b725be1aecec5031ca9b476c"],["worcestercountycarpentry.com/static/media/roofing5.3ad10062.JPG","3ad100624890c7ae4c345147c0a4de3d"],["worcestercountycarpentry.com/static/media/roofing8.38d02c13.JPG","38d02c1378219dd9acf2b06e051185db"],["worcestercountycarpentry.com/static/media/siding11.1afd7def.JPG","1afd7def8cee2cad17c14f875c4d87c0"],["worcestercountycarpentry.com/static/media/siding16.a0da0f77.JPG","a0da0f77be9279bfdbcc1329f4fb715e"],["worcestercountycarpentry.com/static/media/siding5.e5c69938.jpg","e5c69938d240b51c6bb824ca04d5004c"],["worcestercountycarpentry.com/static/media/siding9.443cab18.jpg","443cab18c29aeb6a647655fefc88073d"],["worcestercountycarpentry.com/static/media/windowsdoors1.53c2f595.jpg","53c2f59537c647b991d0069edfbd7eca"],["worcestercountycarpentry.com/static/media/windowsdoors2.c0efa2e1.jpg","c0efa2e10bf72c94e6a2a6c46a64514b"],["worcestercountycarpentry.com/static/media/windowsdoors4.8d1d8bf5.jpg","8d1d8bf51a02546b6574410124f48d2a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,c){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=c),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(c){return new Response(c,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,c,t,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(c)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,c){if(0===e.length)return!0;var t=new URL(c).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,c){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return c.every(function(c){return!c.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var c=e[0],t=e[1],r=new URL(c,self.location),a=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!c.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(c){if(!c.ok)throw new Error("Request for "+t+" returned a response with status "+c.status);return cleanResponse(c).then(function(c){return e.put(t,c)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!c.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var c,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(c=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,r),c=urlsToCacheKeys.has(t));var a="worcestercountycarpentry.com/index.html";!c&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL(a,self.location).toString(),c=urlsToCacheKeys.has(t)),c&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(c){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,c),fetch(e.request)}))}});