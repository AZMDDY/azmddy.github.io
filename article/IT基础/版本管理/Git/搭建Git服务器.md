# 搭建Git服务器

在ubuntu18.04上搭建Git服务器。

## 安装Git

```shell
sudo apt-get install git openssl
```

## 创建Git用户组和用户

```shell
sudo groupadd git
sudo useradd git -g git
```

## 禁止Git用户Shell登录

```shell
sudo vim /etc/passwd
# git:x:1000:1000::/home/git:/bin/sh => git:x:1000:1000::/home/git:/usr/bin/git-shell
```

## 创建认证公钥文件

```shell
# 创建git用户目录
cd /home
sudo mkdir git
sudo chown git git
sudo chgrp git git
cd /home/git
sudo mkdir .ssh && cd .ssh
sudo touch authorized_keys
sudo chmod 644 authorized_keys
# 将自己本地的公钥复制到authorized_keys中去
```

## 初始化Git空仓库

```shell
cd /home/git
sudo mkdir tony # 创建一个目录作为Git仓库集
sudo chown git:git tony
sudo ln -s /home/git/tony /tony
# 这是为了使clone的地址短一些。
# git clone git@xx.xx.xx.xx:/tony/demo.git
# 而不是
# git clone git@xx.xx.xx.xx:/home/git/tony/demo.git

#初始化git空仓库
cd /repos
sudo git init --bare demo.git
sudo chown -R git:git demo.git
```

## 远程同步

```shell
# 前提：本地公钥已经复制到了服务器中的/home/git/.ssh/authorized_keys中
# 本地创建demo.git
mkdir demo && cd demo
git init
git remote add origin git@xx.xx.xx.xx:/tony/demo.git
git add .
git commit -m "init"
git push -u origin master
```

## 脚本

使用脚本提高效率

```shell
#!/bin/bash
# 创建git空仓库
cd /tony
repo_name=$1".git"
git init --bare ${repo_name}
chown -R git:git ${repo_name}
```

```shell
#!/bin/bash
# 删除git仓库
cd /tony
repo_name=$1".git"
sudo rm -rf ${repo_name}
```
