(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{582:function(t,a,s){"use strict";s.r(a);var e=s(10),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("其他一些Web攻击：iframe安全问题、点击劫持（Click Jacking）、CDN劫持、不安全的第三方依赖包、本地数据泄漏等")]),t._v(" "),s("h2",{attrs:{id:"_1-iframe安全与点击劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-iframe安全与点击劫持"}},[t._v("#")]),t._v(" 1 iframe安全与点击劫持")]),t._v(" "),s("h3",{attrs:{id:"_1-1-iframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-iframe"}},[t._v("#")]),t._v(" 1.1 iframe")]),t._v(" "),s("p",[t._v("利用"),s("code",[t._v("iframe")]),t._v("能够嵌入第三方页面，例如：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 800px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://www.weibo.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("iframe存在的安全问题是存在点击劫持（ClickJacking）：攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。")]),t._v(" "),s("p",[t._v("一个例子：")]),t._v(" "),s("ol",[s("li",[t._v("用户登录微博后，"),s("code",[t._v("weibo.com")]),t._v("的"),s("code",[t._v("cookies")]),t._v("里包含登录信息。")]),t._v(" "),s("li",[t._v("用户访问恶意页面（可能是点击了广告或者其他方式）；")]),t._v(" "),s("li",[t._v("恶意页面中嵌入了一个透明的 "),s("code",[t._v("<iframe>")]),t._v("，其 "),s("code",[t._v("src")]),t._v(" 来自于 "),s("code",[t._v("weibo.com")]),t._v("；")]),t._v(" "),s("li",[t._v("页面勾引用户点击了一个"),s("code",[t._v("<button>")]),t._v("，实际上用户点击的是覆盖来自"),s("code",[t._v("<iframe>")]),t._v("中的微博的点赞按钮👍；")])]),t._v(" "),s("h3",{attrs:{id:"_1-2-点击劫持的防御"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-点击劫持的防御"}},[t._v("#")]),t._v(" 1.2 点击劫持的防御")]),t._v(" "),s("ul",[s("li",[t._v("CSP（Content Security Policy，即内容安全策略）")]),t._v(" "),s("li",[t._v("X-Frame-Options")]),t._v(" "),s("li",[t._v("framekiller")])]),t._v(" "),s("p",[t._v("服务端通过设置 HTTP 响应头来声明 CSP 和"),s("code",[t._v("X-Frame-Options")]),t._v("，例如：")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不允许被嵌入，包括<frame>, <iframe>, <object>, <embed> 和 <applet>")]),t._v("\nContent-Security-Policy: frame-ancestors "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只允许被同源的页面嵌入")]),t._v("\nContent-Security-Policy: frame-ancestors "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'self'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只允许被白名单内的页面嵌入")]),t._v("\nContent-Security-Policy: frame-ancestors www.example.com\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 不允许被嵌入，包括<frame>, <iframe>, <embed> 和 <object>")]),t._v("\nX-Frame-Options: deny\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只允许被同源的页面嵌入")]),t._v("\nX-Frame-Options: sameorigin\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# （已废弃）只允许被白名单内的页面嵌入")]),t._v("\nX-Frame-Options: allow-from www.example.com\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"_2-cdn劫持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-cdn劫持"}},[t._v("#")]),t._v(" 2 CDN劫持")]),t._v(" "),s("p",[t._v("CDN（Content Delivery Network），即“内容分发网络”，是将源站内容分发至全国所有的节点，从而缩短用户查看对象的延迟，提高用户访问网站的响应速度与网站的可用性的技术。")]),t._v(" "),s("p",[t._v("其实，CDN本身就是一种DNS劫持，只不过是良性的。 不同于黑客强制DNS把域名解析到自己的钓鱼IP上，CDN则是让DNS主动配合，把域名解析到临近的服务器上。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/e08a803fae93",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("劫持通常分为两类")]),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("域名劫持，又称DNS劫持，通常是指域名指向到非正常IP（恶意IP），该恶意IP通过反向代理的方式，在能返回网页正常内容的情况，可能插入恶意代码、监听网民访问、劫持敏感信息等操作。通常验证一个域名是否被劫持的方法是PING一个域名，如果发现PING出来的IP不是您的服务器真实IP，则可以确定被劫持了（当然如果使用了某些安全加速平台，得到的IP为平台IP，并非劫持）")]),t._v(" "),s("li",[t._v("数据劫持，通常由电信运营商中某些员工等勾结犯罪分子，在公网中进行数据支持，插入，此类情况极隐蔽，不会改变用户域名解析IP，而是直接数据流经运营商宽带时在网页中挺入内容，此类情况，建议网页启用HTTPS加密，可以解决这一问题（通信是加密的，运营商无法插入恶意内容）")])]),t._v(" "),s("p",[t._v("还可以使用 "),s("strong",[t._v("SRI")]),t._v(" 解决CDN劫持：")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FSecurity%2F%E5%AD%90%E8%B5%84%E6%BA%90%E5%AE%8C%E6%95%B4%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[t._v("SRI"),s("OutboundLink")],1),t._v(" 全称 Subresource Integrity，子资源完整性，是指浏览器通过验证资源的完整性（通常从 CDN 获取）来判断其是否被篡改的安全特性。通过给 link 标签或者 script 标签增加 integrity 属性即可开启 SRI 功能，如：")]),t._v(" "),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//s.url.cn/xxxx/aaa.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("integrity")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("sha256-xxx sha384-yyy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("crossorigin")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("anonymous"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[t._v("integrity 值分成两个部分，第一部分指定哈希值的生成算法（sha256、sha384 及 sha512），第二部分是经过 base64 编码的实际哈希值，两者之间通过一个短横（-）分割。integrity 值可以包含多个由空格分隔的哈希值，只要文件匹配其中任意一个哈希值，就可以通过校验并加载该资源。")])]),t._v(" "),s("blockquote",[s("p",[t._v("备注："),s("code",[t._v('crossorigin="anonymous"')]),t._v(" 的作用是引入跨域脚本，在 HTML5 中有一种方式可以获取到跨域脚本的错误信息，首先跨域脚本的服务器必须通过 Access-Controll-Allow-Origin 头信息允许当前域名可以获取错误信息，然后是当前域名的 script 标签也必须声明支持跨域，也就是 crossorigin 属性。link、img 等标签均支持跨域脚本。如果上述两个条件无法满足的话， 可以使用 "),s("code",[t._v("try catch")]),t._v(" 方案。")])]),t._v(" "),s("p",[t._v("扩展阅读：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6844903757919027208",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用 SRI 解决 CDN 劫持"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.cn/post/6977204981384347661",target:"_blank",rel:"noopener noreferrer"}},[t._v("CDN劫持与SRI解决方案"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"_3-不安全的第三方依赖包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-不安全的第三方依赖包"}},[t._v("#")]),t._v(" 3 不安全的第三方依赖包")]),t._v(" "),s("p",[t._v("项目里面使用了很多第三方的依赖，不论应用自己的代码的安全性有多高，如果这些来自第三方的代码有安全漏洞，那么对应用整体的安全性依然会造成严峻的挑战。jQuery就存在多个已知安全漏洞，Node.js也有一些已知的安全漏洞。")]),t._v(" "),s("p",[s("strong",[t._v("第三方依赖包防御")]),t._v("：手动检查这些第三方代码有没有安全问题是个苦差事，主要是因为应用依赖的这些组件数量众多，手工检查太耗时，有自动化的工具可以使用，比如 NSP（Node Security Platform），Snyk、sonarQubej 检测工具等等。")])])}),[],!1,null,null,null);a.default=n.exports}}]);