(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{321:function(t,e,a){"use strict";a.r(e);var s=a(8),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"处理-nginx-err"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#处理-nginx-err"}},[t._v("#")]),t._v(" 处理 Nginx ERR")]),t._v(" "),e("h2",{attrs:{id:"net-err-incomplete-chunked-encoding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#net-err-incomplete-chunked-encoding"}},[t._v("#")]),t._v(" Net::ERR_INCOMPLETE_CHUNKED_ENCODING")]),t._v(" "),e("h3",{attrs:{id:"_1-磁盘空间不足"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-磁盘空间不足"}},[t._v("#")]),t._v(" 1. 磁盘空间不足")]),t._v(" "),e("p",[t._v("首先查看 "),e("code",[t._v("nginx")]),t._v(" 的日志")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tail -f error.log")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),t._v("/07/08 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":43:44 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("crit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2176")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#0: *1 pwritev() "/etc/nginx/proxy_temp/1/00/0000000001" failed (28: No space left on device) while reading upstream')]),t._v("\n")])])]),e("p",[t._v("提示空间不足，再验证磁盘空间")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("df")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-h")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 果然是磁盘占满")]),t._v("\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/vda1        99G   96G  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".7G  "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("% /\n")])])]),e("p",[t._v("清理出一部分空间即可使用了。")])])}),[],!1,null,null,null);e.default=n.exports}}]);