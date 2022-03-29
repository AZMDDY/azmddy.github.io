# 常用 Linux 命令

## 权限

```sh
# 当前用户
whoami
```

## 代理

```sh
# apt-get 代理设置
sudo apt-get update -o Acquire::http:proxy="http://xxx.xxx.xx.xx:xxx"
sudo apt-get upgrade -o Acquire::http:proxy="http://xxx.xxx.xx.xx:xxx"
```

```sh
# 设置git 代理
git config --global http.proxy http://xxx.xxx.xx.xx:xxx
git config --global https.proxy http://xxx.xxx.xx.xx:xxx

# 取消代理
git config --global --unset http.proxy
git config --global --unset https.proxy

# 查看配置
git config -l
```

## 查找文件

```sh
# find [path] -name [regex|文件名]
find ./ -name "xx.xx"
```
