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
    "revision": "bf4e862bdddd9402489a81cdbde3e105"
  },
  {
    "url": "about/index.html",
    "revision": "70aeb80183b4607015bfcb8f21b4069e"
  },
  {
    "url": "assets/css/0.styles.5bae31cc.css",
    "revision": "3d4818c617edac3c2c54fa0add9350a5"
  },
  {
    "url": "assets/img/bookmark-scripts.b2a54dfa.gif",
    "revision": "b2a54dfaadc2464d22fc6909c7206e09"
  },
  {
    "url": "assets/img/git-lifecycle.b65dc1f4.png",
    "revision": "b65dc1f4245a9a1230e78bac21f5ee6f"
  },
  {
    "url": "assets/img/git-state-model.c7f681dc.png",
    "revision": "c7f681dcc3b9ea88afafb87f2ff85370"
  },
  {
    "url": "assets/img/github-add-ssh-key.9f897b5e.png",
    "revision": "9f897b5e1f906c6f540d90791c0492ac"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/website-routes-test.b8cf8adf.png",
    "revision": "b8cf8adfa2ee92d9c1d10b2c6a3659c4"
  },
  {
    "url": "assets/js/10.b0ef5cc7.js",
    "revision": "5a24d68323423d898065f0db4b04bdb8"
  },
  {
    "url": "assets/js/100.c94e731e.js",
    "revision": "79669b6aa79c83af3f98b7a033a97bd7"
  },
  {
    "url": "assets/js/101.48c30368.js",
    "revision": "8bffb7c88531482470110bb610fc85d4"
  },
  {
    "url": "assets/js/102.46c7e4c5.js",
    "revision": "541738400f1061e77adb85f5cb6b3de7"
  },
  {
    "url": "assets/js/103.c3a5deff.js",
    "revision": "dbad8f4c8f32efc739bc1ea0d748ab27"
  },
  {
    "url": "assets/js/104.0a230598.js",
    "revision": "49af5115694a52c3df004e0bd197e5ab"
  },
  {
    "url": "assets/js/105.5bb8ca11.js",
    "revision": "bf81ecb11d8c0e18b361c035bf7feadb"
  },
  {
    "url": "assets/js/106.452ae601.js",
    "revision": "2a2eefcb6c32bbff0626ec269f7376fc"
  },
  {
    "url": "assets/js/107.25f200d5.js",
    "revision": "8896f4ae1df974618e6de5e4d6e46c39"
  },
  {
    "url": "assets/js/108.17d74b6e.js",
    "revision": "537defcfae14afc752928e67a6670f34"
  },
  {
    "url": "assets/js/109.1609e827.js",
    "revision": "373738ef9095ee42ac16ed68db5d47e4"
  },
  {
    "url": "assets/js/11.97d54b7d.js",
    "revision": "a9ed8dd67b1b91232fa531f4606d1c46"
  },
  {
    "url": "assets/js/110.8ce06d9e.js",
    "revision": "686f1ee68e6b5e522542199238a64ec9"
  },
  {
    "url": "assets/js/111.b852821d.js",
    "revision": "71f8ea0ba706ed7c371cce48474779ee"
  },
  {
    "url": "assets/js/112.5652e068.js",
    "revision": "f3c54a481f56bfdfad3672b5f7f4197f"
  },
  {
    "url": "assets/js/113.accd65c3.js",
    "revision": "b115efdc8591ebc529c40a6f43eb239f"
  },
  {
    "url": "assets/js/12.f4be0313.js",
    "revision": "b65e6889e7cfe91d585b20ddd37ee7a8"
  },
  {
    "url": "assets/js/13.b65e9a3d.js",
    "revision": "ae7c4ae953453cfde0e8721d92ee57c4"
  },
  {
    "url": "assets/js/14.c144247d.js",
    "revision": "024986bd4f0d311dee3cbf5c4adfa1fc"
  },
  {
    "url": "assets/js/15.22d5a186.js",
    "revision": "b131f2840f4cb3254cb1b34b72b38eb4"
  },
  {
    "url": "assets/js/16.c39f8058.js",
    "revision": "72316833572b032c4f96deb67e953ae4"
  },
  {
    "url": "assets/js/17.ac8b7a7e.js",
    "revision": "171bf4f3339230227d8303fc6d82d117"
  },
  {
    "url": "assets/js/18.d5c9d2d1.js",
    "revision": "b92d9841b2f0f695c700f74ca690ed64"
  },
  {
    "url": "assets/js/19.f7cb55d0.js",
    "revision": "0d6c7f429e54e0abc1faafe7dbb663ef"
  },
  {
    "url": "assets/js/2.8154945c.js",
    "revision": "a62af50b3c4085759653732bed76a605"
  },
  {
    "url": "assets/js/20.1cc30f6c.js",
    "revision": "3a09391b83b0cf7a28d2edcffe5d198f"
  },
  {
    "url": "assets/js/21.52403b8d.js",
    "revision": "11e1aee33e695011e1612e2592b1b64f"
  },
  {
    "url": "assets/js/22.00378f70.js",
    "revision": "7a5c7bd72ee8e4a6a33681682e70b1b3"
  },
  {
    "url": "assets/js/23.d9c0ec0b.js",
    "revision": "e1c3fea35f457aeeb03c065c95341cbf"
  },
  {
    "url": "assets/js/24.12e60ed2.js",
    "revision": "cad443e496f3f63736809509ddde4a93"
  },
  {
    "url": "assets/js/25.da452d33.js",
    "revision": "5359e5c4b53502720ddd01cd460c2e20"
  },
  {
    "url": "assets/js/26.1179da7d.js",
    "revision": "4e360340d86064159e95c478e326210f"
  },
  {
    "url": "assets/js/27.62f142d7.js",
    "revision": "3b8ea5b81f193396f94c805995d73cec"
  },
  {
    "url": "assets/js/28.4351295c.js",
    "revision": "fdf207626e8c09078d62720611891a61"
  },
  {
    "url": "assets/js/29.8bb6a22b.js",
    "revision": "ec5bc09bbe565e7c308c1aefcf5400dd"
  },
  {
    "url": "assets/js/3.4234061e.js",
    "revision": "3da64a050fb82eca50044a7583654b2f"
  },
  {
    "url": "assets/js/30.94188915.js",
    "revision": "777d97651777638113fc94c873c30e1a"
  },
  {
    "url": "assets/js/31.e1ea5f16.js",
    "revision": "a3c96188a0c6c3fd993ac17a962cd7b8"
  },
  {
    "url": "assets/js/32.0efe0b9d.js",
    "revision": "8b2aa0ff2f0abd2f88c690aa0e4072eb"
  },
  {
    "url": "assets/js/33.6786ff5b.js",
    "revision": "17b3eaba140d5153a72626d122935b1a"
  },
  {
    "url": "assets/js/34.4db9faa1.js",
    "revision": "825df4c1ad496f47b4cb16ced51e7923"
  },
  {
    "url": "assets/js/35.3c13aa80.js",
    "revision": "cf294036f5333b8f8a8a342953aa85dc"
  },
  {
    "url": "assets/js/36.4a436d94.js",
    "revision": "c677cd48e733bdd4f90c4a176f961164"
  },
  {
    "url": "assets/js/37.c22727fa.js",
    "revision": "9f209ce80165074194a65d75774347df"
  },
  {
    "url": "assets/js/38.47290810.js",
    "revision": "98a977d015138f70ada95f5b916e30c1"
  },
  {
    "url": "assets/js/39.2ef9d394.js",
    "revision": "2c0be851ecb437040c69965364dc58cb"
  },
  {
    "url": "assets/js/4.29fa54b8.js",
    "revision": "21d2ce62300ffbc5cf31439a7054dd50"
  },
  {
    "url": "assets/js/40.a1a50e67.js",
    "revision": "a73b81e5c1e685304b33ea0234c6a691"
  },
  {
    "url": "assets/js/41.82a44a96.js",
    "revision": "e1f093f625ea0d680c0c3ded435b7f9e"
  },
  {
    "url": "assets/js/42.a86ea924.js",
    "revision": "d923e9675049e2942b6ac9d16e24593f"
  },
  {
    "url": "assets/js/43.a7626ca2.js",
    "revision": "d2ddf193ceaf412c4dd762134e0ff7dd"
  },
  {
    "url": "assets/js/44.1229cec8.js",
    "revision": "0e06aea7ce1fc01158e6588c941b89ca"
  },
  {
    "url": "assets/js/45.c5dd3e94.js",
    "revision": "711ed773641470e1af16a8198063097f"
  },
  {
    "url": "assets/js/46.0835e964.js",
    "revision": "7a44b21ff12e15151b7360fb2ca1e346"
  },
  {
    "url": "assets/js/47.485ccf84.js",
    "revision": "26773f13743b6ec22572d468c04c68e4"
  },
  {
    "url": "assets/js/48.14084039.js",
    "revision": "f55b46afb6a5f585da96842891bd7043"
  },
  {
    "url": "assets/js/49.24165fa3.js",
    "revision": "a99248dce0a665cff13ee4d9afe05e7b"
  },
  {
    "url": "assets/js/5.0e72a8e9.js",
    "revision": "777e910fb13bc1cfd24801b4dbedfb54"
  },
  {
    "url": "assets/js/50.b5dae0a8.js",
    "revision": "d30dc68944ca125d6538082f4c847ced"
  },
  {
    "url": "assets/js/51.5ea88576.js",
    "revision": "904f548592d31c97b3a235e839629a4e"
  },
  {
    "url": "assets/js/52.fa6a7f86.js",
    "revision": "d621b87682d8c3e7e1665885963f229e"
  },
  {
    "url": "assets/js/53.7ad7b4a8.js",
    "revision": "2f5303784875427aba5bd7c9095d08ad"
  },
  {
    "url": "assets/js/54.0c093768.js",
    "revision": "37b5bc0eb22f6dad6e84ccdef6b69a3d"
  },
  {
    "url": "assets/js/55.1fbbd65d.js",
    "revision": "9a914f6607f4415435c84f3ef2139799"
  },
  {
    "url": "assets/js/56.843ea8ee.js",
    "revision": "0874f2de6ccc2a26abc5f5632db9a920"
  },
  {
    "url": "assets/js/57.123e346c.js",
    "revision": "07313ad574f8a0f72441fffc83d5fc42"
  },
  {
    "url": "assets/js/58.d34951c6.js",
    "revision": "5f77c0480b5d914e70b6c2f6614a5acb"
  },
  {
    "url": "assets/js/59.b85cf23f.js",
    "revision": "4d0b69c3f392719a923cb14d79b96eb6"
  },
  {
    "url": "assets/js/6.d3ecc9b3.js",
    "revision": "9cb9b86f79cb9013735f09c9eca8050d"
  },
  {
    "url": "assets/js/60.e9071331.js",
    "revision": "1a3bf53ad37fa7ec936028444d4954f0"
  },
  {
    "url": "assets/js/61.6ac666dd.js",
    "revision": "12daf273616f6b76e08da8ac4ac90921"
  },
  {
    "url": "assets/js/62.2b73a516.js",
    "revision": "4c3aab28bd9aa3e25ba420b376fb5c70"
  },
  {
    "url": "assets/js/63.2d005674.js",
    "revision": "5936609f1c203b65841a47029c9fa7eb"
  },
  {
    "url": "assets/js/64.3aa0f64f.js",
    "revision": "1a037b16dd281ac6d24912743816ccad"
  },
  {
    "url": "assets/js/65.61af7324.js",
    "revision": "e7506fa6ce623ae8f8cdefa8ba82958d"
  },
  {
    "url": "assets/js/66.a8b4c0fa.js",
    "revision": "8a2611eada183e7b4e55ec0c1c6749c7"
  },
  {
    "url": "assets/js/67.4874cd0c.js",
    "revision": "a4f2853f736c32b2fe8d273b8a954a15"
  },
  {
    "url": "assets/js/68.eb0fe894.js",
    "revision": "f230625a1f5b53bef028dca07eacefff"
  },
  {
    "url": "assets/js/69.d3da1271.js",
    "revision": "a38cdbf5888b2c02e31cf45316a4d7f1"
  },
  {
    "url": "assets/js/7.3b12d94c.js",
    "revision": "97e8534b3831ca846a5b51fc77323368"
  },
  {
    "url": "assets/js/70.cb5a6540.js",
    "revision": "71ef0a3dd54af3707329dc0da34a2597"
  },
  {
    "url": "assets/js/71.97062bc7.js",
    "revision": "7d036aad608acdd6bf6c72faaf8a9f8a"
  },
  {
    "url": "assets/js/72.3ace4280.js",
    "revision": "8e9768a009639e5ff3dcfd4ab579bbef"
  },
  {
    "url": "assets/js/73.5964117d.js",
    "revision": "bc284a30c5fb862883778e6789d95e0b"
  },
  {
    "url": "assets/js/74.3a6f1e44.js",
    "revision": "9711e0ba594e7e07e7d2e80864754911"
  },
  {
    "url": "assets/js/75.56bbe243.js",
    "revision": "ee102d525b9314e58a6aee15723ee691"
  },
  {
    "url": "assets/js/76.bdeb56a2.js",
    "revision": "52fda50b132c95cc584ed0514c7fa6ee"
  },
  {
    "url": "assets/js/77.fc672f1c.js",
    "revision": "965b9a8bba5fb1806e34cc53b4f7bcaf"
  },
  {
    "url": "assets/js/78.62390d6f.js",
    "revision": "8e0937960bac5d258ad3435790b99168"
  },
  {
    "url": "assets/js/79.e8590d7e.js",
    "revision": "503181ca03a4e8c6cf50f1cafa4e0b94"
  },
  {
    "url": "assets/js/8.b4a14e8c.js",
    "revision": "7753895163f060a6efe7fb595e3f059d"
  },
  {
    "url": "assets/js/80.0649d97d.js",
    "revision": "b4c8a9d8d967b2877e5a83106199c1e2"
  },
  {
    "url": "assets/js/81.f54b68cd.js",
    "revision": "23a93ba01f8e6c6ef505cd6a571fecf3"
  },
  {
    "url": "assets/js/82.a4f85774.js",
    "revision": "2b5cf5150164e4a6112f2624850c4441"
  },
  {
    "url": "assets/js/83.abd156a5.js",
    "revision": "6b78b68fe597e0bf2abb0a2d09a9a55d"
  },
  {
    "url": "assets/js/84.0ba27a18.js",
    "revision": "aa7b115db7275cb26f3567a815307d17"
  },
  {
    "url": "assets/js/85.b84ccd9c.js",
    "revision": "1766e580159febde8aec2fb410ef6d61"
  },
  {
    "url": "assets/js/86.c46352c6.js",
    "revision": "d7a233d0316bad7daf2a3467b1685d9f"
  },
  {
    "url": "assets/js/87.3291a1b3.js",
    "revision": "3327874cc8cf479ba35a678d39963c35"
  },
  {
    "url": "assets/js/88.67e95dba.js",
    "revision": "9623914a193968b1d9152472ec6a3259"
  },
  {
    "url": "assets/js/89.83038095.js",
    "revision": "188711f90008d4deebd444771603177d"
  },
  {
    "url": "assets/js/9.82925584.js",
    "revision": "48256f948aa91a91fca4832f510f574b"
  },
  {
    "url": "assets/js/90.fa92de62.js",
    "revision": "280315a9a04b589b8d2fda984a382a21"
  },
  {
    "url": "assets/js/91.a0a26338.js",
    "revision": "2afd03a7a323e54bddf0de1ca1fc3146"
  },
  {
    "url": "assets/js/92.5675720d.js",
    "revision": "324fa9bf3369d58af8cfcfdb97d8c71b"
  },
  {
    "url": "assets/js/93.0bd5bc0c.js",
    "revision": "e876d4944481f6cfb2946b6f182f5c43"
  },
  {
    "url": "assets/js/94.843c0392.js",
    "revision": "e39b278bac1bdca173d6fa7317ef0de0"
  },
  {
    "url": "assets/js/95.03e309fc.js",
    "revision": "4d87cf8b2774dafef23038cfc794410c"
  },
  {
    "url": "assets/js/96.4faf8dc5.js",
    "revision": "1e780982738d79a5ba6146b909181e00"
  },
  {
    "url": "assets/js/97.ca35ccb2.js",
    "revision": "73dfd09a8ecc9cb54180dbf040762ef4"
  },
  {
    "url": "assets/js/98.14c1848c.js",
    "revision": "d6c1803ba0f263ec5f0ad1e92ac607fb"
  },
  {
    "url": "assets/js/99.1f1b02fe.js",
    "revision": "acb7727cbb2891741a6b0b91ff9c3361"
  },
  {
    "url": "assets/js/app.9f94fa3e.js",
    "revision": "d268b53fd682a6c922693545b24303cc"
  },
  {
    "url": "backend/docker/container.html",
    "revision": "ef720d98a7452cad6fcc7e42b262d401"
  },
  {
    "url": "backend/docker/docker-compose.html",
    "revision": "b22a9137b1d6f473314faab924703415"
  },
  {
    "url": "backend/docker/dockerfile.html",
    "revision": "c7e1dbd547158d92cbc457772b51973b"
  },
  {
    "url": "backend/docker/etcd.html",
    "revision": "6a3d0320ffb79ac07fd89d2a53cd4efa"
  },
  {
    "url": "backend/docker/image.html",
    "revision": "e173b63251917ba4734fad9eebe9da1b"
  },
  {
    "url": "backend/docker/index.html",
    "revision": "20d472a22ace103c66d8f28fd63c66c6"
  },
  {
    "url": "backend/docker/private-registry.html",
    "revision": "7010deba85bb21349f18291182f1f63b"
  },
  {
    "url": "backend/docker/volumes.html",
    "revision": "b5c2628effdad91ac123ecbf651fde60"
  },
  {
    "url": "backend/mysql/index.html",
    "revision": "f2f6943b2c0b2a3d2bdceb922cce942c"
  },
  {
    "url": "backend/mysql/insert-update-and-delete.html",
    "revision": "c1b5d28060462c3d6137668f33972c2d"
  },
  {
    "url": "backend/mysql/join-and-union.html",
    "revision": "c8952e732fcedef9e89be48ed4b407ea"
  },
  {
    "url": "backend/mysql/select.html",
    "revision": "deb197c20ffd672043e4db50754f8c88"
  },
  {
    "url": "backend/mysql/stored-procedure.html",
    "revision": "4f102a8f5bdf5eaaba8cc869f22a3e2c"
  },
  {
    "url": "backend/mysql/transactions.html",
    "revision": "93d650d7a32b0e64e41bfa377ff24856"
  },
  {
    "url": "backend/mysql/trigger.html",
    "revision": "309e03f9a60ab56b2dc2374f7edd9a83"
  },
  {
    "url": "backend/mysql/views.html",
    "revision": "baacc19c18e66ca401db6d596198004e"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "c59bdfc24fecfd986996a105bdb1ab56"
  },
  {
    "url": "backend/nginx/handle-error.html",
    "revision": "f1e0df1aa1ee90de598b8c784a40443d"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "94d216a715ee3f0eff5bf5c48a15b99d"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "8ec7a56a0482004ee4158e05bae7c0e6"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "27d4ffaa45d620515c15c6c9566b44b6"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "9f98ddceeaae5b488c30ccf80f9d9895"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "9ce20012656037823c92e41dd78a1179"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "aa5c5ea35f758a40aafd1675ef8b29a1"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "33e9fa960438e783d7e1e8cda40d374e"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "7b338675c8817c8c68c4d950af55962c"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "91d22886dfaa6b84a0fb4bd14e529a62"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "b190569bc11e29d291f2e73fb6a05c6d"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "46db064a4ffa886f6699ccf84c2edba8"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "5d63426c29d3c5637bef0a6acd738ae5"
  },
  {
    "url": "backend/redis/index.html",
    "revision": "c9da733aff3f6f0d31871bcbf4d6a0ff"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "135c2aba490db14f8200cd772995f35d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a4271dfcd229369a16522b36b4241afa"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "dc7ac2de31649de6f88df341b87d744f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6171be93b691ce4f9546def624bcadc3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f5ff44fc10f11d717056f8108e7f4a9d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "cee47d4601b5a5c4dada3693ffd3ef94"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "61eb9ebb22b0c68b6e236b859094a865"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c430ea29655773327896f7d65fe94c46"
  },
  {
    "url": "index.html",
    "revision": "d58b1ed3220c767a54c2e8fb459213ca"
  },
  {
    "url": "logo.png",
    "revision": "bca9e7fc4565a61a3a0c8b73f68b8858"
  },
  {
    "url": "Middleware/Nginx/configuration.html",
    "revision": "b25fdc6d679b4c63dad2a98be7aed79d"
  },
  {
    "url": "Middleware/Nginx/index.html",
    "revision": "28d7f529e6e5a2bbb6cc163c42b8aa1b"
  },
  {
    "url": "Middleware/Nginx/install.html",
    "revision": "f1f612e4c63b3ca0e0e213174294c0a8"
  },
  {
    "url": "Middleware/Nginx/introduce.html",
    "revision": "c98a08f841c071f0f2a86e161a6ac212"
  },
  {
    "url": "Middleware/Nginx/pre.html",
    "revision": "3b03c4ba0ff9f6d5eda2e460616fdcd1"
  },
  {
    "url": "Middleware/Nginx/principle.html",
    "revision": "f84d29b8ad8e1e9caf88ef124f0cbb4e"
  },
  {
    "url": "more/navigation.html",
    "revision": "b87c46b64b0fb8076d2484ac47bb1ba5"
  },
  {
    "url": "OCR/deploy/hubserving/index.html",
    "revision": "3759f4d544d7293f15112c3315aaab56"
  },
  {
    "url": "OCR/deploy/paddleserving/index.html",
    "revision": "e86f8e062f12878d0a876f6868d075ea"
  },
  {
    "url": "OCR/train/index.html",
    "revision": "d41ffaa231dd66d767510cbb0c0d0119"
  },
  {
    "url": "os/centos/index.html",
    "revision": "382ed772a818dba7a386df64f45b93d0"
  },
  {
    "url": "os/centos/install-the-latest-version-of-nginx.html",
    "revision": "668d4b3f01adc010cac8d811f8bd3f15"
  },
  {
    "url": "os/centos/modify-the-network-named-eth.html",
    "revision": "1eca60b31646c359605ba8483ab34d8d"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "dfb09fabf5279146dc77b2d382323f23"
  },
  {
    "url": "os/linux/alias.html",
    "revision": "acdf2abae9a0a95d7d86750087689f16"
  },
  {
    "url": "os/linux/ansible.html",
    "revision": "4cc72b8ee17aca6ea7e86c202f92a1b6"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "739fad11de41f7741c597ed7690e9a6c"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "06bb457eac2b6ba482ea5cfd9d49868e"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "6519f03289d7c54cd84df71d6d264ab9"
  },
  {
    "url": "os/linux/common-commands.html",
    "revision": "f4e858c6d0d8be06aa3950e95880b10c"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "933ddda2d5cc41317038833aee4aa741"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "a7f63d5742a2d245a07e70001f72fe3b"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "8a57efa31bad46dce705378fca0d3a23"
  },
  {
    "url": "os/linux/dnsmasq.html",
    "revision": "f5297d4c69bce0904f857e3156091cc9"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "9efb15fb90bd0bc191f090c922039d8b"
  },
  {
    "url": "os/linux/fail2ban.html",
    "revision": "7d9ff36430572bf8093ed8fe1b4ba198"
  },
  {
    "url": "os/linux/firewalld.html",
    "revision": "47eab7d2e87b6185a4f0d6ea077afd54"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "fb7d306cdcbfb13870e9c8b795e4c08c"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "ef4733725a496845b779462f6f215a85"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "96c48c1030d0429b72e7767f29297128"
  },
  {
    "url": "os/linux/index.html",
    "revision": "71f28117e13f26204f508556ead5e918"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "fb1830546744b49e049b7d8e84bf28ce"
  },
  {
    "url": "os/linux/job-control.html",
    "revision": "68bc355d823cea4bcc60c105a67877e3"
  },
  {
    "url": "os/linux/prometheus.html",
    "revision": "b260ebc9913e44ac1b360d5ac4823b3f"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "f4c7e71f5d4fb7474b303df535607549"
  },
  {
    "url": "os/linux/rsync-and-scp.html",
    "revision": "1f68a6d6921956a726d8d5af17b2fcf5"
  },
  {
    "url": "os/linux/shell.html",
    "revision": "3722965cdaa86b2ac5f0a2f461645cf8"
  },
  {
    "url": "os/linux/ssh-makes-your-server-more-secure.html",
    "revision": "ed157f016b654dd90530c33d7dcb5570"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "815492a84b971c170872e2bb2c0af2ef"
  },
  {
    "url": "os/linux/user.html",
    "revision": "518005b303e881ad521989634d30eb2d"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "2d0f652a64285f3157cdfb90f25996ea"
  },
  {
    "url": "os/linux/xargs.html",
    "revision": "0f8b6dcdebfda212e4b3f3cf6fdf691c"
  },
  {
    "url": "os/ubuntu/change-swap-size.html",
    "revision": "3f63fee604a422a49a8b70c80a5943fe"
  },
  {
    "url": "os/ubuntu/config-netplan.html",
    "revision": "945a72b02fd135cad8698b355c0dda62"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "0ccd5e7d5951d484d5b57239749bcc2f"
  },
  {
    "url": "os/ubuntu/frp-and-nginx-share-80-port.html",
    "revision": "bd09d95414e4dd1db3c839ca4893bf9f"
  },
  {
    "url": "os/ubuntu/frp.html",
    "revision": "f8e4c52bb468120a0ac1e0abf6c35abe"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "a907d9ab0b115272929b9d75a6aa66b9"
  },
  {
    "url": "os/ubuntu/install-the-latest-version-of-nginx.html",
    "revision": "ab2a146001d62343e3d4e25e77c0e556"
  },
  {
    "url": "os/ubuntu/ubuntu-computer-config.html",
    "revision": "65dba917f05ea1dcadb7fa4a1a5f3817"
  },
  {
    "url": "tools/bookmark-scripts/index.html",
    "revision": "b184ea1babb40555582a19dd921df509"
  },
  {
    "url": "tools/git/commit-message.html",
    "revision": "58c322da241ef6c51a96489e34f51f46"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "ddbd02a01286ed0dad575a7f45de4348"
  },
  {
    "url": "tools/git/index.html",
    "revision": "45ebdc29ad105a0ba577c0dca431a468"
  },
  {
    "url": "tools/git/repo-tool.html",
    "revision": "8172644d9764e125da28cded54ed1468"
  },
  {
    "url": "tools/git/submodule.html",
    "revision": "e1fe56c6646ec86312bba4c70449d7a2"
  },
  {
    "url": "tools/github/dns-resolve-github-pages.html",
    "revision": "af5314fc167933c1f791bc0cb7bf934e"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "d53495ccf436b14f158569ab5e835f94"
  },
  {
    "url": "tools/github/how-to-deploy-private-gitlab.html",
    "revision": "b1591f45e75b9c4d190f01bcc426dd61"
  },
  {
    "url": "tools/github/index.html",
    "revision": "d6e97758c5172fa9e9093103fab5dde9"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "f49437362c9ad15ba324d2ce55b840f6"
  },
  {
    "url": "tools/github/sync-a-fork.html",
    "revision": "bdc3ddfa2f3faedae358294f1fa2b267"
  },
  {
    "url": "tools/vscode/errors.html",
    "revision": "0d3ffe17176c73a718b3135e0e60f94b"
  },
  {
    "url": "tools/vscode/fix-todo-highlight-links.html",
    "revision": "b47385590b6904894669e942d082268d"
  },
  {
    "url": "tools/vscode/format-with-eslint.html",
    "revision": "be5b8d4515ce4c717ea3a99aa2efbed6"
  },
  {
    "url": "tools/vscode/identify-alias.html",
    "revision": "ca631feac09349cf25d2a8b84908e3d3"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "a3cef35f59b58b07c368602292daa4bb"
  },
  {
    "url": "tools/vscode/set-the-font.html",
    "revision": "4fdc049065069e3283e8351c7cce69af"
  },
  {
    "url": "tools/vscode/settings-sync.html",
    "revision": "3f9f262ccca18071c1715a18dc2cd745"
  },
  {
    "url": "tools/vscode/share-code-snippet.html",
    "revision": "e9cd9f78f1dcc22cb97c2d33aa90841e"
  },
  {
    "url": "tools/vscode/vetur.html",
    "revision": "482da0517036f4da18be647be4fa982a"
  },
  {
    "url": "tools/vscode/vscode-markdown-copilot-tab-do-not-work.html",
    "revision": "445c2100df82f3ec5a0148ef7a59eb17"
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
