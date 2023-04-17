(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{576:function(t,s,a){"use strict";a.r(s);var _=a(10),n=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("浏览器有哪些进程和线程？它们的关系又是什么？傻傻分不清......\n")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"}),a("p",[t._v("整理自掘金的博主：沐华 - 《"),a("a",{attrs:{href:"https://juejin.cn/post/6991849728493256741",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解浏览器中的进程与线程"),a("OutboundLink")],1),t._v("》")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"title"},[t._v("延申阅读：")]),a("p",[a("a",{attrs:{href:"https://github.com/75team/w3c/blob/master/articles/20190603_cncuckoo_%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E7%8E%B0%E4%BB%A3%E6%B5%8F%E8%A7%88%E5%99%A8.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解现代浏览器"),a("OutboundLink")],1)])]),a("h2",{attrs:{id:"_1-进程和线程的联系和区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-进程和线程的联系和区别"}},[t._v("#")]),t._v(" 1 进程和线程的联系和区别")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("进程")]),t._v("：当我们启动某个程序时，操作系统会给该程序创建一块内存（当程序关闭时，该内存空间就会被回收），用来存放代码、运行中的数据和一个执行任务的主线程")]),t._v(" "),a("li",[a("strong",[t._v("线程")]),t._v("：依附于进程，在进程中使用多线程并行处理能提升运算效率，进程将任务分成很多细小的任务，再创建多个线程，在里面并行分别执行")])]),t._v(" "),a("p",[t._v("进程和线程的关系特点：")]),t._v(" "),a("ul",[a("li",[t._v("进程与进程之间完全隔离，互不干扰，一个进程崩溃不会影响其他进程，避免一个进程出错影响整个程序")]),t._v(" "),a("li",[t._v("进程与进程之间需要传递某些数据的话，就需要通过"),a("strong",[t._v("进程通信管道IPC")]),t._v("来传递")]),t._v(" "),a("li",[t._v("一个进程中可以并发多个线程，每个线程并行执行不同的任务")]),t._v(" "),a("li",[t._v("一个进程中的任意一个线程执行出错，会导致这个进程崩溃")]),t._v(" "),a("li",[t._v("同一进程下的线程之间可以直接通信和共享数据")]),t._v(" "),a("li",[t._v("当一个进程关闭之后，操作系统会回收该进程的内存空间")])]),t._v(" "),a("h2",{attrs:{id:"_2-chrome-打开一个页面有多少进程-分别是哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-chrome-打开一个页面有多少进程-分别是哪些"}},[t._v("#")]),t._v(" 2 Chrome 打开一个页面有多少进程？分别是哪些")]),t._v(" "),a("p",[t._v("浏览器从关闭到启动，然后新开一个页面至少需要"),a("strong",[t._v("4个")]),t._v("进程："),a("strong",[t._v("1个浏览器进程，1个GPU进程，1个网络进程，和1个渲染进程")]),t._v("；")]),t._v(" "),a("p",[t._v("后续如果再打开新的标签页：浏览器进程，GPU进程，网络进程是共享的，不会重新启动，然后默认情况下会为每一个标签页配置一个渲染进程，但是也有"),a("code",[t._v("例外")]),t._v("，比如从A页面里面打开一个新的页面B页面，而A页面和B页面又属于同一站点的话，A和B就共用一个渲染进程，其他情况就为B创建一个新的渲染进程")]),t._v(" "),a("p",[t._v("所以，最新的Chrome浏览器包括："),a("code",[t._v("1个浏览器主进程")]),t._v("，"),a("code",[t._v("1个GPU进程")]),t._v("，"),a("code",[t._v("1个网络进程")]),t._v("，"),a("code",[t._v("多个渲染进程")]),t._v("，和"),a("code",[t._v("多个插件进程")]),t._v(" ：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("浏览器进程")]),t._v("： 负责控制浏览器除标签页外的界面，包括地址栏、书签、前进后退按钮等，以及负责与其他进程的协调工作，同时提供存储功能")]),t._v(" "),a("li",[a("strong",[t._v("GPU进程")]),t._v("：负责整个浏览器界面的渲染。Chrome刚开始发布的时候是没有GPU进程的，而使用GPU的初衷是为了实现3D CSS效果，只是后面网页、Chrome的UI界面都用GPU来绘制，这使GPU成为浏览器普遍的需求，最后Chrome在多进程架构上也引入了GPU进程")]),t._v(" "),a("li",[a("strong",[t._v("网络进程")]),t._v("：负责发起和接受网络请求，以前是作为模块运行在浏览器进程一时在面的，后面才独立出来，成为一个单独的进程")]),t._v(" "),a("li",[a("strong",[t._v("插件进程")]),t._v("：主要是负责插件的运行，因为插件可能崩溃，所以需要通过插件进程来隔离，以保证插件崩溃也不会对浏览器和页面造成影响")]),t._v(" "),a("li",[a("strong",[t._v("渲染进程")]),t._v("：负责控制显示tab标签页内的所有内容，核心任务是将HTML、CSS、JS转为用户可以与之交互的网页，排版引擎Blink和JS引擎V8都是运行在该进程中，默认情况下Chrome会为每个Tab标签页创建一个渲染进程")])]),t._v(" "),a("p",[t._v("我们平时看到的浏览器呈现出页面过程中，大部分工作都是在渲染进程中完成，所以我们来看一下渲染进程中的线程")]),t._v(" "),a("h3",{attrs:{id:"渲染进程中的线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程中的线程"}},[t._v("#")]),t._v(" 渲染进程中的线程")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("GUI渲染线程")]),t._v("：负责渲染页面，解析html和CSS、构建DOM树、CSSOM树、渲染树、和绘制页面，重绘重排也是在该线程执行")]),t._v(" "),a("li",[a("strong",[t._v("JS引擎线程")]),t._v("：一个tab页中只有一个JS引擎线程(单线程)，负责解析和执行JS。"),a("strong",[t._v("它GUI渲染进程不能同时执行，只能一个一个来，如果JS执行过长就会导致阻塞掉帧")])]),t._v(" "),a("li",[a("strong",[t._v("计时器线程")]),t._v("：指setInterval和setTimeout，因为JS引擎是单线程的，所以如果处于阻塞状态，那么计时器就会不准了，所以需要单独的线程来负责计时器工作")]),t._v(" "),a("li",[a("strong",[t._v("异步http请求线程")]),t._v("： XMLHttpRequest连接后浏览器开的一个线程，比如请求有回调函数，异步线程就会将回调函数加入事件队列，等待JS引擎空闲执行")]),t._v(" "),a("li",[a("strong",[t._v("事件触发线程")]),t._v("：主要用来控制事件循环，比如JS执行遇到计时器，AJAX异步请求等，就会将对应任务添加到事件触发线程中，在对应事件符合触发条件触发时，就把事件添加到待处理队列的队尾，等JS引擎处理")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/KaiFengGuan/imgs/main/202204040856731.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_3-你知道哪些进程间通信的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-你知道哪些进程间通信的方式"}},[t._v("#")]),t._v(" 3 你知道哪些进程间通信的方式？")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("管道通信")]),t._v("：就是操作系统在内核中开辟一段缓冲区，进程1可以将需要交互的数据拷贝到这个缓冲区里，进程2就可以读取了")]),t._v(" "),a("li",[a("strong",[t._v("消息队列通信")]),t._v("：消息队列就是用户可以添加和读取消息的列表，消息队列里提供了一种从一个进程向另一个进程发送数据块的方法，不过和管道通信一样每个数据块有最大长度限制")]),t._v(" "),a("li",[a("strong",[t._v("共享内存通信")]),t._v("：就是映射一段能被其他进程访问的内存，由一个进程创建，但多个进程都可以访问，共享进程最快的是"),a("code",[t._v("IPC")]),t._v("方式")]),t._v(" "),a("li",[a("strong",[t._v("信号量通信")]),t._v("：比如信号量初始值是1，进程1来访问一块内存的时候，就把信号量设为0，然后进程2也来访问的时候看到信号量为0，就知道有其他进程在访问了，就不访问了")]),t._v(" "),a("li",[a("strong",[t._v("socket")]),t._v("：其他的都是同一台主机之间的进程通信，而在不同主机的进程通信就要用到socket的通信方式了，比如发起http请求，服务器返回数据")])]),t._v(" "),a("h2",{attrs:{id:"_4-多标签之间怎么通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-多标签之间怎么通信"}},[t._v("#")]),t._v(" 4 多标签之间怎么通信？")]),t._v(" "),a("p",[t._v("没有办法直接通信，需要有一个类似中介者进行消息的转发和接收，比如")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("localStorage")]),t._v("：在一个标签页监听localStorage的变化，然后当另一个标签页修改的时候，可以通过监听获取新数据")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("WebSocket")]),t._v("：因为websocket可以实现实时服务器推送，所以服务器就可以来当这个中介者。标签页通过向服务器发送数据，然后服务器再向其他标签推送转发")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("ShareWorker")]),t._v("：会在页面的生命周期内创建一个唯一的线程，并开启多个页面也只会使用同一个线程，标签页共享一个线程")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("postMessage")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 发送方")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pastMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'发送的数据'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://接收的址'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收方")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"_5-你知道僵尸进程和孤儿进程吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-你知道僵尸进程和孤儿进程吗"}},[t._v("#")]),t._v(" 5 你知道僵尸进程和孤儿进程吗？")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("孤儿进程")]),t._v("：故名思义，就是没爹的孩子。父进程退出了，而它的一个或多个进程还在运行，那么这些子进程都会成为孤儿进程。这些孤儿都将被init进程收养，并负责这些孤儿的以后")]),t._v(" "),a("li",[a("strong",[t._v("僵尸进程")]),t._v("：就是子进程比父进程先结束，而父进程又没有释放子进程占用的资源，那么子进程的描述还留在系统中，这种进程就是僵尸进程")])])])}),[],!1,null,null,null);s.default=n.exports}}]);