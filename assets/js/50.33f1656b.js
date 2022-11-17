(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{542:function(s,t,n){"use strict";n.r(t);var a=n(22),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"统计文件数量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计文件数量"}},[s._v("#")]),s._v(" 统计文件数量")]),s._v(" "),n("p",[s._v("在"),n("code",[s._v("linux")]),s._v("系统中使用一下命令统计当前路径下的文件数量：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计当前目录下所有文件(不包括子目录下的文件以及隐藏文件)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^-"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计当前目录下所有文件(不包括子目录下的文件)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -la "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^-"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计当前目录下所有文件夹(不包括子目录下的文件夹以及隐藏文件夹)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^d"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计当前目录下所有文件夹(不包括子目录下的文件夹,但会包括当前目录和上一层目录，需要将结果减2)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -la "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^d"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计当前目录下所有文件(包括子目录下的文件，但不包括隐藏文件)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -lR "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^-"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计当前目录下所有文件(包括子目录下的文件)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -laR "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^-"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计当前目录下所有文件夹(包括子目录下的文件夹, 但不包含隐藏文件夹)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -lR "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^d"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 统计当前目录下所有文件夹(包括子目录下的文件夹, 但会包括当前目录和上一层目录，需要将结果减2)")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -laR "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^d"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("p",[s._v("参数解释：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("a")]),s._v(": 所有文件/文件夹，包括隐藏文件/文件夹")]),s._v(" "),n("li",[n("code",[s._v("R")]),s._v(": 递归的列出子文件夹中的文件/文件夹")]),s._v(" "),n("li",[n("code",[s._v("wc -l")]),s._v(": 统计输出信息的行数")])])])}),[],!1,null,null,null);t.default=r.exports}}]);