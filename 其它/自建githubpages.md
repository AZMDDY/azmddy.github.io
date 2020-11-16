# 自建Github Pages

在自己的服务器上实现Github Pages功能。

环境：ubuntu18.04，步骤如下：

+ 搭建Git服务器，参考：[搭建Git服务器]({% link _posts/2020-03-15-搭建Git服务器.md %})
+ 配置nginx;
+ 关键配置;

## 配置nginx

```shell
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nginx
cd /etc/nginx
# 备份nginx配置文件
sudo cp nginx.conf nginx.conf.bk
sudo vim nginx.conf
```

```shell
# 删除所有内容，将以下内容写入nginx.conf
#user username;
worker_processes auto;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

pid /run/nginx.pid;

include /etc/nginx/modules-enabled/*.conf;

events {
	worker_connections 1024;
	# multi_accept on;
}

http {
	include		mime.types;
	default_type	application/octet-stream;

	#log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
	# '$status $body_bytes_sent "$http_referer" '
	# '"$http_user_agent" "$http_x_forwarded_for"';
	#access_log  logs/access.log  main;
	sendfile        on;
	#tcp_nopush     on;
	keepalive_timeout  65;

	server {
		listen 80;
		location / {
			if (!-e $request_filename) {
				rewrite ^(.*)$ /$1.html last;
				break;
			}
			root /blog-site/www;
		}
	}
}
# /blog-site/www目录将是网站的根目录
```

```shell
# 创建网站的根目录，需和nginx配置文件中的一致
sudo mkdir -p /blog-site/www
# 重启nginx
sudo nginx -s reload
# 此时nginx将自动解析/blog-site/www/目录下的静态网站资源，我们最总会将jekyll生成的文件放到这里。
```

## 关键配置

自建Github Pages要实现本地推送到服务器，服务器解析推送内容，网站更新。对于推送，通过前面将服务器搭建作为一个Git服务器，就能够做到。
服务器解析推送内容，需要用到[Git钩子]({% link _posts/2020-03-23-Git钩子.md %})这一功能实现，但有一些要注意的地方。

首先需要修改`post-receive`这个钩子脚本。具体内容如下：

```shell
#!/bin/bash
unset GIT_DIR
GIT_REPO=/yourname/blog-site.git
TMP_GIT_CLONE=/home/git/tmp/blog-site
PUBLIC_WWW=/blog-site/www
git clone $GIT_REPO $TMP_GIT_CLONE
cd $TMP_GIT_CLONE
bundle install
bundle exec jekyll build -s $TMP_GIT_CLONE -d $PUBLIC_WWW -q
rm -rf $TMP_GIT_CLONE
exit
```

当从本地推送到远程仓库时，就会执行这个钩子脚本，但有一点很关键，执行这个脚本时，用户是`git`，那么就需要考虑**权限问题**。总的来说就是`git`用户读写的权限问题。

首先**暂时**允许`git`用户能够shell登录，以便我们切换用户。

```shell
sudo vim /etc/passwd
修改关于git用户内容如下：
# git:x:1000:1000::/home/git:/bin/bash
su git # 切换到git用户
mkdir /home/git/tmp # 创建临时目录
```

使用`git`用户去安装配置`jekyll`，但在安装之前，需要将git添加到sudo用户组中。

```shell
su root # 切换到root用户
usermod -a -G sudo git # 将git添加到sudo用户组
passwd git # 设置用户密码
su git # 切换到git用户
sudo apt-get install ruby
gem install bundler jeykll
```

将`git`用户添加到`$PUBLIC_WWW`目录的用户组中，最好将为`$PUBLIC_WWW`目录创建单独的用户和组，比如`www`。

```shell
sudo chown www:www /blog-site/www
sudo usermod -a -G www git # 将git添加到www用户组
sudo chmod 755 /blog-site/www #给予git用户读写权限
```

到此结束！