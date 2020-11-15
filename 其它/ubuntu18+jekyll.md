# ubuntu18.04 + jekyll搭建个人博客站

> 本人日常使用markdown做笔记，为了方便的将自己的写的东西发布到网上，就采用`ubuntu18.04 + jekyll`的形式搭建个人博客站。在这里就说明如何购买云服务器和域名的方法了。谷哥和度娘是我们的好朋友！

<!-- more -->

## 安装软件包

```shell
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install build-essential
sudo apt-get nodejs ruby ruby-dev git
sudo gem install jekyll bundler
```



## jekyll启动

```shell
jekyll new blog-site # 创建jekyll项目
cd blog-site
bundle install
bundle exec jekyll serve --host=0.0.0.0 --port 80
# 此时在外网通过域名问网站了
```
