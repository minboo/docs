(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{297:function(r,t,o){"use strict";o.r(t);var e=o(8),s=Object(e.a)({},(function(){var r=this,t=r._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"基本运行原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本运行原理"}},[r._v("#")]),r._v(" 基本运行原理")]),r._v(" "),t("p",[t("strong",[r._v("Nginx多进程模型和基本请求流程")])]),r._v(" "),t("p",[t("img",{attrs:{src:"https://minboo-blog-img.oss-cn-guangzhou.aliyuncs.com/img/image-20220910171916479.png",alt:"image-20220910171916479"}})]),r._v(" "),t("p",[t("strong",[r._v("Nginx的进程是使用经典的「Master-Worker」模型，Nginx在启动后，会有一个master（主进程）进程和多个worker（子进程）进程，主进程用于协调子进程。")])]),r._v(" "),t("ul",[t("li",[t("p",[t("strong",[r._v("master")]),r._v("进程主要用来管理worker进程，包含：接收来自外界的信号，向各worker进程发送信号，监控worker进程的运行状态，当worker进程退出后(异常情况下)，会自动重新启动新的worker进程。")])]),r._v(" "),t("li",[t("p",[t("strong",[r._v("worker")]),r._v("进程主要处理基本的网络事件，多个worker进程之间是对等的，他们同等竞争来自客户端的请求，各进程互相之间是独立的。一个请求，只可能在一个worker进程中处理，一个worker进程，不可能处理其它进程的请求。worker进程的个数是可以设置的，一般会设置与机器cpu核数一致，这里面的原因与nginx的进程模型以及事件处理模型是分不开的。")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);