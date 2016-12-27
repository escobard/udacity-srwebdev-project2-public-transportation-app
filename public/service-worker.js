"use strict";var staticCacheName="pta-static-v6.2";self.addEventListener("install",function(t){t.waitUntil(caches.open(staticCacheName).then(function(t){return t.addAll(["/","/index.html","/service-worker.js","/components/my-app.html","/components/my-icons.html","/components/my-view1.html","/components/my-view2.html","/components/my-view404.html","/components/shared-styles.html","/components/js/app.js","/components/js/sw/sw-handle.js","/components/js/components/my-app.js"])}))}),self.addEventListener("activate",function(t){t.waitUntil(caches.keys().then(function(t){return Promise.all(t.filter(function(t){return t.startsWith("pta-")&&t!=staticCacheName}).map(function(t){return caches.delete(t)}))}))}),self.addEventListener("fetch",function(t){var e=new URL(t.request.url);return e.origin===location.origin&&"/"===e.pathname?void t.respondWith(caches.match("/")):void t.respondWith(caches.match(t.request).then(function(e){return e||fetch(t.request)}))});