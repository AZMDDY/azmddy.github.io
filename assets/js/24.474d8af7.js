(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{516:function(s,a,t){"use strict";t.r(a);var n=t(22),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-day-1-基本配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-day-1-基本配置"}},[s._v("#")]),s._v(" Git Day 1 —— 基本配置")]),s._v(" "),t("p",[s._v("Git根据权限划分有三种配置：系统级配置，用户级配置，仓库级配置。这些配置都是保存到相应配置文件中的。")]),s._v(" "),t("ul",[t("li",[s._v("系统级配置：\n"),t("ul",[t("li",[t("code",[s._v("git config --system")])]),s._v(" "),t("li",[s._v("对所有用户生效")]),s._v(" "),t("li",[s._v("配置文件路径：安装目录下的"),t("code",[s._v(".gitconfig")])])])]),s._v(" "),t("li",[s._v("用户级配置：\n"),t("ul",[t("li",[t("code",[s._v("git config --global")])]),s._v(" "),t("li",[s._v("只对当前用户生效")]),s._v(" "),t("li",[s._v("配置文件路径："),t("code",[s._v("~/.gitconfig")])])])]),s._v(" "),t("li",[s._v("仓库级配置：\n"),t("ul",[t("li",[t("code",[s._v("git config --local")])]),s._v(" "),t("li",[s._v("只对当前仓库生效")]),s._v(" "),t("li",[s._v("配置文件路径："),t("code",[s._v(".git/config")])])])])]),s._v(" "),t("p",[s._v("配置的优先级是"),t("code",[s._v("仓库级配置 > 用户级配置 > 系统级配置")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"个人信息配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#个人信息配置"}},[s._v("#")]),s._v(" 个人信息配置")]),s._v(" "),t("p",[s._v("设定个人身份，会在提交的信息中体现，和git服务器认证密码、公私钥无关。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置用户名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"azmddy"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置用户邮箱")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"azmddy.c@gmail.com"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"换行符配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#换行符配置"}},[s._v("#")]),s._v(" 换行符配置")]),s._v(" "),t("p",[s._v("windows上的换行符："),t("code",[s._v("\\r\\n")]),s._v(" (CRLF)")]),s._v(" "),t("p",[s._v("linux/unix(mac)上的换行符："),t("code",[s._v("\\n")]),s._v("（LF）")]),s._v(" "),t("p",[s._v("对于跨平台开发，会造成困扰和不必要的麻烦。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交时CRLF自动转换成LF，签出时，自动转成CRLF")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf ture\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交时CRLF自动转换成LF，签出时，不转换")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf input\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 提交时不转换，签出时，不转换")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.autocrlf "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"文件编码配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件编码配置"}},[s._v("#")]),s._v(" 文件编码配置")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 中文编码支持")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global gui.encoding utf-8\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit的时候支持中文")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global i18n.commitEncoding utf-8\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git log时支持中文")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global i18n.logOutputEncoding utf-8\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 支持中文路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.quotepath "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"认证配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认证配置"}},[s._v("#")]),s._v(" 认证配置")]),s._v(" "),t("h3",{attrs:{id:"http-https协议认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-https协议认证"}},[s._v("#")]),s._v(" http/https协议认证")]),s._v(" "),t("p",[s._v("这种方式就是需要输入用户名和密码的方式。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# http： 保存上次认证的结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global credential.helper store\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# https： 不验证公钥")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config http.sslVerify "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"ssh协议认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh协议认证"}},[s._v("#")]),s._v(" ssh协议认证")]),s._v(" "),t("p",[s._v("使用公私钥认证，无需输入密码，加密传输，安全便捷。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成rsa公私钥")]),s._v("\nssh-keygen -t rsa -C azmddy.c@gmail.com\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一路回车，可以看到公私钥存放的位置。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 公钥：~/.ssh/id_rsa.pub")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 私钥：~/.ssh/id_rsa")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 私钥不要泄漏出去！！！")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("可以将公钥上传到代码平台，比如github，gitlab，gitee等等。这样就可以不需要输入密码上传和下载仓库代码。")]),s._v(" "),t("h2",{attrs:{id:"文本编辑器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文本编辑器"}},[s._v("#")]),s._v(" 文本编辑器")]),s._v(" "),t("p",[s._v("配置默认文本编辑器，当 Git 需要你输入信息时会调用它。 如果未配 置，Git 会使用操作系统默认的文本编辑器。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global core.editor "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"检查配置信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查配置信息"}},[s._v("#")]),s._v(" 检查配置信息")]),s._v(" "),t("p",[s._v("如果想要检查你的配置，可以使用"),t("code",[s._v("git config --list")]),s._v("命令来列出所有Git当时能找到的配置。")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);