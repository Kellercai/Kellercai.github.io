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

var precacheConfig = [["ES6知识点/index.html","6db99ba3319094942fe6d9869916871f"],["JS知识点/index.html","6cfa38568bea28729394fe6fb49a227b"],["SEO初识/index.html","9dd2a96122a2057ab255e2ec30f4e482"],["Vue知识点/index.html","91baa624985f201672c5e52a217544f1"],["about/index.html","6986f166da79b49d53e18aa710c37daf"],["archives/2019/06/index.html","94f382cb6116768a55efc8e4f5324eb7"],["archives/2019/12/index.html","a7097b1eafb3531b45917b108c964935"],["archives/2019/index.html","513dece93a8e6bd940fa3b1cac81d447"],["archives/2020/04/index.html","479e6f8c2d5bfcd2b018d94b6948460c"],["archives/2020/07/index.html","70ae37ab10e9d0f3379eb8a29bb771dc"],["archives/2020/08/index.html","cb6c008dfc13a4304e33112cc83566fa"],["archives/2020/index.html","7cd9b27cd98b3c0b2cd88416dd3acfd7"],["archives/2021/01/index.html","cba7c0dee24bfa66332fb6803cf827e4"],["archives/2021/index.html","555d47b56b99f87beb75da07e93fd8ed"],["archives/index.html","bd9a2800eb6d12a89e1e3e8bbbb26beb"],["archives/page/2/index.html","02e758cfe54cf0181b730629c5910a1a"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["categories/SEO/index.html","29590491b26c255619f162cde4e38961"],["categories/Vue/index.html","4a148dc80a06411289f5b83ff54d282e"],["categories/index.html","b98d83db4491ea1728d7e8a0f5540d68"],["categories/生活杂谈/index.html","f9de9d417051b12f338cf3bed6d206df"],["categories/训练营/index.html","7667a5de482a318c98996fd1268e5a0a"],["categories/面试题/index.html","4a8343147d79a6e7b26520acf72e7b61"],["css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["css/index.css","b32deea08898d22851f88cfb257b8970"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/avatar-192x192.png","c5a3ead5a62d3a89ea5a64039ccb0a3d"],["img/avatar-32x32.png","4003a7cd350570c8d75874e850c2755d"],["img/avatar-48x48.png","a99c54fb64fd30f44b79d1eeba5d980f"],["img/avatar-512x512.png","a8315cf7a349e1c0f2be4385ca44c4cc"],["img/avatar-640x640.png","706192ee95308d728b73ab4b74b2e76b"],["img/avatar-72x72.png","7098d767adf9360ffc1e731be8ff502a"],["img/avatar-96x96.png","6f01d05f28aa83a98ac499d151ff59f9"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","925d00cbdf9f159550807fd2b7aa0e9c"],["index.html","4f75bae087f00a34168605070f71fd73"],["js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["js/utils.js","f2f712d5d52625b377855945420eea15"],["lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["link/index.html","8d5eaaf07bb49075a06c8163e040dae2"],["mpvue分包方案/index.html","ad066de8bbb2d4615deb0d8cd11174ce"],["music/index.html","af161c1b073c55fb369c5d5ae72b4886"],["page/2/index.html","0b9f2897a864df33d430aff2cac62252"],["tags/JS/index.html","86828a7a02a5e33316b8d98c66057ee3"],["tags/SEO/index.html","af6d6487ef1ac2b7a9365c3ff7bb17df"],["tags/Vue/index.html","a7133602101ab81a6fc862456dd6557c"],["tags/index.html","c89bf65df0eecf32bf01ae62484cf34c"],["tags/小程序/index.html","2bf90985007db2beb496b8d8566f74ec"],["tags/性能优化/index.html","0e778fd54502c57c3d306c0a0bf94871"],["tags/浏览器/index.html","9b04dbb76326eaaccdabd0ac83babb8e"],["tags/生活杂谈/index.html","cd16a3b7d72639ba8c55cec568d18301"],["tags/网络协议/index.html","12bd8e7399aec2bc8ea5c7c3733d197c"],["tags/训练营/index.html","a7e7fc3fbf59efc35ff62252eccfa863"],["tags/面试题/index.html","cd7db87fea349e4a93de9e5c35c5fad4"],["前端性能优化/index.html","0bb220cf8baf639eb959a55bd4b797c4"],["浏览器基础知识点/index.html","b3d835626eeb2ee7f844cc1da5b5f29b"],["生活杂谈-恋爱/index.html","f266d8df9af10bf07b4584ecab6386ce"],["知识点整理/index.html","6638e2e5adf6e44399468bbaf7dcbce0"],["网络协议知识点/index.html","a6dddd9d57e1ec6fe3cb24397fd5c180"],["训练营01/index.html","a95f639e1099ed25093a6a73a6b77a2e"],["训练营02/index.html","4ed03f7f29bf1aa6a7510b5ef3df0e9b"]];
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







