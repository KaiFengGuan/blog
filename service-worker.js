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
    "revision": "33f503c2afa02ce2b8f831f1ac196f7b"
  },
  {
    "url": "assets/css/0.styles.897a38ad.css",
    "revision": "9e24e5f70662dad683881f7aa03e9aaf"
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
    "url": "assets/js/1.256a9752.js",
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
    "url": "assets/js/13.12aefcf5.js",
    "revision": "741303631ed6791c8d66357decf57e38"
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
    "url": "assets/js/19.1a75ac94.js",
    "revision": "cb5d21f6817bcc6d44ee94491a0579c3"
  },
  {
    "url": "assets/js/2.01cf6910.js",
    "revision": "afd6549d721e62ae136e3c01dd7ad68f"
  },
  {
    "url": "assets/js/20.1f399b98.js",
    "revision": "461e0b5786ff0f177aaaa364f00fe892"
  },
  {
    "url": "assets/js/21.c54f723e.js",
    "revision": "2083c391dc9bf872bbe8c42f8297e6d3"
  },
  {
    "url": "assets/js/22.25f42fc0.js",
    "revision": "336bf58ea729e60ed43171a40b2df212"
  },
  {
    "url": "assets/js/23.b8366167.js",
    "revision": "1de092a4f4fe0bf21586766dd0420778"
  },
  {
    "url": "assets/js/24.8530e607.js",
    "revision": "7234ad0068c5b8ffc7147b06f46984d6"
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
    "url": "assets/js/27.9014c77c.js",
    "revision": "9402bfe44f82b927fd3ab4e2ec806156"
  },
  {
    "url": "assets/js/28.425ee0a1.js",
    "revision": "e3592e101087ca25b6e4b1ee21622cbc"
  },
  {
    "url": "assets/js/29.c0fe18fd.js",
    "revision": "d83859c8fe9075483ebe3397baf4ea4d"
  },
  {
    "url": "assets/js/30.e87e9864.js",
    "revision": "2f4642bd09d00c874c7b0619271c2954"
  },
  {
    "url": "assets/js/31.90bd033c.js",
    "revision": "a11ed6614f7071c70d69890681f53e32"
  },
  {
    "url": "assets/js/32.651c6eb0.js",
    "revision": "52827fe8b451749176ecf5e4c21637f5"
  },
  {
    "url": "assets/js/33.ed9f7595.js",
    "revision": "c3fcf5113120adafeadb160bf92ee660"
  },
  {
    "url": "assets/js/34.9a278dec.js",
    "revision": "32874bc6dad199dcbe228abb9b5d53b1"
  },
  {
    "url": "assets/js/35.815ef7e2.js",
    "revision": "a9342b0e756a39762b4ba100b2353512"
  },
  {
    "url": "assets/js/36.4939110b.js",
    "revision": "1d5f5178132006a5e64fc69b7411ead3"
  },
  {
    "url": "assets/js/37.84d6ca5a.js",
    "revision": "ab7b506b720e80fdba31750fdd2f9db2"
  },
  {
    "url": "assets/js/38.07a8b9e9.js",
    "revision": "94964eabdff852c50d5dd6a8d2835e0b"
  },
  {
    "url": "assets/js/39.e318b56b.js",
    "revision": "e0efc5c44e278f9a7f37cdb51fbbd594"
  },
  {
    "url": "assets/js/4.972e4e07.js",
    "revision": "e06272b6e7ccb6d5d91203e4ac27db51"
  },
  {
    "url": "assets/js/40.f7aeb5e6.js",
    "revision": "a95d98a4dd31f09e24909c1ca5e66a0b"
  },
  {
    "url": "assets/js/41.00e50c91.js",
    "revision": "154bd6cde313046354c7e2c04876ae21"
  },
  {
    "url": "assets/js/42.20aa0fe7.js",
    "revision": "71eba2c7c92463ac976f9ed7958b1eaf"
  },
  {
    "url": "assets/js/43.a04baa87.js",
    "revision": "0f36ff4b767477062a33c4d3591d1d0b"
  },
  {
    "url": "assets/js/44.78d01aa2.js",
    "revision": "55c8c23a947c268e1ae7bb61b0369d9b"
  },
  {
    "url": "assets/js/45.a05c763e.js",
    "revision": "5074b3743ef024f85aae09fd0e04353a"
  },
  {
    "url": "assets/js/46.1166c0c7.js",
    "revision": "606b84bf6753515fa6567e350bf2e241"
  },
  {
    "url": "assets/js/47.c85d3a6d.js",
    "revision": "afa7517f3b528afdf95ed501e02f9ab4"
  },
  {
    "url": "assets/js/48.891da282.js",
    "revision": "34b6f398104428f75ce483052492e488"
  },
  {
    "url": "assets/js/49.f89e97e1.js",
    "revision": "a1e40278e9ff2e4a48f4253c1ac9d3b7"
  },
  {
    "url": "assets/js/5.b9ef644c.js",
    "revision": "16444478b385c89dc8c9a45dc48364f2"
  },
  {
    "url": "assets/js/50.a82635eb.js",
    "revision": "6bd56f37f198dc029f5250e4b247f7c8"
  },
  {
    "url": "assets/js/51.bba5f0f1.js",
    "revision": "89fb5b7f6492fb19d51fe28ed303c8fa"
  },
  {
    "url": "assets/js/52.3450f917.js",
    "revision": "49dbfc9bdd2a75d3cb204676ef623dce"
  },
  {
    "url": "assets/js/53.76f3c0bc.js",
    "revision": "33bda4dfbd31153080f04354f4430478"
  },
  {
    "url": "assets/js/54.65f91ae5.js",
    "revision": "035446a5919178fa211c91217e08012d"
  },
  {
    "url": "assets/js/55.b5744504.js",
    "revision": "d911a10da52fdbd2ae1920790720c310"
  },
  {
    "url": "assets/js/56.54654707.js",
    "revision": "a7a2902b113166c934f1cbc049dd883a"
  },
  {
    "url": "assets/js/57.8dbb8c82.js",
    "revision": "9c03b2aec5fb9a1162d479acdf2227ba"
  },
  {
    "url": "assets/js/58.c82606ec.js",
    "revision": "2be069bdcaa013b3a61e1f47ffde6684"
  },
  {
    "url": "assets/js/59.fd78f07b.js",
    "revision": "2fd1344e20c4c70a5ac44e8a3204bf79"
  },
  {
    "url": "assets/js/6.f2686919.js",
    "revision": "8b9d4e456b36121dcb9c86840a5bf792"
  },
  {
    "url": "assets/js/60.1b90b23b.js",
    "revision": "67c763d098bbe9e4d34abc64aa913ed5"
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
    "url": "assets/js/63.98f61611.js",
    "revision": "34ce4b2703e86b1caec052cb4fbde91b"
  },
  {
    "url": "assets/js/64.8b992ac9.js",
    "revision": "b125b64f658cdc520178da8ff006d76b"
  },
  {
    "url": "assets/js/65.29616866.js",
    "revision": "51b74e27b87dc8f485c76399782f7aa5"
  },
  {
    "url": "assets/js/66.5102bb6c.js",
    "revision": "c0148a35df1483eb45a59c7bd4904f3d"
  },
  {
    "url": "assets/js/67.7ecadc16.js",
    "revision": "1f2551aa1341d6c7e22e392db92a77f8"
  },
  {
    "url": "assets/js/68.93d75338.js",
    "revision": "9f43817f68b469b39b861a98d4841fd4"
  },
  {
    "url": "assets/js/69.c8546f65.js",
    "revision": "69491a436ee454baa20b4435d1cf1c77"
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
    "url": "assets/js/app.98a627a3.js",
    "revision": "20e41f4745f77761394faac8d7a71d68"
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
    "revision": "1b64f6bc40cb45264b67de25bdcebbb4"
  },
  {
    "url": "categories/Computer/index.html",
    "revision": "e0fb63e41827705128b329b1b2a7521f"
  },
  {
    "url": "categories/Engineering/index.html",
    "revision": "4a2b51fe68b54cd507e43c8118dbc058"
  },
  {
    "url": "categories/HTML_CSS/index.html",
    "revision": "dad580fd59f584bdacc6dff1e69eac31"
  },
  {
    "url": "categories/index.html",
    "revision": "aa7aa88663edd2b0fca5bde0d08ff049"
  },
  {
    "url": "categories/JavaScript/index.html",
    "revision": "bf5c32a10b619a30d3559b8a3e75b6a7"
  },
  {
    "url": "categories/JavaScript/page/2/index.html",
    "revision": "d24a8989b6bb426f0698070937cc7e55"
  },
  {
    "url": "categories/Other/index.html",
    "revision": "885b3650cea8a97229eede64da7072b3"
  },
  {
    "url": "categories/TypeScript/index.html",
    "revision": "c897799e84d039750cc247c98e4ec49a"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "6caa5dda88ffb716df32272becace6ba"
  },
  {
    "url": "docs/browser/01_same_origin_policy.html",
    "revision": "807ffda7c0b56f12afc636f58175e013"
  },
  {
    "url": "docs/browser/02_url_to_page.html",
    "revision": "0a5fec124d235f214639b807edc8d529"
  },
  {
    "url": "docs/browser/03_process_and_thread.html",
    "revision": "d2e8eb099c51f28be71d3b71091b35f5"
  },
  {
    "url": "docs/computer/algorithm_01_sorting_algorithm.html",
    "revision": "126868f99e8a4a960ba0954573e879cd"
  },
  {
    "url": "docs/computer/git_01_common_commands.html",
    "revision": "6063c5b68e253f74f4275f4ed5f4e1ce"
  },
  {
    "url": "docs/computer/network_01_protocol_level.html",
    "revision": "0d08fbd8795e24bd8061fef76085dc23"
  },
  {
    "url": "docs/computer/network_02_application_layer.html",
    "revision": "912ae75a30b9a4151310a68fab801d1f"
  },
  {
    "url": "docs/computer/network_03_http.html",
    "revision": "2da5d80fd8aea24871b9e9653fbd7dff"
  },
  {
    "url": "docs/computer/network_04_tcp.html",
    "revision": "838feefa43dc8179ad93da44014897f1"
  },
  {
    "url": "docs/computer/security_01_xss.html",
    "revision": "75b39590b20ecb66134f9087202f7fab"
  },
  {
    "url": "docs/computer/security_02_csrf.html",
    "revision": "0267e096a6f9e59229d2d45c787acf9e"
  },
  {
    "url": "docs/computer/security_03_other_security.html",
    "revision": "15f6a083a643bc17b653e9841d145e0f"
  },
  {
    "url": "docs/computer/sql_01_learning_my_sql.html",
    "revision": "9efe3631e4c302c5b541d840b558795c"
  },
  {
    "url": "docs/engineering/engineering_01_what_is_engineering.html",
    "revision": "9c3b83341c6409a909c50104e780e0d0"
  },
  {
    "url": "docs/engineering/engineering_02_authorization.html",
    "revision": "c412fb20834e4a344d6e9c30d19f7d51"
  },
  {
    "url": "docs/engineering/optimization_01_performance.html",
    "revision": "86b5642f61d74bbe9ce0260e26c72a50"
  },
  {
    "url": "docs/engineering/webpack_01_webpack_in_project.html",
    "revision": "771f902e395efd92708dbe28fc0b3639"
  },
  {
    "url": "docs/html_css/css_01_basics.html",
    "revision": "b622a7c9eec29d75e2ec0ca2ca6c82a9"
  },
  {
    "url": "docs/html_css/css_02_box_and_context.html",
    "revision": "2e45f25ecfc9e8be0de8ede6d35e21bd"
  },
  {
    "url": "docs/html_css/css_03_value_and_unit.html",
    "revision": "84ff859a8182392e87d7dd3adc11ab56"
  },
  {
    "url": "docs/html_css/css_04_common_layout.html",
    "revision": "5007e5502ab9136d1b4b3ee02ad7ada4"
  },
  {
    "url": "docs/html_css/css_05_common_property.html",
    "revision": "ed8dd6c6979bdf30a259fb5395780a29"
  },
  {
    "url": "docs/html_css/css_10_float_and_position.html",
    "revision": "4f5ff0f5b7ff23ad062279fc3dcb5e4b"
  },
  {
    "url": "docs/html_css/css_11_preprocessor.html",
    "revision": "6d0b30b4b61bc4d837bb96f132e2490a"
  },
  {
    "url": "docs/html_css/html_01_basics.html",
    "revision": "db7f83dccad18e194b676ca4ada8c538"
  },
  {
    "url": "docs/javascript/es6_01_proxy.html",
    "revision": "fc6679ecc534b89067a02038e69b5f27"
  },
  {
    "url": "docs/javascript/es6_02_reflect.html",
    "revision": "3e62e1be5a122d8bb88d38cf4a768d4d"
  },
  {
    "url": "docs/javascript/es6_03_symbol.html",
    "revision": "c0645c48e99b71090b8b1c6eb483c118"
  },
  {
    "url": "docs/javascript/handwritten_01_basics.html",
    "revision": "d35d09132024eb4e4a1c4e87d1b2dfab"
  },
  {
    "url": "docs/javascript/handwritten_02_promise.html",
    "revision": "260136fa18663df6b7cdab2466ee69da"
  },
  {
    "url": "docs/javascript/handwritten_03_ajax.html",
    "revision": "3370e37c8ae62eede35c36cef951fcad"
  },
  {
    "url": "docs/javascript/javascript_01_environment.html",
    "revision": "d5aaa9f950231a1cdb997b4791f497ca"
  },
  {
    "url": "docs/javascript/javascript_02_type_conversion.html",
    "revision": "0c1e7f970c7c64dd6ddb105ea7d0235c"
  },
  {
    "url": "docs/javascript/javascript_03_context_and_scope.html",
    "revision": "b8976ac99d5889331a2f962de8570be3"
  },
  {
    "url": "docs/javascript/javascript_04_closure.html",
    "revision": "bff12bfd3532cd7d7c93a577424ac155"
  },
  {
    "url": "docs/javascript/javascript_05_object_oriented.html",
    "revision": "12f2de9f957404505e4dbcb993839de9"
  },
  {
    "url": "docs/javascript/javascript_06_memory_management.html",
    "revision": "c8369951140958f11dec1a701bdfb86f"
  },
  {
    "url": "docs/javascript/javascript_07_asynchronous_programming.html",
    "revision": "0b5d47812f323194e91ce9dc774aeee6"
  },
  {
    "url": "docs/javascript/javascript_08_data_type_detection.html",
    "revision": "3b48774b0a38eb35220eda38f335dc0c"
  },
  {
    "url": "docs/javascript/javascript_09_regular_expression.html",
    "revision": "1b19cefa3178cc5c20c5805c1bfc5087"
  },
  {
    "url": "docs/other/interview_01_interview_experience.html",
    "revision": "90fd463ad5dc5fb5ce61874c07c9f4d5"
  },
  {
    "url": "docs/other/interview_02_id_x4esh7nnukh7.html",
    "revision": "1680c659cb43685819a86f936c02ffe3"
  },
  {
    "url": "docs/other/other_01_using_vuepress.html",
    "revision": "48e141c287af3386442596e7c8ca09a5"
  },
  {
    "url": "docs/typescript/typescript_01_basics.html",
    "revision": "1595281d14f79160aa0a7406f305ee0d"
  },
  {
    "url": "docs/typescript/typescript_02_advanced_type.html",
    "revision": "9566c710a91f5af78ad186235eab089b"
  },
  {
    "url": "docs/typescript/typescript_03_generics.html",
    "revision": "838e7c11e1dd9043a89889da94bed60c"
  },
  {
    "url": "docs/typescript/typescript_04_overload_override.html",
    "revision": "8d09b43f2a473c1b6fb3c714834e3063"
  },
  {
    "url": "docs/vue/vue2_01_basics_1.html",
    "revision": "9e9ce24e07ab9f95eb2a1640cd7d8363"
  },
  {
    "url": "docs/vue/vue2_02_basics_2.html",
    "revision": "e97289dd02e782d7d9e004a5d6ad599f"
  },
  {
    "url": "docs/vue/vue2_03_router_navigation_guards.html",
    "revision": "d5b8d4bf7ce06df6aacb93163d55ecd1"
  },
  {
    "url": "docs/vue/vue2_04_interview_questions.html",
    "revision": "2e60b58be6332cc65b353373095e5dc5"
  },
  {
    "url": "docs/vue/vue2sourcecode_02_init.html",
    "revision": "9f56009887543a8cae89aa4f03003272"
  },
  {
    "url": "docs/vue/vue2sourcecode_03_reactive.html",
    "revision": "418a92d526260b29a66c246044956177"
  },
  {
    "url": "docs/vue/vue2sourcecode_04_async_update.html",
    "revision": "5b4b8585f186b616349c456be9603a6a"
  },
  {
    "url": "docs/vue/vue2sourcecode_05_mount_and_patch.html",
    "revision": "e78ebc0513d225bbbba1a53be2eec443"
  },
  {
    "url": "docs/vue/vue2sourcecode_06_template_parsing.html",
    "revision": "ecccfd6d25dc37e4960905ba04147de7"
  },
  {
    "url": "docs/vue/vue3_01_new_feature.html",
    "revision": "bca9fd687c421e254a9f5a0c41ef0ae4"
  },
  {
    "url": "favorites/index.html",
    "revision": "255827abec3a2ee422ec2030bfc81516"
  },
  {
    "url": "index.html",
    "revision": "84b51f3dfad6396da8bb3b96c4347576"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "72989485086944a901428120432c2590"
  },
  {
    "url": "tag/ES6/index.html",
    "revision": "9b22ea48882899d9a637ad148c263e33"
  },
  {
    "url": "tag/git/index.html",
    "revision": "fe958421ce0ba820b1117777e6e6e831"
  },
  {
    "url": "tag/HTML/index.html",
    "revision": "f1ab821873d320165471f6a2dece7eb3"
  },
  {
    "url": "tag/index.html",
    "revision": "43d162a8015080681fc700ec2c5a5d42"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "b306a2f18c8a7ac9035aecaf0ad01be2"
  },
  {
    "url": "tag/JavaScript/page/2/index.html",
    "revision": "c81eeaff44ec6971a5b42f0a4e85469b"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "b95fa3df6b85f05d93845a954bbfc5c9"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "edd7f457364e1de2589a57f12b5b6a51"
  },
  {
    "url": "tag/Vue2/index.html",
    "revision": "66a011197ddf5be1c059fc7fbad7b091"
  },
  {
    "url": "tag/Vue3/index.html",
    "revision": "1bc45f001fd2b39de6043d3db2b66f53"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "41939a387cdec98672658495f8ab5587"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "88ec2a78acee4bc11cd63d56b2b2ecec"
  },
  {
    "url": "tag/Web安全/index.html",
    "revision": "326cf579d5fdb53d0ea8066fe860e6fa"
  },
  {
    "url": "tag/前端工程化/index.html",
    "revision": "cc00dd39bf4046bc37ec9641eeabb9a6"
  },
  {
    "url": "tag/同源策略/index.html",
    "revision": "decc9873dd1a3ca7c7cebd82268d9b30"
  },
  {
    "url": "tag/异步编程/index.html",
    "revision": "024c37d58dbdc63584bd7f73ab602125"
  },
  {
    "url": "tag/性能优化/index.html",
    "revision": "c5b18e76ffefeff52a0557cc4628adcc"
  },
  {
    "url": "tag/手撕/index.html",
    "revision": "30dbdf1dc67d36f835352943ece6e42b"
  },
  {
    "url": "tag/正则表达式/index.html",
    "revision": "1cbf470aa56e5ffad8b20e68510fb78e"
  },
  {
    "url": "tag/浏览器/index.html",
    "revision": "4e3b02c58eb621d5649f1bf2b9be1002"
  },
  {
    "url": "tag/浏览器原理/index.html",
    "revision": "9c58cb9a55e8edc986071c96eba91ec5"
  },
  {
    "url": "tag/源码/index.html",
    "revision": "aaf24f015e2f0ff4e00ed77e11ce4bec"
  },
  {
    "url": "tag/登录/index.html",
    "revision": "7f2c06347146a96b79765943a0d8c1cd"
  },
  {
    "url": "tag/笔记/index.html",
    "revision": "68dac211cebf10729affd91391e092b3"
  },
  {
    "url": "tag/算法/index.html",
    "revision": "43a66f6d891c07e02e64b1ff35edc7c8"
  },
  {
    "url": "tag/计算机网络/index.html",
    "revision": "19d1692005201ce3a05d88ca739bad70"
  },
  {
    "url": "tag/跨域/index.html",
    "revision": "67c004f13aa1eddc588a7009a61140a1"
  },
  {
    "url": "tag/面经/index.html",
    "revision": "d91de00ea7872c6571b6f4bf01477153"
  },
  {
    "url": "timeline/index.html",
    "revision": "f6c77cbc06866197b28777e47299339a"
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
