(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{578:function(t,_,v){"use strict";v.r(_);var e=v(10),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("ol",[v("li")]),t._v(" "),v("h2",{attrs:{id:"_1-http"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-http"}},[t._v("#")]),t._v(" 1 HTTP")]),t._v(" "),v("h3",{attrs:{id:"_1-1-http头部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-http头部"}},[t._v("#")]),t._v(" 1.1 HTTP头部")]),t._v(" "),v("p",[t._v("HTTP 头部本质上是一个传递额外重要信息的键值对。主要分为："),v("strong",[t._v("通用头部")]),t._v("，"),v("strong",[t._v("请求头部")]),t._v("，"),v("strong",[t._v("响应头部")]),t._v("和"),v("strong",[t._v("实体头部")]),t._v("。")]),t._v(" "),v("h4",{attrs:{id:"_1-通用头部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-通用头部"}},[t._v("#")]),t._v(" （1）通用头部")]),t._v(" "),v("p",[t._v("通用头部是客户端和服务器都可以使用的头部，可以在客户端、服务器和其他应用程序之间提供一些非常有用的通用功能，如Date头部。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("协议头")]),t._v(" "),v("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),v("th",[t._v("举例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("Cache-Control")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("用来指定当前的请求/回复中是否使用缓存机制")]),t._v(" "),v("td",[t._v("Cache-Control: no-store")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("Connection")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("客户端（浏览器）想要优先使用的连接类型")]),t._v(" "),v("td",[t._v("Connection: keep-alive (Upgrade)")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("Date")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("报文创建时间")]),t._v(" "),v("td",[t._v("Date: Dec, 26 Dec 2015 17: 30: 00 GMT")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("Trailer")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("会实现说明在报文主体后记录哪些首部字段，该首部字段可以使用在 HTTP/1.1 版本分块传输编码时")]),t._v(" "),v("td",[t._v("Trailer: Expiress")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("Transfer-Encoding")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("用来改变报文格式")]),t._v(" "),v("td",[t._v("Transfer-Encoding: chunked")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("Upgrade")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("要求服务器升级到一个高版本协议")]),t._v(" "),v("td",[t._v("Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("Via")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("告诉服务器，这个请求是由哪些代理发出的")]),t._v(" "),v("td",[t._v("Via: 1.0 fred, 1.1 "),v("a",{attrs:{href:"https://leetcode-cn.com/link/?target=http://itbilu.com.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("itbilu.com.com"),v("OutboundLink")],1),t._v(" (Apache/1.1)")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("Warning")]),t._v(" "),v("td",{staticStyle:{"text-align":"left"}},[t._v("一个一般性的警告，表示在实体内容中可能存在错误")]),t._v(" "),v("td",[t._v("Warning: 199 Miscellaneous warning")])])])]),t._v(" "),v("h4",{attrs:{id:"_2-请求头部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-请求头部"}},[t._v("#")]),t._v(" （2）请求头部")]),t._v(" "),v("p",[t._v("是请求报文特有的，它们为服务器提供了一些额外信息，比如客户端希望接收什么类型的数据，如Accept头部。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("协议头")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("举例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Accept")]),t._v(" "),v("td",[t._v("告诉服务器自己允许哪些媒体类型")]),t._v(" "),v("td",[t._v("Accept: text/plain")])]),t._v(" "),v("tr",[v("td",[t._v("Accept-Charset")]),t._v(" "),v("td",[t._v("浏览器申明可接受的字符集")]),t._v(" "),v("td",[t._v("Accept-Charset: utf-8")])]),t._v(" "),v("tr",[v("td",[t._v("Accept-Encoding")]),t._v(" "),v("td",[t._v("浏览器申明自己接收的编码方法")]),t._v(" "),v("td",[t._v("Accept-Encoding: gzip, deflate")])]),t._v(" "),v("tr",[v("td",[t._v("Accept-Language")]),t._v(" "),v("td",[t._v("浏览器可接受的响应内容语言列表")]),t._v(" "),v("td",[t._v("Accept-Language: en-US")])]),t._v(" "),v("tr",[v("td",[t._v("Authorization")]),t._v(" "),v("td",[t._v("用于表示 HTTP 协议中需要认证资源的认证信息")]),t._v(" "),v("td",[t._v("Authorization: Basic OSdjJGRpbjpvcGVul ANIc2SdDE==")])]),t._v(" "),v("tr",[v("td",[t._v("Expect")]),t._v(" "),v("td",[t._v("表示客户端要求服务器做出特定的行为")]),t._v(" "),v("td",[t._v("Expect: 100-continue")])]),t._v(" "),v("tr",[v("td",[t._v("From")]),t._v(" "),v("td",[t._v("发起此请求的用户的邮件地址")]),t._v(" "),v("td",[t._v("From: user@itbilu.com")])]),t._v(" "),v("tr",[v("td",[t._v("Host")]),t._v(" "),v("td",[t._v("表示服务器的域名以及服务器所监听的端口号")]),t._v(" "),v("td",[t._v("Host: www.itbilu.com:80")])]),t._v(" "),v("tr",[v("td",[t._v("If-XXX")]),t._v(" "),v("td",[t._v("条件请求")]),t._v(" "),v("td",[t._v("If-Modified-Since: Dec, 26 Dec 2015 17:30:00 GMT")])]),t._v(" "),v("tr",[v("td",[t._v("Max-Forwards")]),t._v(" "),v("td",[t._v("限制该消息可被代理及网关转发的次数")]),t._v(" "),v("td",[t._v("Max-Forwards: 10")])]),t._v(" "),v("tr",[v("td",[t._v("Range")]),t._v(" "),v("td",[t._v("表示请求某个实体的一部分，字节偏移以 0 开始")]),t._v(" "),v("td",[t._v("Range: bytes=500-999")])]),t._v(" "),v("tr",[v("td",[t._v("Referer")]),t._v(" "),v("td",[t._v("表示浏览器所访问的前一个页面，可以认为是之前访问页面的链接将浏览器带到了当前页面")]),t._v(" "),v("td",[t._v("Referer: http://itbilu.com/nodejs")])]),t._v(" "),v("tr",[v("td",[t._v("User-Agent")]),t._v(" "),v("td",[t._v("浏览器的身份标识字符串")]),t._v(" "),v("td",[t._v("User-Agent: Mozilla/……")])])])]),t._v(" "),v("h4",{attrs:{id:"_3-响应头部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-响应头部"}},[t._v("#")]),t._v(" （3）响应头部")]),t._v(" "),v("p",[t._v("便于客户端提供信息，比如，客服端在与哪种类型的服务器进行交互，如Server头部。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("协议头")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("举例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Accept-Ranges")]),t._v(" "),v("td",[t._v("字段的值表示可用于定义范围的单位")]),t._v(" "),v("td",[t._v("Accept-Ranges: bytes")])]),t._v(" "),v("tr",[v("td",[t._v("Age")]),t._v(" "),v("td",[t._v("创建响应的时间")]),t._v(" "),v("td",[t._v("Age：5744337")])]),t._v(" "),v("tr",[v("td",[t._v("ETag")]),t._v(" "),v("td",[t._v("唯一标识分配的资源")]),t._v(" "),v("td",[t._v('Etag：W/"585cd998-7c0f"')])]),t._v(" "),v("tr",[v("td",[t._v("Location")]),t._v(" "),v("td",[t._v("表示重定向后的 URL")]),t._v(" "),v("td",[t._v("Location: http://www.zcmhi.com/archives/94.html")])]),t._v(" "),v("tr",[v("td",[t._v("Retry-After")]),t._v(" "),v("td",[t._v("告知客户端多久后再发送请求")]),t._v(" "),v("td",[t._v("Retry-After: 120")])]),t._v(" "),v("tr",[v("td",[t._v("Server")]),t._v(" "),v("td",[t._v("告知客户端服务器信息")]),t._v(" "),v("td",[t._v("Server: Apache/1.3.27 (Unix) (Red-Hat/Linux)")])]),t._v(" "),v("tr",[v("td",[t._v("Vary")]),t._v(" "),v("td",[t._v("缓存控制")]),t._v(" "),v("td",[t._v("Vary: Origin")])])])]),t._v(" "),v("h4",{attrs:{id:"_4-实体头部"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-实体头部"}},[t._v("#")]),t._v(" （4）实体头部")]),t._v(" "),v("p",[t._v("指的是用于应对实体主体部分的头部，比如，可以用实体头部来说明实体主体部分的数据类型，如Content-Type头部。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("协议头")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("举例")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Allow")]),t._v(" "),v("td",[t._v("对某网络资源的有效的请求行为，不允许则返回405")]),t._v(" "),v("td",[t._v("Allow: GET, HEAD")])]),t._v(" "),v("tr",[v("td",[t._v("Content-encoding")]),t._v(" "),v("td",[t._v("返回内容的编码方式")]),t._v(" "),v("td",[t._v("Content-Encoding: gzip")])]),t._v(" "),v("tr",[v("td",[t._v("Content-Length")]),t._v(" "),v("td",[t._v("返回内容的字节长度")]),t._v(" "),v("td",[t._v("Content-Length: 348")])]),t._v(" "),v("tr",[v("td",[t._v("Content-Language")]),t._v(" "),v("td",[t._v("响应体的语言")]),t._v(" "),v("td",[t._v("Content-Language: en,zh")])]),t._v(" "),v("tr",[v("td",[t._v("Content-Location")]),t._v(" "),v("td",[t._v("请求资源可替代的备用的另一地址")]),t._v(" "),v("td",[t._v("Content-Location: /index.htm")])]),t._v(" "),v("tr",[v("td",[t._v("Content-MD5")]),t._v(" "),v("td",[t._v("返回资源的MD5校验值")]),t._v(" "),v("td",[t._v("Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==")])]),t._v(" "),v("tr",[v("td",[t._v("Content-Range")]),t._v(" "),v("td",[t._v("在整个返回体中本部分的字节位置")]),t._v(" "),v("td",[t._v("Content-Range: bytes 21010-47021/47022")])]),t._v(" "),v("tr",[v("td",[t._v("Content-Type")]),t._v(" "),v("td",[t._v("返回内容的MIME类型")]),t._v(" "),v("td",[t._v("Content-Type: text/html; charset=utf-8")])]),t._v(" "),v("tr",[v("td",[t._v("Expires")]),t._v(" "),v("td",[t._v("响应过期的日期和时间")]),t._v(" "),v("td",[t._v("Expires: Thu, 01 Dec 2010 16:00:00 GMT")])]),t._v(" "),v("tr",[v("td",[t._v("Last-Modified")]),t._v(" "),v("td",[t._v("请求资源的最后修改时间")]),t._v(" "),v("td",[t._v("Last-Modified: Tue, 15 Nov 2010 12:45:26 GMT")])])])]),t._v(" "),v("h3",{attrs:{id:"_1-2-keep-alive"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-keep-alive"}},[t._v("#")]),t._v(" 1.2 keep-alive")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("早期的 HTTP/1.0 中，浏览器每次 发起 HTTP 请求都要与服务器创建一个新的 TCP 连接，服务器完成请求处理后立即断开 TCP 连接，服务器不跟踪每个客户也不记录过去的请求。")])]),t._v(" "),v("li",[v("p",[t._v("在 HTTP/1.1 版本中默认使用持久连接，在此之前的 HTTP 版本的默认连接都是使用非持久连接。")])]),t._v(" "),v("li",[v("p",[t._v("如果想要在旧版本的 HTTP 协议上维持持久连接，则需要指定 connection 的首部字段的值为 Keep-Alive 来告诉对方这个请求响应完成后不要关闭，下一次咱们还用这个请求继续交流。")])])]),t._v(" "),v("blockquote",[v("p",[t._v("创建和关闭连接的过程需要消耗资源和时间，为了减少资源消耗，缩短响应时间，就需要重用连接。")])]),t._v(" "),v("ul",[v("li",[t._v("对于非 Keep-Alive 来说，必须为每一个请求的对象建立和维护一个全新的连接。对于每一个这样的连接，客户机和服务器都要分配 TCP 的缓冲区和变量，这给服务器带来的严重的负担，因为一台 Web 服务器可能同时服务于数以百计的客户机请求。")]),t._v(" "),v("li",[t._v("在 Keep-Alive 方式下，服务器在响应后保持该 TCP 连接打开，在同一个客户机与服务器之间的后续请求和响应报文可通过相同的连接进行传送。甚至位于同一台服务器的多个 Web 页面在从该服务器发送给同一个客户机时，可以在单个持久 TCP 连接上进行。")]),t._v(" "),v("li",[t._v("但长时间的保持 TCP 连接时容易导致系统资源被无效占用，因此，可以"),v("strong",[t._v("设置 keep-alive timeout 参数，当 TCP 连接在传送完最后一个 HTTP 响应，该连接会保持 keepalive_timeout 秒，之后就开始关闭这个链接")]),t._v("。")])]),t._v(" "),v("h3",{attrs:{id:"_1-3-http-长连接短连接使用场景是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-http-长连接短连接使用场景是什么"}},[t._v("#")]),t._v(" 1.3 HTTP 长连接短连接使用场景是什么")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("长连接")]),t._v("：多用于操作频繁，点对点的通讯，而且客户端连接数目较少的情况。例如即时通讯、网络游戏等。")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("短连接")]),t._v("：用户数目较多的Web网站的 HTTP 服务一般用短连接。例如京东，淘宝这样的大型网站一般客户端数量达到千万级甚至上亿，若采用长连接势必会使得服务端大量的资源被无效占用，所以一般使用的是短连接。")])])]),t._v(" "),v("blockquote",[v("p",[t._v("扩展阅读："),v("a",{attrs:{href:"https://blog.csdn.net/luzhensmart/article/details/87186401",target:"_blank",rel:"noopener noreferrer"}},[t._v("http的长连接和短连接（史上最通俗！）以及应用场景"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=a.exports}}]);