/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9c793348455a37e23bb7e2c813baba86"
  },
  {
    "url": "assets/css/0.styles.7e5a9b95.css",
    "revision": "93d61a346bdec6236376fffd372e987e"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "121e755a0a6982ebf12e2cedfd63aacd"
  },
  {
    "url": "assets/img/myWeChat.jpg",
    "revision": "eaf17d640fa20fb6a7cc9bddd99538d9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4224edc2.js",
    "revision": "981cddccb286738a378758c9eee3bf0f"
  },
  {
    "url": "assets/js/11.a8e76ef6.js",
    "revision": "75b5cf1e116c5afed26648dff9eef061"
  },
  {
    "url": "assets/js/12.31c8d3c5.js",
    "revision": "397ed41149bfc3fb1fa3de663bc8bcf5"
  },
  {
    "url": "assets/js/13.dd11cd40.js",
    "revision": "3768b0f4a7321f2c6df1e8caa5602c24"
  },
  {
    "url": "assets/js/2.1be7ab90.js",
    "revision": "5189b5782509bd3da9b997cb878fea9e"
  },
  {
    "url": "assets/js/3.e8f9abc8.js",
    "revision": "69992ec96e4ad94f1024557392dcc8c0"
  },
  {
    "url": "assets/js/4.850c37c1.js",
    "revision": "e389a3d9fce01d62aeb3751eb8c4a1f7"
  },
  {
    "url": "assets/js/5.04843f39.js",
    "revision": "084bed1ccd4c3ab931bbc3c3228f817b"
  },
  {
    "url": "assets/js/6.387ec458.js",
    "revision": "be4eb207cd2f906904d7e5392c6c6d5a"
  },
  {
    "url": "assets/js/7.02273c20.js",
    "revision": "34564ff6833d4aeb0566f0a099f281d4"
  },
  {
    "url": "assets/js/8.10bc59de.js",
    "revision": "635496cdde3e5f20878129db1fe27240"
  },
  {
    "url": "assets/js/9.20430ebf.js",
    "revision": "0e1f9bca90cc94560d037e4ea627a3c2"
  },
  {
    "url": "assets/js/app.02c9b186.js",
    "revision": "bad6f63d22b62d0074479e9af3a88e23"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "9df5cbc445d9b4e4aef6db79687151ac"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "697d5f251a94f5fed884cd092f596262"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "ce2b2e882f9adfb9a19ad24916060f88"
  },
  {
    "url": "index.html",
    "revision": "a92ad4b8c09775074f26efe31fbc5da6"
  },
  {
    "url": "jsSelfCheck/ES6.html",
    "revision": "310d7f6f5ac4c764ee96c2ff89a5cb43"
  },
  {
    "url": "jsSelfCheck/HtmlAndCss.html",
    "revision": "cb861948c1943b8c17583cb2df85ed12"
  },
  {
    "url": "jsSelfCheck/Js.html",
    "revision": "1d9e755837d84ec5489cfcab872eef42"
  },
  {
    "url": "logo.png",
    "revision": "121e755a0a6982ebf12e2cedfd63aacd"
  },
  {
    "url": "logo192.png",
    "revision": "33dbdd0177549353eeeb785d02c294af"
  },
  {
    "url": "logo288.png",
    "revision": "89ffccb00c50e0250c0e0177e8482ea2"
  },
  {
    "url": "logo512.png",
    "revision": "917515db74ea8d1aee6a246cfbcc0b45"
  },
  {
    "url": "logo52.png",
    "revision": "3573402be874fbb12fd084dd00eced03"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
