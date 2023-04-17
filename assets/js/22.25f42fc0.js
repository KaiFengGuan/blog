(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{580:function(_,v,t){"use strict";t.r(v);var r=t(10),s=Object(r.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("内容概览：")]),_._v(" "),t("ul",[t("li",[_._v("TCP基本知识")]),_._v(" "),t("li",[_._v("TCP三次握手与四次挥手")]),_._v(" "),t("li",[_._v("流量控制与拥塞控制")])]),_._v(" "),t("h2",{attrs:{id:"tcp基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp基础"}},[_._v("#")]),_._v(" TCP基础")]),_._v(" "),t("p",[_._v("TCP 是"),t("strong",[_._v("面向连接的、可靠的、基于字节流")]),_._v("的传输层通信协议。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("面向连接")]),_._v("：一定是「一对一」才能连接，不能像 UDP 协议可以一个主机同时向多个主机发送消息，也就是一对多是无法做到的；")]),_._v(" "),t("li",[t("strong",[_._v("可靠的")]),_._v("：无论的网络链路中出现了怎样的链路变化，TCP 都可以保证一个报文一定能够到达接收端；")]),_._v(" "),t("li",[t("strong",[_._v("字节流")]),_._v("：用户消息通过 TCP 协议传输时，消息可能会被操作系统「分组」成多个的 TCP 报文，如果接收方的程序如果不知道「消息的边界」，是无法读出一个有效的用户消息的。并且 TCP 报文是「有序的」，当「前一个」TCP 报文没有收到的时候，即使它先收到了后面的 TCP 报文，那么也不能扔给应用层去处理，同时对「重复」的 TCP 报文会自动丢弃。")])]),_._v(" "),t("p",[_._v("TCP工作在传输层，能确保接收端接收的网络包是"),t("strong",[_._v("无损坏、无间隔、非冗余和按序的")]),_._v("。")]),_._v(" "),t("p",[_._v("TCP 四元组（源地址、源端口、目的地址、目的端口）可以唯一的确定一个连接：")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("源地址和目的地址的字段（32位）是在 IP 头部中，作用是通过 IP 协议发送报文给对方主机。")])]),_._v(" "),t("li",[t("p",[_._v("源端口和目的端口的字段（16位）是在 TCP 头部中，作用是告诉 TCP 协议应该把报文发给哪个进程。")])])]),_._v(" "),t("h2",{attrs:{id:"tcp与udp的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp与udp的区别"}},[_._v("#")]),_._v(" TCP与UDP的区别")]),_._v(" "),t("p",[_._v("UDP 不提供复杂的控制机制，利用 IP 提供面向「无连接」的通信服务。")]),_._v(" "),t("p",[_._v("TCP与UDP的区别是：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th"),_._v(" "),t("th",[_._v("TCP")]),_._v(" "),t("th",[_._v("UDP")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("strong",[_._v("连接")])]),_._v(" "),t("td",[_._v("面向连接的传输层协议，传输数据前先要建立连接")]),_._v(" "),t("td",[_._v("不需要连接，即刻传输数据")])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("可靠性")])]),_._v(" "),t("td",[_._v("可靠交付数据，数据可以无差错、不丢失、不重复、按需到达")]),_._v(" "),t("td",[_._v("尽最大努力交付，不保证可靠交付数据")])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("传输方式")])]),_._v(" "),t("td",[_._v("流式传输，没有边界，但保证顺序和可靠")]),_._v(" "),t("td",[_._v("一个包一个包的发送，是有边界的，但可能会丢包和乱序")])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("服务对象")])]),_._v(" "),t("td",[_._v("一对一的两点服务，即一条连接只有两个端点")]),_._v(" "),t("td",[_._v("支持一对一、一对多、多对多的交互通信")])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("控制机制")])]),_._v(" "),t("td",[_._v("有拥塞控制和流量控制机制，保证数据传输的安全性")]),_._v(" "),t("td",[_._v("没有，即使网络拥堵也不影响发送速率")])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("首部开销")])]),_._v(" "),t("td",[_._v("首部长度较长，会有一定的开销（没有使用选项时20字节，使用了则更长）")]),_._v(" "),t("td",[_._v("只有 8 个字节，并且是固定不变的，开销较小")])]),_._v(" "),t("tr",[t("td",[t("strong",[_._v("分片不同")])]),_._v(" "),t("td",[_._v("数据大小如果大于 MSS 大小，则会在传输层进行分片；"),t("br"),_._v("目标主机在传输层组装；"),t("br"),_._v("丢失则重传丢失的分片")]),_._v(" "),t("td",[_._v("数据大小如果大于MTU大小，则会在IP层分片；"),t("br"),_._v("目标主机收到后，在 IP 层组装完数据，接着再传给传输层。")])])])]),_._v(" "),t("p",[_._v("应用场景：")]),_._v(" "),t("ul",[t("li",[_._v("TCP面向连接，能保证数据的可靠性交付：\n"),t("ul",[t("li",[t("code",[_._v("FTP")]),_._v(" 文件传输；")]),_._v(" "),t("li",[_._v("HTTP / HTTPS；")])])]),_._v(" "),t("li",[_._v("UDP 面向无连接，它可以随时发送数据，再加上UDP本身的处理既简单又高效：\n"),t("ul",[t("li",[_._v("包总量较少的通信，如 "),t("code",[_._v("DNS")]),_._v(" 、"),t("code",[_._v("SNMP")]),_._v(" 等；")]),_._v(" "),t("li",[_._v("视频、音频等多媒体通信；")]),_._v(" "),t("li",[_._v("广播通信；")])])])]),_._v(" "),t("h2",{attrs:{id:"tcp头部格式包含什么内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp头部格式包含什么内容"}},[_._v("#")]),_._v(" TCP头部格式包含什么内容")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("序列号")]),_._v("：在建立连接时由计算机生成的随机数作为其初始值，通过 SYN 包传给接收端主机，每发送一次数据，就「累加」一次该「数据字节数」的大小。"),t("strong",[_._v("用来解决网络包乱序问题。")])]),_._v(" "),t("li",[t("strong",[_._v("确认应答号")]),_._v("：指下一次「期望」收到的数据的序列号，发送端收到这个确认应答以后可以认为在这个序号以前的数据都已经被正常接收。"),t("strong",[_._v("用来解决丢包的问题。")])]),_._v(" "),t("li",[_._v("**控制位：**SYN（建立连接）、ACK（确认应答）、FIN（断开连接）、RST（强制断开连接）")])]),_._v(" "),t("h2",{attrs:{id:"tcp三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手"}},[_._v("#")]),_._v(" TCP三次握手")]),_._v(" "),t("img",{staticStyle:{zoom:"40%"},attrs:{src:"https://raw.githubusercontent.com/KaiFengGuan/imgs/main/202206131507762.png"}}),_._v(" "),t("ul",[t("li",[_._v("一开始，客户端和服务端都处于 "),t("code",[_._v("CLOSED")]),_._v(" 状态。先是服务端主动监听某个端口，处于 "),t("code",[_._v("LISTEN")]),_._v(" 状态")]),_._v(" "),t("li",[t("strong",[_._v("第一次握手")]),_._v("：客户端随机初始化序号（"),t("code",[_._v("client_isn")]),_._v("），同时把 SYN 标志位置为 1 ，接着把第一个 SYN 报文发送给服务端，发起连接（不包含应用层数据），客户端处于 SYN-SENT 状态；")]),_._v(" "),t("li",[t("strong",[_._v("第二次握手")]),_._v("：服务端随机初始化自己的序号（"),t("code",[_._v("server_isn")]),_._v("），把「确认应答号」字段填入 "),t("code",[_._v("client_isn + 1")]),_._v("，同时把 SYN 和 ACK 标志位置为 1。返回报文给客户端（不包含应用层数据），服务端处于 SYN-RCVD 状态；")]),_._v(" "),t("li",[t("strong",[_._v("第三次握手")]),_._v("：客户端向服务端回应最后一个应答报文， ACK 标志位置为 1 ，「确认应答号」字段填入 "),t("code",[_._v("server_isn + 1")]),_._v(" ，发送给服务端（可带数据），客户端处于 ESTABLISHED 状态。")])]),_._v(" "),t("h2",{attrs:{id:"为什么是三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么是三次握手"}},[_._v("#")]),_._v(" 为什么是三次握手？")]),_._v(" "),t("p",[_._v("为什么是三次握手？不是两次、四次？")]),_._v(" "),t("ul",[t("li",[_._v("三次握手能"),t("strong",[_._v("保证双方具有接收和发送的能力")]),_._v("。")]),_._v(" "),t("li",[_._v("三次握手才可以"),t("strong",[_._v("阻止重复历史连接的初始化")]),_._v("（主要原因）\n"),t("ul",[t("li",[_._v("在三次握手的情况下，如果网络拥堵导致旧报文比新报文早到达服务端，服务端返回 "),t("code",[_._v("SYN + ACK")]),_._v(" 给客户端；客户端根据自身上下文判断这是一个历史连接（序列号过期或超时），那么客户端就会发送 RST 报文给服务端，表示中止这一次连接。")]),_._v(" "),t("li",[_._v("如果仅有两次握手，服务端没有中间状态给客户端来组织历史连接，这样会导致服务端在第二次握手后就立即建立一个历史连接，造成资源浪费。")])])]),_._v(" "),t("li",[_._v("三次握手才可以"),t("strong",[_._v("同步双方的初始序列号")]),_._v(" "),t("ul",[t("li",[_._v("序列号是可靠传输的一个关键因素：可以去除重复数据、使得接收方按序接收、发送方根据ACK报文确认哪些被接受等；")]),_._v(" "),t("li",[_._v("四次握手也可以同步双方序列号，但此时第二第三次可以合并为一次")])])]),_._v(" "),t("li",[_._v("三次握手才可以"),t("strong",[_._v("避免资源浪费")]),_._v(" "),t("ul",[t("li",[_._v("如果只有两次握手，服务端每收到一个SYN信号都建立一个连接；假设网络阻塞了，客户端重传了许多SYN报文，那么就会建立很多冗余的无效连接，造成不必要的资源浪费。")])])])]),_._v(" "),t("h2",{attrs:{id:"tcp四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp四次挥手"}},[_._v("#")]),_._v(" TCP四次挥手")]),_._v(" "),t("p",[_._v("双方都可以主动断开连接，断开连接后主机中的「资源」将被释放，四次挥手的过程如下图：")]),_._v(" "),t("img",{staticStyle:{zoom:"60%"},attrs:{src:"https://raw.githubusercontent.com/KaiFengGuan/imgs/main/202206141452457.png"}}),_._v(" "),t("ul",[t("li",[t("strong",[_._v("第一次挥手")]),_._v("：客户端打算关闭连接，此时会发送FIN报文， FIN 标志位为 1，客户端进入 "),t("code",[_._v("FIN_WAIT_1")]),_._v(" 状态。")]),_._v(" "),t("li",[t("strong",[_._v("第二次挥手")]),_._v("：服务端收到后就向客户端发送 "),t("code",[_._v("ACK")]),_._v(" 应答报文，服务端进入 "),t("code",[_._v("CLOSED_WAIT")]),_._v(" 状态；客户端收到服务端的 "),t("code",[_._v("ACK")]),_._v(" 应答报文后进入 "),t("code",[_._v("FIN_WAIT_2")]),_._v(" 状态。")]),_._v(" "),t("li",[t("strong",[_._v("第三次挥手")]),_._v("：等待服务端处理完数据后，也向客户端发送 FIN 报文，之后服务端进入 "),t("code",[_._v("LAST_ACK")]),_._v(" 状态。")]),_._v(" "),t("li",[t("strong",[_._v("第四次挥手")]),_._v("：客户端收到服务端的 FIN 报文后，回一个 ACK 应答报文，之后进入 "),t("code",[_._v("TIME_WAIT")]),_._v(" 状态；服务器收到后进入 "),t("code",[_._v("CLOSED")]),_._v(" 状态，服务器连接关闭；客户端过了 "),t("code",[_._v("2MSL")]),_._v(" 后，自动进入  "),t("code",[_._v("CLOSED")]),_._v(" 状态，客户端连接关闭。")])]),_._v(" "),t("blockquote",[t("p",[t("strong",[_._v("主动关闭连接的，才有 TIME_WAIT 状态。")])])]),_._v(" "),t("h2",{attrs:{id:"为什么需要四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要四次挥手"}},[_._v("#")]),_._v(" 为什么需要四次挥手？")]),_._v(" "),t("ul",[t("li",[_._v("关闭连接时，客户端向服务端发送 "),t("code",[_._v("FIN")]),_._v(" 时，仅仅表示客户端不再发送数据了但是还能接收数据。")]),_._v(" "),t("li",[_._v("服务器收到客户端的 "),t("code",[_._v("FIN")]),_._v(" 报文时，先回一个 "),t("code",[_._v("ACK")]),_._v(" 应答报文，而服务端可能还有数据需要处理和发送。")]),_._v(" "),t("li",[_._v("等服务端不再发送数据时，才发送 "),t("code",[_._v("FIN")]),_._v(" 报文给客户端来表示同意现在关闭连接。")])]),_._v(" "),t("h2",{attrs:{id:"为什么需要-time-wait-状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要-time-wait-状态"}},[_._v("#")]),_._v(" 为什么需要 TIME_WAIT 状态？")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("防止历史连接中的数据，被后面相同四元组的连接错误的接收")]),_._v("：\n"),t("ul",[t("li",[_._v("序列号会存在回绕问题，假设 TIME_WAIT 过短或没有，如果服务端在关闭连接之前发送的报文被网络延迟了，接着，服务端以相同的四元组重新打开了新连接，此时被延迟的报文到达了客户端，而序列号恰好在客户端的窗口内，则会错误地接受这个报文。")]),_._v(" "),t("li",[_._v("为了解决这个问题，TIME_WAIT 的时长为 2MSL，这个时间"),t("strong",[_._v("足以让两个方向上的数据包都被丢弃，使得原来连接的数据包在网络中都自然消失，再出现的数据包一定都是新建立连接所产生的")]),_._v("。")])])]),_._v(" "),t("li",[t("strong",[_._v("保证「被动关闭连接」的一方，能被正确的关闭")]),_._v("：\n"),t("ul",[t("li",[_._v("假设客户端没有 TIME_WAIT 状态，而是在发完最后一次回 ACK 报文就直接进入 CLOSED 状态，如果该 ACK 报文丢失了，服务端则重传的 FIN 报文，而这时客户端已经进入到关闭状态了，在收到服务端重传的 FIN 报文后，就会回 RST 报文。")]),_._v(" "),t("li",[_._v("服务端收到这个 RST 并将其解释为一个错误（Connection reset by peer），这对于一个可靠的协议来说不是一个优雅的终止方式。")])])])]),_._v(" "),t("h2",{attrs:{id:"tcp的重传机制是怎么做的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp的重传机制是怎么做的"}},[_._v("#")]),_._v(" TCP的重传机制是怎么做的？")]),_._v(" "),t("p",[_._v("TCP 针对数据包丢失的情况，会用"),t("strong",[_._v("重传机制")]),_._v("解决，主要有几个方式：超时重传、快速重传、SACK、D-SACK。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("超时重传")]),_._v("：当数据包丢失或者确认应答丢失会发生超时重传。超时重传时间RTO略大于包往返时间RTT。每当遇到一次超时重传的时候，都会将下一次超时时间间隔设为"),t("strong",[_._v("先前值的两倍")]),_._v("。两次超时，就说明网络环境差，不宜频繁反复发送。另外，RTO是动态变化的，有自己的计算公式。")]),_._v(" "),t("li",[t("strong",[_._v("快速重传")]),_._v("：不以时间为驱动，而是"),t("strong",[_._v("以数据驱动重传")]),_._v("。工作方式是当收到三个相同的 ACK 报文时，会在定时器过期之前，重传丢失的报文段。")]),_._v(" "),t("li",[t("strong",[_._v("SACK")]),_._v("：SACK是选择性确认，TCP头部中增加SACK字段告诉发送方哪些数据收到了，这样可以只重传丢失的数据。")]),_._v(" "),t("li",[t("strong",[_._v("Duplicate-SACK")]),_._v("："),t("a",{attrs:{href:"https://xiaolincoding.com/network/3_tcp/tcp_feature.html#duplicate-sack",target:"_blank",rel:"noopener noreferrer"}},[_._v("告诉「发送方」有哪些数据被重复接收了"),t("OutboundLink")],1),_._v("。")])]),_._v(" "),t("h2",{attrs:{id:"tcp滑动窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp滑动窗口"}},[_._v("#")]),_._v(" TCP滑动窗口")]),_._v(" "),t("p",[_._v("为了解决数据包的"),t("strong",[_._v("往返时间越长，通信的效率就越低")]),_._v("的问题，TCP引入滑动窗口，在操作系统开辟的一个缓存空间，发送方主机在等到确认应答返回之前，必须在缓冲区中保留已发送的数据。如果按期收到确认应答，此时数据就可以从缓存区清除。")]),_._v(" "),t("p",[_._v("窗口大小就是指"),t("strong",[_._v("无需等待确认应答，而可以继续发送数据的最大值")]),_._v("。TCP 头里有一个字段叫 "),t("code",[_._v("Window")]),_._v("，也就是窗口大小。"),t("strong",[_._v("这个字段是接收端告诉发送端自己还有多少缓冲区可以接收数据。于是发送端就可以根据这个接收端的处理能力来发送数据，而不会导致接收端处理不过来")]),_._v("。所以，通常窗口的大小是由接收方的窗口大小来决定的。")]),_._v(" "),t("h2",{attrs:{id:"tcp流量控制和拥塞控制是怎么做的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp流量控制和拥塞控制是怎么做的"}},[_._v("#")]),_._v(" TCP流量控制和拥塞控制是怎么做的？")]),_._v(" "),t("p",[_._v("TCP流量控制就是说防止一直发送数据给对方导致对方处理不过来进而触发重传机制导致网络流量无端浪费的问题。")]),_._v(" "),t("p",[_._v("流量控制主要通过滑动窗口实现。根据接收方的窗口大小来决定下一次发送的数据量，这样就可以防止一直往网络中发送大量数据包。")]),_._v(" "),t("blockquote",[t("ul",[t("li",[_._v("当发送方可用窗口变为 0 时，发送方实际上会定时发送窗口探测报文，以便知道接收方的窗口是否发生了改变，这样可以解决窗口关闭现象导致的窗口死锁问题。")]),_._v(" "),t("li",[t("strong",[_._v("TCP 规定是不允许同时减少缓存又收缩窗口的，而是采用先收缩窗口，过段时间再减少缓存，这样就可以避免了丢包情况")]),_._v("。")])])]),_._v(" "),t("p",[_._v("拥塞控制主要解决的问题：在网络出现拥堵时，如果继续发送大量数据包，可能会导致数据包时延、丢失等，这时 TCP 就会重传数据，但是一重传就会导致网络的负担更重，于是会导致更大的延迟以及更多的丢包，这个情况就会进入恶性循环被不断地放大....")]),_._v(" "),t("p",[_._v("拥塞控制通过"),t("strong",[_._v("拥塞窗口cwnd")]),_._v("（发送方维护的一个状态变量，根据网络的拥塞程度动态变化，"),t("code",[_._v("拥塞窗口=min(发送窗口, 接收窗口)")]),_._v(" ）实现，只要网络中没有出现拥塞，cwnd 就会增大；但网络中出现了拥塞，cwnd 就减少。")]),_._v(" "),t("p",[_._v("拥塞控制主要是四个算法：")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("慢启动")]),_._v("："),t("strong",[_._v("当发送方每收到一个 ACK，拥塞窗口 cwnd 的大小就会加 1")]),_._v("，此时发包的个数是"),t("strong",[_._v("指数性的增长")]),_._v("，当达到慢启动门限ssthresh会使用拥塞避免算法。")]),_._v(" "),t("li",[t("strong",[_._v("拥塞避免")]),_._v("："),t("strong",[_._v("每当收到一个 ACK 时，cwnd 增加 1/cwnd")]),_._v("，此时发包个数是"),t("strong",[_._v("线性增长")]),_._v("的，当网络出现拥塞导致丢包后进入拥塞发生算法。")]),_._v(" "),t("li",[t("strong",[_._v("拥塞发生")]),_._v("：丢包后会触发重传机制，主要为超时重传和快速重传：\n"),t("ul",[t("li",[_._v("发生超时重传的拥塞发生算法：慢启动门限ssthresh设为拥塞窗口cwnd的一半，拥塞窗口恢复为初始化值，然后重新慢启动。这种方式太激进，会造成卡顿。")]),_._v(" "),t("li",[_._v("发生快速重传的拥塞发生算法：拥塞窗口设为原来的一半，慢启动门限等于变化后的拥塞窗口大小，然后进入快速恢复算法。")])])]),_._v(" "),t("li",[t("strong",[_._v("快速恢复")]),_._v("：拥塞窗口 "),t("code",[_._v("cwnd = ssthresh + n")]),_._v("（n就是有n个数据包被收到了）；然后重传丢失的数据包；如果再收到重复的ACK，cwnd增加1；收到新数据的ACK后设置"),t("code",[_._v("cwnd = ssthresh")]),_._v("，此时快速恢复过程结束，再次进入拥塞避免状态。")])]),_._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://raw.githubusercontent.com/KaiFengGuan/imgs/main/202206151046193.png"}}),_._v(" "),t("blockquote",[t("p",[_._v("流量控制与拥塞控制的区别：")]),_._v(" "),t("ul",[t("li",[_._v("流量控制是避免「发送方」的数据填满「接收方」的缓存；")]),_._v(" "),t("li",[_._v("拥塞控制是避免「发送方」的数据填满整个网络（减少往网络中大量发送数据）。")])])]),_._v(" "),t("h2",{attrs:{id:"了解tcp-半连接队列和全连接队列吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#了解tcp-半连接队列和全连接队列吗"}},[_._v("#")]),_._v(" 了解TCP 半连接队列和全连接队列吗？")]),_._v(" "),t("p",[_._v("在 TCP 三次握手的时候，Linux 内核会维护两个队列，分别是：半连接队列（ SYN 队列）和全连接队列（ accept 队列）。")]),_._v(" "),t("ul",[t("li",[_._v("客户端向服务端发送 SYN 请求；")]),_._v(" "),t("li",[_._v("服务端收到客户端发起的 SYN 请求后，"),t("strong",[_._v("内核会把该连接存储到半连接队列")]),_._v("，并向客户端响应 SYN+ACK；")]),_._v(" "),t("li",[_._v("客户端会返回 ACK，服务端收到后，"),t("strong",[_._v("内核会把连接从半连接队列移除，然后创建新的完全的连接，并将其添加到 accept 队列，等待进程调用 accept 函数时把连接取出来")]),_._v("。")])]),_._v(" "),t("h2",{attrs:{id:"如何理解tcp是面向字节流的协议-udp是面向报文的协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何理解tcp是面向字节流的协议-udp是面向报文的协议"}},[_._v("#")]),_._v(" 如何理解TCP是面向字节流的协议，UDP是面向报文的协议？")]),_._v(" "),t("ul",[t("li",[_._v("用户通过UDP协议传输消息时，"),t("strong",[_._v("操作系统不会对消息进行拆分")]),_._v("，组装好UDP头部后交给网络层处理，因此"),t("strong",[_._v("每个 UDP 报文就是一个用户消息的边界")]),_._v("；接收方接收到后会将UDP报文插入到队列中，每个元素就是一个UDP报文，接收端取出每个数据后直接拷贝给用户缓冲区即可。")]),_._v(" "),t("li",[_._v("而通过TCP协议传输的消息，"),t("strong",[_._v("消息可能会被操作系统分组成多个的 TCP 报文")]),_._v("，也就是一个完整的用户消息被拆分成多个 TCP 报文进行传输。这时如果接收方不知道发送方发送的消息长度，无法读出完整的消息。而且发送方系统调用 send 函数完成数据“发送”以后，数据并没有被真正从网络上发送出去，只是从应用程序拷贝到了操作系统内核协议栈中，什么时候真正被发送，"),t("strong",[_._v("取决于发送窗口、拥塞窗口以及当前发送缓冲区的大小等条件")]),_._v("。一条消息可能会被拆分到其他TCP报文中发送，"),t("strong",[_._v("我们不能认为一个用户消息对应一个 TCP 报文，正因为这样，所以 TCP 是面向字节流的协议")]),_._v("。")])]),_._v(" "),t("br"),_._v(" "),t("br"),_._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[_._v("参考资料")]),_._v(" "),t("p",[_._v("以上内容均整理自："),t("a",{attrs:{href:"https://xiaolincoding.com/network",target:"_blank",rel:"noopener noreferrer"}},[_._v("小林coding - 图解网络"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=s.exports}}]);