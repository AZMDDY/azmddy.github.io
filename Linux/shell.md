---
sort: 3
---

# 常用Shell脚本语法


```sh
# 清空文件内容
# 方式 1
cat /dev/null > test.txt
# 方式 2
: > text.txt # : 是一个内建命令，不会产生新的进程
```

```sh
$? # 退出状态码变量，它保存了一个命令，一个函数或者脚本本身的退出状态码
$$ # 保存了它所在脚本的进程ID
```

```sh
cd - # 回到先前的工作目录，它使用了$OLDPWD环境变量
```

```sh
if [ -e $file ]; then
    echo "文件存在"
fi

if [ -f $file ]; then
    echo "文件是一般文件"
fi

if [ -s $file ]; then
    echo "文件大小不为0"
fi

if [ -d $file ]; then
    echo "这是一个目录"
fi

if [ -b $file ]; then
    echo "这是一个块设备"
fi

if [ -r $file ]; then
    echo "文件具有读权限"
fi

if [ -w $file ]; then
    echo "文件具有写权限"
fi

if [ -x $file ]; then
    echo "文件具有可执行权限"
fi
```

```sh
# 整数比较
if [ $a -eq $b ]; then
    echo "$a = $b"
fi

if [ $a -ne $b ]; then
    echo "$a != $b"
fi

if [ $a -gt $b ]; then
    echo "$a > $b"
fi

if [ $a -ge $b ]; then
    echo "$a >= $b"
fi

if [ $a -lt $b ]; then
    echo "$a < $b"
fi

if [ $a -le $b ]; then
    echo "$a <= $b"
fi
```

```sh
# 字符串比较
if [ $a = $b ]; then
    echo "$a = $b"
fi

if [ $a == $b ]; then
    echo "$a = $b"
fi

if [ $a != $b ]; then
    echo "$a != $b"
fi

# 检查字符串
if [ -z $str ]
then
    echo "$str is null"
fi

if [ -n $str ]
then
    echo "$str is not null"
fi
```