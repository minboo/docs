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
    "revision": "9b8fc8b1147f4a65cf8de3fbc42f0978"
  },
  {
    "url": "about/index.html",
    "revision": "e797cf09ecc666c0b94bba31c1dba26e"
  },
  {
    "url": "assets/css/0.styles.92fb795d.css",
    "revision": "96293f07d4a9ddc72155e1df5fe23824"
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
    "url": "assets/js/109.13b1de0b.js",
    "revision": "ced4304b55cc9919f846bdc7f30fbf1b"
  },
  {
    "url": "assets/js/11.97d54b7d.js",
    "revision": "a9ed8dd67b1b91232fa531f4606d1c46"
  },
  {
    "url": "assets/js/110.ec225bdb.js",
    "revision": "886c41cef539e41c16c84ecc34699f97"
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
    "url": "assets/js/12.9aae7b96.js",
    "revision": "ebf3fca1f8ff0bbc87aeaa53ec926b42"
  },
  {
    "url": "assets/js/13.848a8a4d.js",
    "revision": "636ba4563b84fca0923aeea04d839c20"
  },
  {
    "url": "assets/js/14.c4cbbbac.js",
    "revision": "9ca754d8515573a51a1480d4ac4e48ea"
  },
  {
    "url": "assets/js/15.865d5993.js",
    "revision": "80274732a52b4c7cf1643c2e9aa63add"
  },
  {
    "url": "assets/js/16.0f637415.js",
    "revision": "03997337a7385c9d1c4d76b5e1fec142"
  },
  {
    "url": "assets/js/17.77902faf.js",
    "revision": "42abbb9581bbdbe0c501ab39fb96cee8"
  },
  {
    "url": "assets/js/18.06c5e1a8.js",
    "revision": "0bc177891c037167500c3a505f22342f"
  },
  {
    "url": "assets/js/19.058ef2e9.js",
    "revision": "71242c3e72cf32684dbe3c1e6f403ede"
  },
  {
    "url": "assets/js/2.8154945c.js",
    "revision": "a62af50b3c4085759653732bed76a605"
  },
  {
    "url": "assets/js/20.9d8d2a60.js",
    "revision": "d22f672dc043d31ded79eee777d1c4db"
  },
  {
    "url": "assets/js/21.d53bc81e.js",
    "revision": "74a2425e6a9bf40a3848ebf8be9f2874"
  },
  {
    "url": "assets/js/22.013a1d1d.js",
    "revision": "449293249986728e78652802e0f5b4c6"
  },
  {
    "url": "assets/js/23.5478e71f.js",
    "revision": "4251b28a21897eb4a6c1658d7b8c4e1b"
  },
  {
    "url": "assets/js/24.ad64936d.js",
    "revision": "d3c56f124210b34b5a822f265427c442"
  },
  {
    "url": "assets/js/25.8156faf2.js",
    "revision": "cc6def8286b1df86f415709630f9ba4b"
  },
  {
    "url": "assets/js/26.de1ad383.js",
    "revision": "9b626fc4697ab6daa2ee99f139bcefbb"
  },
  {
    "url": "assets/js/27.1a88c4fe.js",
    "revision": "31ac1de2cb41c911aae37c4b7f062978"
  },
  {
    "url": "assets/js/28.649ea49d.js",
    "revision": "5a1fc1c34b65bbaa482715091a5f1db8"
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
    "url": "assets/js/31.c7c96e55.js",
    "revision": "a4b02b72c932ae7cfce407947698268b"
  },
  {
    "url": "assets/js/32.b40c2f9d.js",
    "revision": "f8814609be97ed44acec78c7e7bae0f9"
  },
  {
    "url": "assets/js/33.8a2d8cd6.js",
    "revision": "df6c2eb90ac3a5f33c4182d5866c7607"
  },
  {
    "url": "assets/js/34.eea30f0c.js",
    "revision": "67d0ef88bacca96deec98a6b1fa808b7"
  },
  {
    "url": "assets/js/35.472fbeac.js",
    "revision": "0684285005be8b71e66a20b6914ec18b"
  },
  {
    "url": "assets/js/36.51080cfc.js",
    "revision": "dd6c07c5153fa257a0ebdbb22514c30f"
  },
  {
    "url": "assets/js/37.b0f4846a.js",
    "revision": "35d1ce6e81f300ad57c3bc45a5a826d7"
  },
  {
    "url": "assets/js/38.a1174889.js",
    "revision": "dea8d1ac72b4e0422bf18766dd6bd3a2"
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
    "url": "assets/js/42.dfffe07b.js",
    "revision": "a449775841a2620193d92e0f1bcec0f7"
  },
  {
    "url": "assets/js/43.44eea0b0.js",
    "revision": "632730db235c0b8c095d87b219397254"
  },
  {
    "url": "assets/js/44.dc023168.js",
    "revision": "baad228849f69a2ac88d6241887f463a"
  },
  {
    "url": "assets/js/45.c5dd3e94.js",
    "revision": "711ed773641470e1af16a8198063097f"
  },
  {
    "url": "assets/js/46.79948b06.js",
    "revision": "b2fd5faf002f2b0345c731f904bc62a8"
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
    "url": "assets/js/50.78813583.js",
    "revision": "468b862f122c291607b1243f4f69ad1d"
  },
  {
    "url": "assets/js/51.53aa9cf5.js",
    "revision": "d431e629c802d8b0a858bfd416e30328"
  },
  {
    "url": "assets/js/52.c22b1755.js",
    "revision": "8f124d9227749fb5289acae5a905e443"
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
    "url": "assets/js/62.afab2eff.js",
    "revision": "c5d68c1ef048f425c746e7673625871b"
  },
  {
    "url": "assets/js/63.800abe90.js",
    "revision": "809dc5c8c7d5bbc8b5360005166a52a4"
  },
  {
    "url": "assets/js/64.5951988c.js",
    "revision": "bd72518b867bb128ef6eb1fb8eedf064"
  },
  {
    "url": "assets/js/65.01ea9a97.js",
    "revision": "7555fa7f2a166bc60248e1707f9c3675"
  },
  {
    "url": "assets/js/66.bb85edd4.js",
    "revision": "bb04b23afc8b123cc4d3becc645f8b61"
  },
  {
    "url": "assets/js/67.c0da47a9.js",
    "revision": "076df4b5e05b7e10575fcacf19da12cc"
  },
  {
    "url": "assets/js/68.ee327cdd.js",
    "revision": "e095953926340391d9506d24f24f4888"
  },
  {
    "url": "assets/js/69.35735eff.js",
    "revision": "1bc753a3c1a32ec714152749e836e328"
  },
  {
    "url": "assets/js/7.3b12d94c.js",
    "revision": "97e8534b3831ca846a5b51fc77323368"
  },
  {
    "url": "assets/js/70.5cf976c2.js",
    "revision": "a3f8cc221a0dd81e9aecba514ddf2abe"
  },
  {
    "url": "assets/js/71.0bfc13eb.js",
    "revision": "ad434cf00e7aae7eba84a0c5b3ee5158"
  },
  {
    "url": "assets/js/72.6e7aeddb.js",
    "revision": "809f4b2da129cddb28f54e1aa698cc10"
  },
  {
    "url": "assets/js/73.361215c2.js",
    "revision": "84f0eeefb8915caa2fa30c45a1989c6d"
  },
  {
    "url": "assets/js/74.6dae3b39.js",
    "revision": "ca7a90a87156c0acefa3c6536b410223"
  },
  {
    "url": "assets/js/75.56bbe243.js",
    "revision": "ee102d525b9314e58a6aee15723ee691"
  },
  {
    "url": "assets/js/76.88ce9f6b.js",
    "revision": "90bd613c9a105a3c9b4498c645ae5898"
  },
  {
    "url": "assets/js/77.52d3bde1.js",
    "revision": "27b93669cd9fa0475df9c1242078959c"
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
    "url": "assets/js/88.ef8e27eb.js",
    "revision": "51598eb97752187ba416183f6945f49b"
  },
  {
    "url": "assets/js/89.346fee6c.js",
    "revision": "234e7939e67230a527cca202cf493535"
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
    "url": "assets/js/95.ba825a76.js",
    "revision": "18e6da6f83ce786c8f22e9b28330624e"
  },
  {
    "url": "assets/js/96.c57767c7.js",
    "revision": "daf34e7baac509bdf4d2fe6ed12cb51e"
  },
  {
    "url": "assets/js/97.2e9e1eb3.js",
    "revision": "df54e6d651a98bee65e77734eb1ca985"
  },
  {
    "url": "assets/js/98.12339901.js",
    "revision": "f2fa4acea8195d9154fb19ce9f4af271"
  },
  {
    "url": "assets/js/99.1f1b02fe.js",
    "revision": "acb7727cbb2891741a6b0b91ff9c3361"
  },
  {
    "url": "assets/js/app.b042dfd4.js",
    "revision": "ec57ad94f7524216b3ca24ef0a4b646b"
  },
  {
    "url": "backend/docker/container.html",
    "revision": "4bda432ae2dc673cce888fe85712acd8"
  },
  {
    "url": "backend/docker/docker-compose.html",
    "revision": "539a268fe2822182cea28b7b5ddd2650"
  },
  {
    "url": "backend/docker/dockerfile.html",
    "revision": "fbaef2e3edc9be5b220bcf6943968a49"
  },
  {
    "url": "backend/docker/etcd.html",
    "revision": "4b6e0914f0ba952b82085fb6dc98c9ee"
  },
  {
    "url": "backend/docker/image.html",
    "revision": "69b942947e1436c7b22b9e9d1e1b2e16"
  },
  {
    "url": "backend/docker/index.html",
    "revision": "ae65cecbf12497fa723e0fc5b9401d03"
  },
  {
    "url": "backend/docker/private-registry.html",
    "revision": "fa707cb4f34e8b7aba571925bcb94363"
  },
  {
    "url": "backend/docker/volumes.html",
    "revision": "be22a2403e6bb240943f665555a3cbf5"
  },
  {
    "url": "backend/mysql/index.html",
    "revision": "5758797380e6cc7b67eb15fcdf44fcd1"
  },
  {
    "url": "backend/mysql/insert-update-and-delete.html",
    "revision": "9ac3af701ebd08135addb28eeb9b99e5"
  },
  {
    "url": "backend/mysql/join-and-union.html",
    "revision": "4f5f232192f51698afec53ab430ca1bc"
  },
  {
    "url": "backend/mysql/select.html",
    "revision": "9fa652c45e825e00c96bdf72dc98fbad"
  },
  {
    "url": "backend/mysql/stored-procedure.html",
    "revision": "5814481099af82a41a1ab5a77ee1547e"
  },
  {
    "url": "backend/mysql/transactions.html",
    "revision": "15b30b96bc5ee26140c19301a0b85fd3"
  },
  {
    "url": "backend/mysql/trigger.html",
    "revision": "3f10d381c00ad183c1f5652ad09893a4"
  },
  {
    "url": "backend/mysql/views.html",
    "revision": "d1f9b7a2d0f95758216c556cc4a745fe"
  },
  {
    "url": "backend/nginx/configurin-systemd-service-for-nginx.html",
    "revision": "8978871e20344e3c3f9855982d7569f7"
  },
  {
    "url": "backend/nginx/handle-error.html",
    "revision": "ba1b81f05a69a661cba77d627a7d798e"
  },
  {
    "url": "backend/nginx/index.html",
    "revision": "c927bf9ae3840af699155b79c5eed85f"
  },
  {
    "url": "backend/nginx/install-goaccess.html",
    "revision": "c2d13760ba76d1cb536ae16f51583135"
  },
  {
    "url": "backend/nginx/limit-module.html",
    "revision": "4a3c26cde4938cef595ff46bc41a1b6c"
  },
  {
    "url": "backend/nginx/location-rules.html",
    "revision": "5d0decb550aee7cc55f77d8d4da18e4d"
  },
  {
    "url": "backend/nginx/master-slave-nginx.html",
    "revision": "a419e473b8cdca6cc1b5083456423946"
  },
  {
    "url": "backend/nginx/nginx-upstream.html",
    "revision": "fef0431c5e72a3489364051c9c2baf5c"
  },
  {
    "url": "backend/nginx/proxy-pass-rules.html",
    "revision": "75f3ac1cd9fcad26b3374b173eb70ffb"
  },
  {
    "url": "backend/nginx/referer-module.html",
    "revision": "8041290095b7f0fa614fd053a5200e46"
  },
  {
    "url": "backend/nginx/rewrite-rules.html",
    "revision": "3b2c199fef45146e709d584e85b31f48"
  },
  {
    "url": "backend/nginx/the-difference-between-root-and-alias.html",
    "revision": "64ebe9e0930014576353cbad5f24b9b8"
  },
  {
    "url": "backend/nginx/upgrade-http-to-https.html",
    "revision": "f78e850a799692bc36e6887b53bcdc38"
  },
  {
    "url": "backend/nginx/websocket-proxy.html",
    "revision": "c77ea936a8ee486361dd98a9b4e2d82c"
  },
  {
    "url": "backend/redis/index.html",
    "revision": "b4a23fd1502036a614bfc35202033faf"
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
    "revision": "370a5643de5be94a0c91cedc5815ba61"
  },
  {
    "url": "logo.png",
    "revision": "bca9e7fc4565a61a3a0c8b73f68b8858"
  },
  {
    "url": "Middleware/Nginx/configuration.html",
    "revision": "cefb07cb38aeb9105b05f9da3e880dbc"
  },
  {
    "url": "Middleware/Nginx/Dynamic-StaticSeparation.html",
    "revision": "6ba2b8f4c2f9fa016ee24a289e485af2"
  },
  {
    "url": "Middleware/Nginx/index.html",
    "revision": "253bdeb044d0664110b4b0302660ddfa"
  },
  {
    "url": "Middleware/Nginx/install.html",
    "revision": "5ed0e238c4df6c12c3e248cd4881dd3f"
  },
  {
    "url": "Middleware/Nginx/pre.html",
    "revision": "d991ae387c438e5056c5d12ce325dac5"
  },
  {
    "url": "Middleware/Nginx/principle.html",
    "revision": "a4fe8a04a4e66b088c54dc995978d84d"
  },
  {
    "url": "Middleware/Nginx/reverseProxy.html",
    "revision": "e0e7b8f89b5d47b9d7fcbb5d6ff732f4"
  },
  {
    "url": "Middleware/Nginx/URLRewirte.html",
    "revision": "5e646e59da69b8d41ced4a132ee2f626"
  },
  {
    "url": "Middleware/Nginx/负载均衡+URLRewirte.html",
    "revision": "02065674268e03edef1fe143079087bc"
  },
  {
    "url": "more/navigation.html",
    "revision": "1652514043546b8e0a8e5bff69b53fe7"
  },
  {
    "url": "os/centos/index.html",
    "revision": "b2d311c9c223e34f814534a9bd5b7650"
  },
  {
    "url": "os/centos/install-the-latest-version-of-nginx.html",
    "revision": "c72f9a5903a5a24a65df59fcd763e732"
  },
  {
    "url": "os/centos/modify-the-network-named-eth.html",
    "revision": "f61a7fe453c47f3ba00d16c614dbe2b1"
  },
  {
    "url": "os/centos/you-need-to-know-yum.html",
    "revision": "63da8f6fc5e357bad67311f3f5fb7f25"
  },
  {
    "url": "os/linux/alias.html",
    "revision": "0597a7c161be4d2a81a7848b5c325432"
  },
  {
    "url": "os/linux/ansible.html",
    "revision": "618a4bba7c6a9b5be9710b074be802bf"
  },
  {
    "url": "os/linux/archiving-and-compression.html",
    "revision": "9f542324290393eff800883ca28f021f"
  },
  {
    "url": "os/linux/command-options.html",
    "revision": "bb53642d91fbe46e4c8c52eea4056dd2"
  },
  {
    "url": "os/linux/command-shortcut.html",
    "revision": "1f0aa14afab725fbdc9727641684d291"
  },
  {
    "url": "os/linux/common-commands.html",
    "revision": "d39b5c318f3280e0927fb6cd2ed80aa0"
  },
  {
    "url": "os/linux/crontab.html",
    "revision": "0c5104ce0851cc298054e06322bfb49f"
  },
  {
    "url": "os/linux/detect-your-server.html",
    "revision": "f0dfe32fff57cc45256ebb31c5f23257"
  },
  {
    "url": "os/linux/directory-structure.html",
    "revision": "d4b6e321a3c6c75aca4de0870be40f41"
  },
  {
    "url": "os/linux/dnsmasq.html",
    "revision": "9acb9869e3dc2e381f319e90960791fb"
  },
  {
    "url": "os/linux/everything-is-a-file.html",
    "revision": "91bf6194596c593035e3826c2c446832"
  },
  {
    "url": "os/linux/fail2ban.html",
    "revision": "5ef1674ef81a039c34f1fb411492958a"
  },
  {
    "url": "os/linux/firewalld.html",
    "revision": "10305a03066a01e7f76279f4ea6b4af1"
  },
  {
    "url": "os/linux/gaudy-and-pragmatical-command.html",
    "revision": "941f04e22a09ad15d45c485b4a425143"
  },
  {
    "url": "os/linux/grep-sed-awk.html",
    "revision": "33bc2828b97ec7ff984e67224f261855"
  },
  {
    "url": "os/linux/how-to-enable-the-hard-disk.html",
    "revision": "1cbaecc0c2c8b6c26eb098516a47b01a"
  },
  {
    "url": "os/linux/index.html",
    "revision": "6a75c38c84b5ff0a65c770b6ebf0771d"
  },
  {
    "url": "os/linux/io-redirection.html",
    "revision": "8b0f363ee9097992e6ee0ffa3a6ae79a"
  },
  {
    "url": "os/linux/job-control.html",
    "revision": "7f27e62aa1ab2c7e2db515fcaf1320bc"
  },
  {
    "url": "os/linux/prometheus.html",
    "revision": "d6e3730958d494af8c4b6a06df28ad25"
  },
  {
    "url": "os/linux/raid.html",
    "revision": "4a5999a792255a0a77bd923132bdc5b7"
  },
  {
    "url": "os/linux/rsync-and-scp.html",
    "revision": "70af4ee4c0235886da8ef4e9adf6748e"
  },
  {
    "url": "os/linux/shell.html",
    "revision": "59cbe7ce1bec580adf3c4cf4c886549e"
  },
  {
    "url": "os/linux/ssh-makes-your-server-more-secure.html",
    "revision": "b25dbb4377ffe33f09f4d87cac445e4c"
  },
  {
    "url": "os/linux/systemd.html",
    "revision": "e05cb585b08814faf4df9a56dae8c3ef"
  },
  {
    "url": "os/linux/user.html",
    "revision": "66392172f5394ad74ed7f58518a28a36"
  },
  {
    "url": "os/linux/view-text-context.html",
    "revision": "330785716ed780236b58015d7a0fb268"
  },
  {
    "url": "os/linux/xargs.html",
    "revision": "1b4b2c15e1ab7b6380a236537bd5d045"
  },
  {
    "url": "os/ubuntu/change-swap-size.html",
    "revision": "35cf4909fe4f1567db3176f32ced89d5"
  },
  {
    "url": "os/ubuntu/config-netplan.html",
    "revision": "e2ba4e70ced27ea08d9aed879aa6d6b5"
  },
  {
    "url": "os/ubuntu/fix-date.html",
    "revision": "c5952f43804a9c2cb596affd4d4aa05c"
  },
  {
    "url": "os/ubuntu/frp-and-nginx-share-80-port.html",
    "revision": "929de029bcdfff23bd339ec62ad3bfd4"
  },
  {
    "url": "os/ubuntu/frp.html",
    "revision": "9dbf5c56f973abf84ead45eb73974df0"
  },
  {
    "url": "os/ubuntu/index.html",
    "revision": "87cadedc42b6c33cdbc79443e029d400"
  },
  {
    "url": "os/ubuntu/install-the-latest-version-of-nginx.html",
    "revision": "ae1f87c1ba3344fc6881c063c0ba4aa9"
  },
  {
    "url": "os/ubuntu/ubuntu-computer-config.html",
    "revision": "85bd5deed288a40d9d6b8cded562b20d"
  },
  {
    "url": "tools/bookmark-scripts/index.html",
    "revision": "b0ec4df420d635c20afe0ba65f5f7357"
  },
  {
    "url": "tools/git/commit-message.html",
    "revision": "5a356281ffdca28b97b710c539c359be"
  },
  {
    "url": "tools/git/gitignore.html",
    "revision": "c5dacf32e0953ea7a568d14494d774b6"
  },
  {
    "url": "tools/git/index.html",
    "revision": "119f6840a479915c0a217fd27a919ddc"
  },
  {
    "url": "tools/git/repo-tool.html",
    "revision": "8e227ed33dbbf242eb788085d8f05ef7"
  },
  {
    "url": "tools/git/submodule.html",
    "revision": "93b47547b33b1dfce7a57bd163af22df"
  },
  {
    "url": "tools/github/dns-resolve-github-pages.html",
    "revision": "aff9e62bcc0c972567842fce9a495c62"
  },
  {
    "url": "tools/github/download-huge-project-from-github.html",
    "revision": "a41255a24b9bb275c11c46f12516ae47"
  },
  {
    "url": "tools/github/how-to-deploy-private-gitlab.html",
    "revision": "e623155292a61c4a6774150cab59bceb"
  },
  {
    "url": "tools/github/index.html",
    "revision": "b940675dec87498defea34a898a6abbf"
  },
  {
    "url": "tools/github/switch-multiple-github-accounts.html",
    "revision": "a9034183633dd9ebe5e9de0f8648ad5b"
  },
  {
    "url": "tools/github/sync-a-fork.html",
    "revision": "3963472a43c8b933fde79bc1d0d6b508"
  },
  {
    "url": "tools/vscode/errors.html",
    "revision": "dcf3f0202a46453f3cee2eacc2384f7e"
  },
  {
    "url": "tools/vscode/fix-todo-highlight-links.html",
    "revision": "067fb8724f727a698aded3e1e0b50320"
  },
  {
    "url": "tools/vscode/format-with-eslint.html",
    "revision": "8cd4c7c16b6b6041b39e0c83780ea34a"
  },
  {
    "url": "tools/vscode/identify-alias.html",
    "revision": "4f15abc016dec62e62977b3ab1a529ce"
  },
  {
    "url": "tools/vscode/index.html",
    "revision": "1d8fa211a8ef2086c0f7089651f95304"
  },
  {
    "url": "tools/vscode/set-the-font.html",
    "revision": "25ff16da1d8ad63b68cabdde62845bee"
  },
  {
    "url": "tools/vscode/settings-sync.html",
    "revision": "575efb1133013a65a239305485f50f1d"
  },
  {
    "url": "tools/vscode/share-code-snippet.html",
    "revision": "10c6c1e64b1b867dde299a2a66bec3e2"
  },
  {
    "url": "tools/vscode/vetur.html",
    "revision": "e846c0d7732fab14459598d73ec7c8f4"
  },
  {
    "url": "tools/vscode/vscode-markdown-copilot-tab-do-not-work.html",
    "revision": "e585b41d9fd8946b69d1ee7df9273e28"
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
