---
sort: 1
---

# Git-1 基本配置

> Git根据权限划分有三种配置：系统级配置，用户级配置，仓库级配置。这些配置都是保存到相应配置文件中的。

+ 系统级配置：
  + `git config --system `
  + 对所有用户生效
  + 配置文件路径：安装目录下的`.gitconfig`
+ 用户级配置：
  + `git config --global`
  + 只对当前用户生效
  + 配置文件路径：`~/.gitconfig`
+ 仓库级配置：
  + `git config --local`
  + 只对当前仓库生效
  + 配置文件路径：`.git/config`

配置的优先级是`仓库级配置 > 用户级配置 > 系统级配置`。

## 个人信息配置

设定个人身份，会在提交的信息中体现，和git服务器认证密码、公私钥无关。

```shell
# 配置用户名称
git config --global user.name "azmddy"
# 配置用户邮箱
git config --global user.email "azmddy.c@gmail.com"
```

## 换行符配置

windows上的换行符：`\r\n` (CRLF)

linux/unix(mac)上的换行符：`\n`（LF）

对于跨平台开发，会造成困扰和不必要的麻烦。

```shell
# 提交时CRLF自动转换成LF，签出时，自动转成CRLF
git config --global core.autocrlf ture

# 提交时CRLF自动转换成LF，签出时，不转换
git config --global core.autocrlf input

# 提交时不转换，签出时，不转换
git config --global core.autocrlf false
```

## 文件编码配置

```shell
# 中文编码支持
git config --global gui.encoding utf-8
# commit的时候支持中文
git config --global i18n.commitEncoding utf-8
# git log时支持中文
git config --global i18n.logOutputEncoding utf-8
# 支持中文路径
git config --global core.quotepath false
```

## 认证配置

### http/https协议认证

这种方式就是需要输入用户名和密码的方式。

```shell
# http： 保存上次认证的结果
git config --global credential.helper store
# https： 不验证公钥
git config http.sslVerify false
```

### ssh协议认证

使用公私钥认证，无需输入密码，加密传输，安全便捷。

```shell
# 生成rsa公私钥
ssh-keygen -t rsa -C azmddy.c@gmail.com
# 一路回车，可以看到公私钥存放的位置。
# 公钥：~/.ssh/id_rsa.pub
# 私钥：~/.ssh/id_rsa
# 私钥不要泄漏出去！！！
```

可以将公钥上传到代码平台，比如github，gitlab，gitee等等。这样就可以不需要输入密码上传和下载仓库代码。

## 文本编辑器

配置默认文本编辑器，当 Git 需要你输入信息时会调用它。 如果未配 置，Git 会使用操作系统默认的文本编辑器。

```shell
git config --global core.editor vim
```

## 检查配置信息

如果想要检查你的配置，可以使用`git config --list`命令来列出所有Git当时能找到的配置。

```shell
git config --list
```

