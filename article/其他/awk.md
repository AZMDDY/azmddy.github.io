# awk命令

awk是一种用于处理文本的编程语言工具。它将文件作为记录序列处理。在一般情况下，文件内容的每行都是一个记录。每行内容都会被分割成一系列的域，因此，我们可以认为一行的第一个词为第一个域，第二个词为第二个，以此类推。

## print命令

print命令用于输出文本。其输出文本总是以`输出记录分隔符`分割，其默认是`换行符`。该命令的最简形式是：

`print`：会输出当前记录的内容。在awk中，记录会被分割成`域`，它们可以被分别显示或者使用。

例：

```Bash
ps -ef | awk '{print}'
```

`print $1`：显示记录的第一个域

例：

```Bash
# 显示/sbin/init进程的所属用户
ps -ef | grep "/sbin/init" | grep -v grep | awk '{print $1}'
```

`print $2, $3`: 显示记录的第2，3个域，并以预定义的`输出域分隔符`分割，其默认是一个空格符

例:

```Bash
# 显示/sbin/init进程的进程ID和父进程ID
ps -ef | grep "/sbin/init" | grep -v grep | awk '{print $2, $3}'
```

`$0`是指整个记录，`print`和`print $0`是等效的。

## 常用函数

+ `toupper()`: 字符转大小
+ `tolower()`: 字符转小写
+ `length()`: 返回字符串长度

## 常见用法

格式：

```text
# 对filename按照action处理
$ awk [action] [filename]
```

例如：

```Bash
# 将demo.txt每一行打印出来
awk '{print $0}' demo.txt
```

指定文件中字段的分隔符，按照这个分隔符划分域：

```Bash
# 指定分隔符是':'
awk -F ':' '{print toupper($1)}' demo.txt
```