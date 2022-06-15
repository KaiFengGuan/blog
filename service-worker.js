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
    "revision": "b24e1b2a5d050adc89f050f21f1e5407"
  },
  {
    "url": "assets/css/0.styles.a0e73408.css",
    "revision": "4021d690baafec19b82d2c751b8432b6"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.4881b889.js",
    "revision": "d961c87ccccae69e2da3c9684727d01e"
  },
  {
    "url": "assets/js/10.62bbd4e1.js",
    "revision": "f74c1a2619f56b87fc48efb3caf5b212"
  },
  {
    "url": "assets/js/11.21931bf3.js",
    "revision": "f491ca17f3562f45e9047ab8b74c9cd9"
  },
  {
    "url": "assets/js/12.b7bb4cc9.js",
    "revision": "b6f8194e12f51f53649384d250216b62"
  },
  {
    "url": "assets/js/13.267aabb4.js",
    "revision": "6d65dab0b60975abc1b31b1c7ff133c4"
  },
  {
    "url": "assets/js/14.c648e598.js",
    "revision": "cbd500b80da38fcaeccc438ad7aa550a"
  },
  {
    "url": "assets/js/15.94707f0b.js",
    "revision": "82dbc9108941189e3bccf96e185677fa"
  },
  {
    "url": "assets/js/16.38bc3818.js",
    "revision": "29f1cdffbc45d2259cde617c57c3fa24"
  },
  {
    "url": "assets/js/17.e9c083a0.js",
    "revision": "e9a616572f66b2dadd8a28119138fa49"
  },
  {
    "url": "assets/js/18.a2c29c2c.js",
    "revision": "1e942d9ba83c88305b9ee598e61556a1"
  },
  {
    "url": "assets/js/19.3284b5b8.js",
    "revision": "7589436a20070c35ae2c165e1624b623"
  },
  {
    "url": "assets/js/2.e526e015.js",
    "revision": "afd6549d721e62ae136e3c01dd7ad68f"
  },
  {
    "url": "assets/js/20.cecfafb5.js",
    "revision": "f256ad54d6e39b7941a741436f1a7141"
  },
  {
    "url": "assets/js/21.4007df2d.js",
    "revision": "32b4688e058f096e95d20ce024cfe23e"
  },
  {
    "url": "assets/js/22.bea7b15a.js",
    "revision": "de9e4ea7b42aa2d2e4cf57d76a758ae0"
  },
  {
    "url": "assets/js/23.e2f8d466.js",
    "revision": "849987544adf57804d09fea5788eed9a"
  },
  {
    "url": "assets/js/24.1f1b0ae5.js",
    "revision": "f668ec258a3467acf672acaf7ed25c6d"
  },
  {
    "url": "assets/js/25.2ff89ed9.js",
    "revision": "b792b7d556facc44c1e399f4e388ce8b"
  },
  {
    "url": "assets/js/26.174bf9fc.js",
    "revision": "86481f435b8ebd239afffca832684ba8"
  },
  {
    "url": "assets/js/27.4564ffe0.js",
    "revision": "27756abce7a62f67e9c0a545f96ce821"
  },
  {
    "url": "assets/js/28.9aa76a7f.js",
    "revision": "875300a8037cc79b51ec75b5a61138f9"
  },
  {
    "url": "assets/js/29.a060ce34.js",
    "revision": "fab65df7c479405185d4ec5b8770ef76"
  },
  {
    "url": "assets/js/30.15aeba89.js",
    "revision": "4e04289b3e45341826a7225862bfff0a"
  },
  {
    "url": "assets/js/31.046cf546.js",
    "revision": "40b6f310a6cf73c0ee505d744aca4ba6"
  },
  {
    "url": "assets/js/32.76915931.js",
    "revision": "ef22fa9a3b8e93d54d786aa1fd21dc49"
  },
  {
    "url": "assets/js/33.23706623.js",
    "revision": "bb10d02ccc55e37717c6a73ec2f405ec"
  },
  {
    "url": "assets/js/34.59e41043.js",
    "revision": "9a22cc42f1ddbaffb0b0a981e37a0f8e"
  },
  {
    "url": "assets/js/35.74439954.js",
    "revision": "43d77a2e881bb4fba4b8ec5a8689390e"
  },
  {
    "url": "assets/js/36.4a47f50b.js",
    "revision": "4332d17477e5aa26428493d05c75c446"
  },
  {
    "url": "assets/js/37.08a09c2f.js",
    "revision": "40917084dba209b6dc87bdef5e249239"
  },
  {
    "url": "assets/js/38.3cbc9b7a.js",
    "revision": "6038c8e8350a65d2d73e890206a1e53b"
  },
  {
    "url": "assets/js/39.a83e1974.js",
    "revision": "5385c7afe301b86739907c20adb547b6"
  },
  {
    "url": "assets/js/4.696def05.js",
    "revision": "e06272b6e7ccb6d5d91203e4ac27db51"
  },
  {
    "url": "assets/js/40.d6de7434.js",
    "revision": "ec21e32364f891d744d1122e19c77adb"
  },
  {
    "url": "assets/js/41.6b9bb2b7.js",
    "revision": "0f19e711d848db64f001599580f23b1f"
  },
  {
    "url": "assets/js/42.bbce2a63.js",
    "revision": "0ab4170f4d32c6f0955d482cc795d3ee"
  },
  {
    "url": "assets/js/43.8b601bd9.js",
    "revision": "fc5192aac0df370891f8b005d203a3fb"
  },
  {
    "url": "assets/js/44.025677f7.js",
    "revision": "4e97a0451c3b2107912063b20a5697dd"
  },
  {
    "url": "assets/js/45.521cf06f.js",
    "revision": "c2b893dae73a2fb5ea0878d66dfefd8f"
  },
  {
    "url": "assets/js/46.81f6b643.js",
    "revision": "5fca97d12331420fb671df9a2228b57a"
  },
  {
    "url": "assets/js/47.6d9dc0d8.js",
    "revision": "f4822aa21cca4d924db14223635468e3"
  },
  {
    "url": "assets/js/48.cf2d0d91.js",
    "revision": "f91c6cd473050849e268b46b03a678d3"
  },
  {
    "url": "assets/js/49.a1e5080d.js",
    "revision": "840d6794859dbe5a1e24ae975c98278d"
  },
  {
    "url": "assets/js/5.3d16a7e7.js",
    "revision": "16444478b385c89dc8c9a45dc48364f2"
  },
  {
    "url": "assets/js/50.1ebfdfc7.js",
    "revision": "ddfc273618e012375e21bfb20ddbfc1f"
  },
  {
    "url": "assets/js/51.bba5f0f1.js",
    "revision": "89fb5b7f6492fb19d51fe28ed303c8fa"
  },
  {
    "url": "assets/js/52.c475d020.js",
    "revision": "5a8a1f1305906086f0908a09a525cebd"
  },
  {
    "url": "assets/js/53.062b1d65.js",
    "revision": "2c3f3ca0280832628065482c406bee03"
  },
  {
    "url": "assets/js/54.99e0f814.js",
    "revision": "5e95b2d19ddb7dd14dd06ec72afc88bf"
  },
  {
    "url": "assets/js/55.e89cf578.js",
    "revision": "a238aa1d8014e405db0085b6e415aab2"
  },
  {
    "url": "assets/js/56.04e65f01.js",
    "revision": "66d99ada45872343d166f86560c5e44e"
  },
  {
    "url": "assets/js/57.1aca8972.js",
    "revision": "03969f33c292e9dba9860d79da75fbfe"
  },
  {
    "url": "assets/js/58.c13cb793.js",
    "revision": "7e877d1ba469e5f54690efd45455c7f8"
  },
  {
    "url": "assets/js/59.d53eaf77.js",
    "revision": "be880d31787c75b88ea224cadbd61213"
  },
  {
    "url": "assets/js/6.f259f676.js",
    "revision": "8b9d4e456b36121dcb9c86840a5bf792"
  },
  {
    "url": "assets/js/60.46b8bbc8.js",
    "revision": "2c8fc82f022e226a13509515b33e0773"
  },
  {
    "url": "assets/js/61.15fbd5ab.js",
    "revision": "0d59e6396b76fec8c4f0effb4e63fbd4"
  },
  {
    "url": "assets/js/62.8f2c9392.js",
    "revision": "45241d69604d052047a8f0f926b11097"
  },
  {
    "url": "assets/js/63.91dfca24.js",
    "revision": "001f596e3311b9bf08adde61c400378d"
  },
  {
    "url": "assets/js/64.6399713f.js",
    "revision": "0922405090f4261f74b8b12af78a3200"
  },
  {
    "url": "assets/js/65.16bd763c.js",
    "revision": "3b632e9945ac7c1e5ada0dcdb9764c48"
  },
  {
    "url": "assets/js/66.5102bb6c.js",
    "revision": "c0148a35df1483eb45a59c7bd4904f3d"
  },
  {
    "url": "assets/js/67.828c8ca4.js",
    "revision": "7581cab6e7e385afdeefa81e3790b75a"
  },
  {
    "url": "assets/js/68.16d74536.js",
    "revision": "034b0b068ba1854b16d210a3636ddda9"
  },
  {
    "url": "assets/js/69.987631ae.js",
    "revision": "b2972bb02ac9856c870864a7520a121c"
  },
  {
    "url": "assets/js/7.1cb2498c.js",
    "revision": "5695ec168435c1e536e79896e229bbfd"
  },
  {
    "url": "assets/js/70.b381bfed.js",
    "revision": "040010932cae9dd61e8ee3103e515313"
  },
  {
    "url": "assets/js/71.f6facb60.js",
    "revision": "bb3509f4e7a6b21c0db2d09c8ffa80c5"
  },
  {
    "url": "assets/js/8.2b598ee0.js",
    "revision": "dd25d478015131fc56ea132935b57c76"
  },
  {
    "url": "assets/js/9.6ef3a642.js",
    "revision": "4f14c3e7e369cf91fb9c362b11653bc9"
  },
  {
    "url": "assets/js/app.8aa25134.js",
    "revision": "2a3bd2ef4de0b4e109fcc7c7bb51505b"
  },
  {
    "url": "avatar.png",
    "revision": "eb0ffa4059266d7a79eecc718ff1f1f7"
  },
  {
    "url": "avatar1.png",
    "revision": "7a4ed8e09f749d6b2e62dc08c0044225"
  },
  {
    "url": "bg1.jpg",
    "revision": "09dcd3f6cec20fbd289771d754fb7a4b"
  },
  {
    "url": "bg5.jpg",
    "revision": "cd29f130a2afa5f54d9813ccb1dcdf6d"
  },
  {
    "url": "categories/Browser/index.html",
    "revision": "674c510151c27da057130aa75e109d2f"
  },
  {
    "url": "categories/Computer/index.html",
    "revision": "5849c5559f08d649dc1982b22c4d5951"
  },
  {
    "url": "categories/Engineering/index.html",
    "revision": "edeb755a0986ed0d1e3d329caa986235"
  },
  {
    "url": "categories/HTML_CSS/index.html",
    "revision": "d1a741361f554b23ec87d8c60c3b6370"
  },
  {
    "url": "categories/index.html",
    "revision": "ef4c4f2317d3c289332fdb3d6eefbedf"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "0ca17bddd70f36aa1b27887450c5c5a4"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "8904a3d57d5421fbf54d2503e484b404"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "4718be5543de905022646f9742e20011"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "5711bd41d34c7d94d3884e6b7179427f"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "b5141e946eed9997b1348a37863030dd"
  },
  {
    "url": "docs/browser/01_same_origin_policy.html",
    "revision": "e0f78453127730900740bcc56c65d2dd"
  },
  {
    "url": "docs/browser/02_url_to_page.html",
    "revision": "17109bea55a7e0ffc3f2c8de731d6410"
  },
  {
    "url": "docs/browser/03_process_and_thread.html",
    "revision": "96eb0d488abcc1b771c629b1606067ab"
  },
  {
    "url": "docs/computer/algorithm_01_sorting_algorithm.html",
    "revision": "2a311950e34e79805597bb6978442145"
  },
  {
    "url": "docs/computer/git_01_common_commands.html",
    "revision": "2d5cb6799c9ac6214b1585a3eceaa83f"
  },
  {
    "url": "docs/computer/network_01_protocol_level.html",
    "revision": "d62a55f06594fcb6a8d0f63ac8ebeb95"
  },
  {
    "url": "docs/computer/network_02_application_layer.html",
    "revision": "52a6f7e7826576b10a72508903b52a5a"
  },
  {
    "url": "docs/computer/network_03_http.html",
    "revision": "1d820cdbe6f77a7a8666399aa87c9041"
  },
  {
    "url": "docs/computer/network_04_tcp.html",
    "revision": "b58307a84bad465951fad2eec6ad1084"
  },
  {
    "url": "docs/computer/security_01_xss.html",
    "revision": "765eda135f3e3020fd4750be58e6c8db"
  },
  {
    "url": "docs/computer/security_02_csrf.html",
    "revision": "1138a32287f4da2f03e1857ccbed0292"
  },
  {
    "url": "docs/computer/security_03_other_security.html",
    "revision": "ae8834284a2e205ad119cd4705c3f14c"
  },
  {
    "url": "docs/computer/sql_01_learning_my_sql.html",
    "revision": "0ea714dd5c00139e0b1b5b892d604c2f"
  },
  {
    "url": "docs/engineering/engineering_01_what_is_engineering.html",
    "revision": "f9a062c792da06658148728eb66212c0"
  },
  {
    "url": "docs/engineering/engineering_02_authorization.html",
    "revision": "5474217c5299e5e067f2cc1366a4b358"
  },
  {
    "url": "docs/engineering/optimization_01_performance.html",
    "revision": "ae24f0f41a61b2c1aac0abe3ca9b4ea9"
  },
  {
    "url": "docs/engineering/webpack_01_webpack_in_project.html",
    "revision": "337e0354d7f4e10d719d2859f3246997"
  },
  {
    "url": "docs/html_css/css_01_basics.html",
    "revision": "e717480738f4e28748da77a6d7b62440"
  },
  {
    "url": "docs/html_css/css_02_box_and_context.html",
    "revision": "d76131ba5783b7dbed779a2aa5c8eea9"
  },
  {
    "url": "docs/html_css/css_03_value_and_unit.html",
    "revision": "fa2f7d85882090ad69b392690c8130ae"
  },
  {
    "url": "docs/html_css/css_04_common_layout.html",
    "revision": "e2d8301abf681ebea62aed21eeffd635"
  },
  {
    "url": "docs/html_css/css_05_common_property.html",
    "revision": "374b0f96d38f10951cae494d48c4290f"
  },
  {
    "url": "docs/html_css/css_10_float_and_position.html",
    "revision": "bf89eadf17b19e71b02ee60673581247"
  },
  {
    "url": "docs/html_css/css_11_preprocessor.html",
    "revision": "604637472ab835b0ece8ac3128f62142"
  },
  {
    "url": "docs/html_css/html_01_basics.html",
    "revision": "de55c46b287bbac174ed0bb5e8b53934"
  },
  {
    "url": "docs/javascript/es6_01_proxy.html",
    "revision": "46e35c2f71796a6c5f25c483929ce00d"
  },
  {
    "url": "docs/javascript/es6_02_reflect.html",
    "revision": "c9c16e6400cd13e52812ffd6ae4c13f9"
  },
  {
    "url": "docs/javascript/es6_03_symbol.html",
    "revision": "69b2c53e6baf94563e15113d0d68eee7"
  },
  {
    "url": "docs/javascript/handwritten_01_basics.html",
    "revision": "02c785f475700f747661031ea6b16174"
  },
  {
    "url": "docs/javascript/handwritten_02_promise.html",
    "revision": "0928e2e4aac8eeeb09981b7ccc442c67"
  },
  {
    "url": "docs/javascript/handwritten_03_ajax.html",
    "revision": "2b794f56e7c6ca00666dec88f97fec03"
  },
  {
    "url": "docs/javascript/javascript_01_environment.html",
    "revision": "7ea18a42fc00565d26f8b61eaa59bf31"
  },
  {
    "url": "docs/javascript/javascript_02_type_conversion.html",
    "revision": "69b9fa43bdbd3a01ff747d064111a0fc"
  },
  {
    "url": "docs/javascript/javascript_03_context_and_scope.html",
    "revision": "1b8ab454cfadb68d3b7215762ff6c31d"
  },
  {
    "url": "docs/javascript/javascript_04_closure.html",
    "revision": "69f9ee9f89a6a3d3a272171639c612e8"
  },
  {
    "url": "docs/javascript/javascript_05_object_oriented.html",
    "revision": "c66b98821e7891d01f850e133bdf83d5"
  },
  {
    "url": "docs/javascript/javascript_06_memory_management.html",
    "revision": "f5872a18238a6a29f77ac361c958122f"
  },
  {
    "url": "docs/javascript/javascript_07_asynchronous_programming.html",
    "revision": "8cd738b14170f86c96261b6d598546bd"
  },
  {
    "url": "docs/javascript/javascript_08_data_type_detection.html",
    "revision": "dfe124dc33252334b08df7e4861f7540"
  },
  {
    "url": "docs/javascript/javascript_09_regular_expression.html",
    "revision": "c8dabef6b2ee63305affa280bfab9500"
  },
  {
    "url": "docs/other/interview_01_interview_experience.html",
    "revision": "3e7d64661f8d94649e6dbb981efbf41f"
  },
  {
    "url": "docs/other/interview_02_id_x4esh7nnukh7.html",
    "revision": "4f2bc8a3d5f90b906424ed0f307079ba"
  },
  {
    "url": "docs/other/other_01_using_vuepress.html",
    "revision": "4174505cdb7df4b420d6439c91149483"
  },
  {
    "url": "docs/typescript/typescript_01_basics.html",
    "revision": "c593b2bfe630bb6313026b6a6ffd4bbc"
  },
  {
    "url": "docs/typescript/typescript_02_advanced_type.html",
    "revision": "c7e22ca979acd2641ef2a4cb9ecbc8f5"
  },
  {
    "url": "docs/typescript/typescript_03_generics.html",
    "revision": "05000029a3ce5f0e05a7f767ed7c4259"
  },
  {
    "url": "docs/typescript/typescript_04_overload_override.html",
    "revision": "e229f22c9eae9d5e804123179ffe2a82"
  },
  {
    "url": "docs/vue/vue2_01_basics_1.html",
    "revision": "c16de421a2d9683448effce01be61d2a"
  },
  {
    "url": "docs/vue/vue2_02_basics_2.html",
    "revision": "16d498eb292629034da9c854c1c3bb82"
  },
  {
    "url": "docs/vue/vue2_03_router_navigation_guards.html",
    "revision": "094d7481ef2eaab3bafd1bdb454dc3a6"
  },
  {
    "url": "docs/vue/vue2_04_interview_questions.html",
    "revision": "05d78b3e2313921e0ed3a5c4006bb505"
  },
  {
    "url": "docs/vue/vue2sourcecode_02_init.html",
    "revision": "83a569478b614a768627e481931989ba"
  },
  {
    "url": "docs/vue/vue2sourcecode_03_reactive.html",
    "revision": "5eed125d0de2165e78445c8667819dac"
  },
  {
    "url": "docs/vue/vue2sourcecode_04_async_update.html",
    "revision": "cc41cbc978812a2984e3700df2db192e"
  },
  {
    "url": "docs/vue/vue2sourcecode_05_mount_and_patch.html",
    "revision": "9a9cffbb38fcbd83d5da69753cae2a8b"
  },
  {
    "url": "docs/vue/vue2sourcecode_06_template_parsing.html",
    "revision": "2ffc3c57c9a6a99e8fd5cda56e443858"
  },
  {
    "url": "docs/vue/vue3_01_new_feature.html",
    "revision": "5384d5dff314e00aa27bf9bf9001e9fc"
  },
  {
    "url": "favorites/index.html",
    "revision": "a8dac37e47f71e0d5e9dc3fe44ae1c38"
  },
  {
    "url": "index.html",
    "revision": "b140493ce29d9c8aeddc1692d20560a7"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "a415a1f46657fc9bbd729b1e95fb4062"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "3940217586328f84c56b46f80e978d25"
  },
  {
    "url": "tag/git/index.html",
    "revision": "f4f2787fb19a04e0f4ec7519a400458e"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "f7c383900920db85a159406a3fc045d8"
  },
  {
    "url": "tag/index.html",
    "revision": "1cb556a5473a85275c5718c5779d6f3a"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "782a18be3d95feaff962920966b0d52d"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "7dab0fd2ba673a8f75981c517459d25b"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "a159a8618a6f0a2550c75049dea93ee9"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "30fd77207cdeb729ec456627d67c41d0"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "573d0ac02571197627cf0f41ad5cf738"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "11b31d028c7166c266120bc6c50a814f"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "febba27c81269b26aa0153eac4531669"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "1b842c5d02698601523108d135f0991b"
  },
  {
    "url": "tag/Web安全/index.html",
    "revision": "a2a69a3fe250b2f402eca1aba99a1ca5"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "740f837eaec4c0c808ebf243d6f99115"
  },
  {
    "url": "tag/同源策略/index.html",
    "revision": "36cbb09d93792654bed500bc4a0c8a13"
  },
  {
    "url": "tag/异步编程/index.html",
    "revision": "8a87731593d964065d044027870492b8"
  },
  {
    "url": "tag/性能优化/index.html",
    "revision": "cc4c8fdc43573c3c336516b7d1ff788c"
  },
  {
    "url": "tag/手撕/index.html",
    "revision": "f54a5bd0341de7b0bce1acf7529593f9"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "7ea6dc30f87b4857968d728a5a8086e4"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "533c9edc953d20eb015ca96cc96a4940"
  },
  {
    "url": "tag/浏览器原理/index.html",
    "revision": "8ae3a985763dc1cc7ba03e743a067bd1"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "371c3e80a9d7cb851b38b3ca6f7c1ff6"
  },
  {
    "url": "tag/登录/index.html",
    "revision": "cc19f5564045856108d6e9b222e9d896"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "a60fbf7ccfbbb516bda72e85d9911818"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "14df4e44b155cfb5dd4192aca6283383"
  },
  {
    "url": "tag/计算机网络/index.html",
    "revision": "46fe84e9ef2a3ce6fbaf679cb4208148"
  },
  {
    "url": "tag/跨域/index.html",
    "revision": "7943f9ff1c3f9aee663bf64e47814d94"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "903ea590e9314188e9075cbb17785808"
  },
  {
    "url": "timeline/index.html",
    "revision": "91b16a071a3180dac5c66958b50ee787"
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
