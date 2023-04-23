(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{366:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"传参-xargs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#传参-xargs"}},[t._v("#")]),t._v(" 传参 xargs")]),t._v(" "),a("p",[t._v("xargs 能够处理管道或 stdin（标准输入）并将其转为特定的命令参数，用于给其他命令传递参数（大多数命令不接受 stdin 作为参数）。")]),t._v(" "),a("p",[t._v("如果没有给出命令，那么默认使用 echo 命令，空格是默认界定符。这就意味着通过管道传递给 xargs 的输入若包含换行符制表符一连串的空白，都会被视为空格。")]),t._v(" "),a("h2",{attrs:{id:"选项参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选项参数"}},[t._v("#")]),t._v(" 选项参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-p")]),t._v(" "),a("td",[t._v("确认要执行的命令。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-d")]),t._v(" "),a("td",[t._v("自定义界定符。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-n")]),t._v(" "),a("td",[t._v("指定项数。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-L")]),t._v(" "),a("td",[t._v("指定行数。")])])])]),t._v(" "),a("h2",{attrs:{id:"日常使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日常使用"}},[t._v("#")]),t._v(" 日常使用")]),t._v(" "),a("p",[t._v("其实基本上只配合 "),a("code",[t._v("rm")]),t._v("、"),a("code",[t._v("wget")]),t._v(" 作为日常使用。")]),t._v(" "),a("h3",{attrs:{id:"_1-删除"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-删除"}},[t._v("#")]),t._v(" 1. 删除")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("touch")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(".txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-type")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-name")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test[2-3]*"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-下载"}},[t._v("#")]),t._v(" 2. 下载")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("EOF"),a("span",{pre:!0,attrs:{class:"token bash punctuation"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" meitu.txt")]),t._v("\nhttp://hd.wallpaperswide.com/thumbs/im_hungry-t2.jpg\nhttp://hd.wallpaperswide.com/thumbs/river_aerial_view-t2.jpg\nhttp://hd.wallpaperswide.com/thumbs/space_eye-t2.jpg\nEOF")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" meitu.txt\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" images\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" meitu.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-P")]),t._v(" images\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开文件夹查看吧")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);