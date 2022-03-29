# shell 脚本中调用 expect

> expect 是 unix/linux 系统中用来进行自动化控制和测试的软件工具。该工具利用伪终端包装其子进程，允许任意程序通过终端接入进行自动化控制。

首先安装`expect`，`sudo apt-get install expect`。

介绍`expect`命令之前，先介绍几个和`expect`有关的命令：

- spawn: spawn 命令可以启动一个脚本或程序，类似 shell,ftp,telnet,ssh,scp 等等;
- expect: 等待程序输出,并匹配这些输出的内容
- send: 发送一个回应给程序
- exp_continue: 继续匹配
- set: 定义变量
- puts: 输出变量
- exit: 退出 expect 命令
- interact: 运行你和程序进行交互

```shell
# 设置命令执行的超时时间(s)
set timeout 10
# 使用spawn命令启动一个ssh命令
spawn ssh user@127.0.0.1

# 捕获程序输出的`paasword`字符串，如果捕获到了，则发送`paaswd\n`字符串到终端
expect "password" { send "paaswd\n" }
# 退出expect命令
expect eof
```

ssh 自动登录实例：

```shell
# --------------------------------------------------------------------------- #
# ssh自动登录
# Parameter1: 用户名
# Parameter2: ip地址
# Parameter3: 密码
# output: None
# return: None
# --------------------------------------------------------------------------- #
function autossh() {
    local user=$1
    local ip=$2
    local passwd=$3
    /usr/bin/expect <<-EOF
    set timeout 10
    spawn ssh $user@$ip
    expect {
        "yes/no" { send "yes\n"; exp_continue }
        "password" { send "$passwd\n" }
    }
    interact
EOF
}
```

ssh 自动登录并切换到 root 用户:

```shell
user="user"
ip="xxx.xxx.xxx.xxx"
passwd="xxx"
root_pwd="xx"

/usr/bin/expect <<-EOF
set timeout 10
spawn ssh $user@$ip
expect {
    "yes/no" { send "yes\n"; exp_continue }
    "password" { send "$passwd\n" }
}
expect "login" { send "su - root\n" }
expect "Password" { send "$root_pwd\n" }
expect "~#" { send "echo hello\n" }
expect eof
EOF
```
