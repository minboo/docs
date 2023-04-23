(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{330:function(t,e,a){"use strict";a.r(e);var s=a(8),r=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-的-rewrite-规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-的-rewrite-规则"}},[t._v("#")]),t._v(" Nginx 的 rewrite 规则")]),t._v(" "),e("p",[e("code",[t._v("rewrite")]),t._v(" 常用于 "),e("code",[t._v("url")]),t._v(" 重写，以及重定向。准确来说 "),e("code",[t._v("rewrite")]),t._v(" 是作用于 "),e("code",[t._v("$request_uri")]),t._v("。")]),t._v(" "),e("p",[t._v("其实理解完修改的是 "),e("code",[t._v("$request_uri")]),t._v(" 部分即可理解，我之前是卡在这里了。")]),t._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Syntax:")]),t._v(" rewrite regex replacement [flag]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Default:")]),t._v(" —\nContext: server, location, if\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example")]),t._v("\nrewrite ^(.*) https://"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" permanent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# https")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ("),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v(" ~ Chrome)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" ^(.*)$ /chrome/"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v(" break")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"flag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flag"}},[t._v("#")]),t._v(" flag")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("flag")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("last")]),t._v(" "),e("td",[t._v("使用更改的 URI 匹配新位置。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("break")]),t._v(" "),e("td",[t._v("停止处理当前的指令集。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("redirect")]),t._v(" "),e("td",[t._v("返回 302 （临时）重定向。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("permanent")]),t._v(" "),e("td",[t._v("返回 301 （永久）重定向。")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);