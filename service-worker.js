/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["ES6知识点/index.html","24ec457b5a0bee96a5c33bd64d8c2df5"],["JS知识点/index.html","5cb93e229580746bcaf9319bc73d4273"],["SEO初识/index.html","10714f254a157ccf1161cc27b785e4e5"],["Vue知识点/index.html","0fb82abed5b9e4c4e2b7ce9def3d5449"],["about/index.html","894f7301193adbe4fad5ba9f3c39039d"],["archives/2019/06/index.html","89369c9560da2a41bfba52696cb97a1a"],["archives/2019/12/index.html","3e63b5822c86ba49c729d4364cd41fc3"],["archives/2019/index.html","99599fa67bdcd68bc9c4a9bf3641a022"],["archives/2020/04/index.html","45f8e2e4987340511d43babeff4e66cc"],["archives/2020/07/index.html","4203da51aa24b7cdc225b19df7a1d98a"],["archives/2020/08/index.html","d91a5672db8d3c8649176362e54d1e22"],["archives/2020/index.html","fc40b592799cde4b93203a7426a1b0b5"],["archives/2021/01/index.html","2afe9d6a16fa100ab0405d7dbbbdec52"],["archives/2021/index.html","09ce9c6a50fa5dc16ccc1da9458851cd"],["archives/index.html","d9231655ddda7b306a922561c0f97f5c"],["archives/page/2/index.html","e1b8b362c604e19d13f2a9779625dd48"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/SEO/index.html","b0f520a1ac6fa0cb78f428d2d37bcba0"],["categories/Vue/index.html","83ca72c348bd5dc5476a9a79568d2571"],["categories/index.html","af4beaf8ae641c411e3dacd01f1e2ca6"],["categories/生活杂谈/index.html","c75bb81839990b14031c69c6eba366d4"],["categories/训练营/index.html","2abf4a0e71c21bde5b07703a6808293b"],["categories/面试题/index.html","1dbd0a47c80657294f1a739e2e0e96cb"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/index.css","b32deea08898d22851f88cfb257b8970"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar-192x192.png","c5a3ead5a62d3a89ea5a64039ccb0a3d"],["img/avatar-32x32.png","4003a7cd350570c8d75874e850c2755d"],["img/avatar-48x48.png","a99c54fb64fd30f44b79d1eeba5d980f"],["img/avatar-512x512.png","a8315cf7a349e1c0f2be4385ca44c4cc"],["img/avatar-640x640.png","706192ee95308d728b73ab4b74b2e76b"],["img/avatar-72x72.png","7098d767adf9360ffc1e731be8ff502a"],["img/avatar-96x96.png","6f01d05f28aa83a98ac499d151ff59f9"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","925d00cbdf9f159550807fd2b7aa0e9c"],["index.html","7792f787e3582023f8c24d107819c95f"],["js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["js/utils.js","f2f712d5d52625b377855945420eea15"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["link/index.html","efe371715419cdeca1f6daef50a0188c"],["mpvue分包方案/index.html","1a0a197c1b1f3a9b8ceba6c0cc575d7b"],["music/index.html","c1987885ac95d92a80c4f8c355b3fd01"],["page/2/index.html","eb53c4ee410f72f850ef6e79cd17d411"],["tags/JS/index.html","05d5508b18d17ea1ada12d4fe806998a"],["tags/SEO/index.html","f5e2a9763b2365a2138c3789a4995310"],["tags/Vue/index.html","57cbffbb534fa981f0cdf35931cb71c9"],["tags/index.html","6066d6ed1fa584785dc815f16325c9d8"],["tags/小程序/index.html","f8d9bc64739ae6f1f051ad8539a869f8"],["tags/性能优化/index.html","729f6ec1578f746fba54e6a57b5b32e1"],["tags/浏览器/index.html","ba3bc1bf7b83c100d966eabd69784300"],["tags/生活杂谈/index.html","c06af2f0df6e93d2dd3662653b1db39d"],["tags/网络协议/index.html","1d50ef144011ddfdc5a6389514619913"],["tags/训练营/index.html","a4395fe4cb098b11d1b2a6b5d6c0bdb6"],["tags/面试题/index.html","0b4064f07cb1d5a28495566e7e7fa9a7"],["前端性能优化/index.html","8b42ff42f7507129fb376ed898ccea42"],["浏览器基础知识点/index.html","173465e59265fee01f22f85bc3423e4a"],["生活杂谈-恋爱/index.html","a5db8d21e148058a631b2e936982f731"],["知识点整理/index.html","75ca52e488e97d94a2a48d42f1fc5bd0"],["网络协议知识点/index.html","8fc61ce1e95af04b036349ccefcc6331"],["训练营01/index.html","a95f639e1099ed25093a6a73a6b77a2e"],["训练营02/index.html","4ed03f7f29bf1aa6a7510b5ef3df0e9b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







