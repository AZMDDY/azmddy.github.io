(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{519:function(s,t,n){"use strict";n.r(t);var a=n(22),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"自建-github-pages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#自建-github-pages"}},[s._v("#")]),s._v(" 自建 Github Pages")]),s._v(" "),n("p",[s._v("在自己的服务器上实现 Github Pages 功能。")]),s._v(" "),n("p",[s._v("环境：ubuntu18.04，步骤如下：")]),s._v(" "),n("ul",[n("li",[s._v("搭建 Git 服务器，参考："),n("a",{attrs:{href:"https://azmddy.github.io/%E5%85%B6%E5%AE%83/%E6%90%AD%E5%BB%BAGit%E6%9C%8D%E5%8A%A1%E5%99%A8.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("搭建 Git 服务器"),n("OutboundLink")],1)]),s._v(" "),n("li",[s._v("配置 nginx;")]),s._v(" "),n("li",[s._v("关键配置;")])]),s._v(" "),n("h2",{attrs:{id:"配置-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx"}},[s._v("#")]),s._v(" 配置 nginx")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" upgrade\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/nginx\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份nginx配置文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" nginx.conf nginx.conf.bk\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" nginx.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有内容，将以下内容写入nginx.conf")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#user username;")]),s._v("\nworker_processes auto"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log  notice;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_log  logs/error.log  info;")]),s._v("\n\npid /run/nginx.pid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\ninclude /etc/nginx/modules-enabled/*.conf"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tworker_connections "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# multi_accept on;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tinclude\t\tmime.types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\tdefault_type\tapplication/octet-stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# '$status $body_bytes_sent \"$http_referer\" '")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# \'"$http_user_agent" "$http_x_forwarded_for"\';')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  logs/access.log  main;")]),s._v("\n\tsendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tcp_nopush     on;")]),s._v("\n\tkeepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\tserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\tlisten "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\tlocation / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("-e "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_filename")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\trewrite ^"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ /"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(".html last"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t\t\troot /blog-site/www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /blog-site/www目录将是网站的根目录")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br")])]),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建网站的根目录，需和nginx配置文件中的一致")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /blog-site/www\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启nginx")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -s reload\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此时nginx将自动解析/blog-site/www/目录下的静态网站资源，我们最总会将jekyll生成的文件放到这里。")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"关键配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#关键配置"}},[s._v("#")]),s._v(" 关键配置")]),s._v(" "),n("p",[s._v("自建 Github Pages 要实现本地推送到服务器，服务器解析推送内容，网站更新。对于推送，通过前面将服务器搭建作为一个 Git 服务器，就能够做到。\n服务器解析推送内容，需要用到"),n("a",{attrs:{href:"https://azmddy.github.io/%E5%85%B6%E5%AE%83/git%E9%92%A9%E5%AD%90.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Git 钩子"),n("OutboundLink")],1),s._v("这一功能实现，但有一些要注意的地方。")]),s._v(" "),n("p",[s._v("首先需要修改"),n("code",[s._v("post-receive")]),s._v("这个钩子脚本。具体内容如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" GIT_DIR\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GIT_REPO")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/yourname/blog-site.git\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TMP_GIT_CLONE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/git/tmp/blog-site\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PUBLIC_WWW")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/blog-site/www\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GIT_REPO")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TMP_GIT_CLONE")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TMP_GIT_CLONE")]),s._v("\nbundle "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\nbundle "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" jekyll build -s "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TMP_GIT_CLONE")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PUBLIC_WWW")]),s._v(" -q\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$TMP_GIT_CLONE")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("当从本地推送到远程仓库时，就会执行这个钩子脚本，但有一点很关键，执行这个脚本时，用户是"),n("code",[s._v("git")]),s._v("，那么就需要考虑"),n("strong",[s._v("权限问题")]),s._v("。总的来说就是"),n("code",[s._v("git")]),s._v("用户读写的权限问题。")]),s._v(" "),n("p",[s._v("首先"),n("strong",[s._v("暂时")]),s._v("允许"),n("code",[s._v("git")]),s._v("用户能够 shell 登录，以便我们切换用户。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/passwd\n修改关于git用户内容如下：\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git:x:1000:1000::/home/git:/bin/bash")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到git用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /home/git/tmp "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建临时目录")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("使用"),n("code",[s._v("git")]),s._v("用户去安装配置"),n("code",[s._v("jekyll")]),s._v("，但在安装之前，需要将 git 添加到 sudo 用户组中。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" root "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到root用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将git添加到sudo用户组")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置用户密码")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到git用户")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ruby\ngem "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" bundler jeykll\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("将"),n("code",[s._v("git")]),s._v("用户添加到"),n("code",[s._v("$PUBLIC_WWW")]),s._v("目录的用户组中，最好将为"),n("code",[s._v("$PUBLIC_WWW")]),s._v("目录创建单独的用户和组，比如"),n("code",[s._v("www")]),s._v("。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" www:www /blog-site/www\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G www "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将git添加到www用户组")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("755")]),s._v(" /blog-site/www "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#给予git用户读写权限")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("到此结束！")])])}),[],!1,null,null,null);t.default=e.exports}}]);