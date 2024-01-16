(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{589:function(s,t,n){"use strict";n.r(t);var a=n(22),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"nginx-使用自签名-ssl-证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-使用自签名-ssl-证书"}},[s._v("#")]),s._v(" nginx 使用自签名 SSL 证书")]),s._v(" "),n("h2",{attrs:{id:"创建-ssl-证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建-ssl-证书"}},[s._v("#")]),s._v(" 创建 SSL 证书")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" openssl req -x509 -nodes -days "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("365")]),s._v(" -newkey rsa:2048 -keyout /etc/ssl/private/your-selfsigned.key -out /etc/ssl/certs/your-selfsigned.crt\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"nginx-配置-ssl"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置-ssl"}},[s._v("#")]),s._v(" nginx 配置 SSL")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/nginx/sites-available/default /etc/nginx/sites-available/default.bk\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/nginx/sites-available/default\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将请求重定向到https")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动https服务")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("完整的配置如下：")]),s._v(" "),n("div",{staticClass:"language-nginx line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-nginx"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将your_ip和ssl密钥文件替换")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" default_server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" [::]:80 default_server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" your_ip")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" https://"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_name")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SSL configuration")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# listen 443 ssl default_server;")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# listen [::]:443 ssl default_server;")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Note: You should disable gzip for SSL traffic.")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# See: https://bugs.debian.org/773332")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Read up on ssl_ciphers to ensure a secure configuration.")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# See: https://bugs.debian.org/765782")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Self signed certs generated by the ssl-cert package")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Don't use them in a production server!")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# include snippets/snakeoil.conf;")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /var/www")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add index.php to the list if you are using PHP")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.html index.htm index.nginx-debian.html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# First attempt to serve request as file, then")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# as directory, then fall back to displaying a 404.")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ =404")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# pass PHP scripts to FastCGI server")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ \\.php$")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" snippets/fastcgi-php.conf")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t# With php-fpm (or other unix sockets):")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_pass")]),s._v(" unix:/var/run/php/php7.3-fpm.sock")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\t# With php-cgi (or other tcp sockets):")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#\tfastcgi_pass 127.0.0.1:9000;")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# deny access to .htaccess files, if Apache's document root")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# concurs with nginx's one")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" ~ /\\.ht")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("deny")]),s._v(" all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Virtual Host configuration for example.com")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# You can move that to a different file under sites-available/ and symlink that")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# to sites-enabled/ to enable it.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl default_server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" [::]:443 ssl default_server")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /var/www")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" index.html index.htm index.nginx-debian.html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate")]),s._v(" /etc/ssl/certs/your-selfsigned.crt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ssl_certificate_key")]),s._v(" /etc/ssl/private/your-selfsigned.key")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token directive"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try_files")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ =404")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br")])]),n("p",[s._v("重启 nginx 服务")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx restart\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);