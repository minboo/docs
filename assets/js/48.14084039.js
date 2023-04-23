(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{329:function(a,e,t){"use strict";t.r(e);var s=t(8),n=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"nginx-防盗链"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-防盗链"}},[a._v("#")]),a._v(" Nginx 防盗链")]),a._v(" "),e("p",[a._v("referer （引用页），常用于防盗链，当使用 CDN、OSS 时经常会碰到类似的提示。")]),a._v(" "),e("blockquote",[e("p",[a._v("referer 正确英文为 referrer，但由于早期 HTTP 规范的拼写错误，为了保持向后兼容也就将错就错了。")])]),a._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[a._v("#")]),a._v(" 配置")]),a._v(" "),e("div",{staticClass:"language-nginx extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nginx"}},[e("code",[e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Syntax:")]),a._v(" valid_referers none | blocked | server_names | string ...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Default:")]),a._v(" —\nContext: server, location\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Example")]),a._v("\nlocation /")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("valid_referers")]),a._v(" none blocked *.example.com example.* nginx.example.top/foo/ ~\\.google\\.")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" ("),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$invalid_referer")]),a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("403")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token directive"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'valid_referers"),e("span",{pre:!0,attrs:{class:"token escape entity"}},[a._v("\\n")]),a._v("'")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),e("h2",{attrs:{id:"测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[a._v("#")]),a._v(" 测试")]),a._v(" "),e("h3",{attrs:{id:"_1-example-com"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-example-com"}},[a._v("#")]),a._v(" 1. *.example.com")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://dev.example.com'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 等价于")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'referer: http://dev.example.com'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HTTP/1.1 200 OK")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# valid_referers")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ie")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://dev.aexample.com'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HTTP/1.1 403 Forbidden")]),a._v("\n")])])]),e("h3",{attrs:{id:"_2-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-example"}},[a._v("#")]),a._v(" 2. example.*")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ie")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://example.org'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HTTP/1.1 200 OK")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# valid_referers")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ie")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://dev.example.org'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HTTP/1.1 403 Forbidden")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ie")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://example.org/aaa'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HTTP/1.1 200 OK")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# valid_referers")]),a._v("\n")])])]),e("h3",{attrs:{id:"_3-nginx-example-top-foo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-nginx-example-top-foo"}},[a._v("#")]),a._v(" 3. nginx.example.top/foo/")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ie")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://nginx.example.top'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HTTP/1.1 403 Forbidden")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ie")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://nginx.example.top/aaa'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HTTP/1.1 403 Forbidden")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ie")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://nginx.example.top/foo'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HTTP/1.1 403 Forbidden")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ie")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://nginx.example.top/foo/'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HTTP/1.1 200 OK")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# valid_referers")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ie")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'http://nginx.example.top/foo/aa'")]),a._v(" nginx.example.com\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HTTP/1.1 200 OK")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# valid_referers")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);