# shell脚本判断文件后缀

有时候需要判断文件名后缀来区分文件类型，进而进行不同的操作。以下是获取文件名后缀和文件名前缀的两个函数，由于shell脚本函数只能返回0-255，为了将结果返回，就直接使用`echo`输出，可以用`$()`进行捕获。

```Bash
#!/bin/bash

# --------------------------------------------------------------------------- #
# 获取文件名后缀
# Parameter1: 文件名
# output: Yes
# return: None
# --------------------------------------------------------------------------- #
function FileSuffix() {
    local filename="$1"
    if [ -n "$filename" ]; then
        echo "${filename##*.}"
    fi
}

# --------------------------------------------------------------------------- #
# 获取文件名前缀
# Parameter1: 文件名
# output: Yes
# return: None
# --------------------------------------------------------------------------- #
function FilePrefix() {
    local filename="$1"
    if [ -n "$filename" ]; then
        echo "${filename%.*}"
    fi
}

```

使用示例：

```Bash
# --------------------------------------------------------------------------- #
# 判断文件后缀是否是指定后缀
# Parameter1: 文件名
# parameter2: 后缀名
# output: None
# return: 0: 表示文件后缀是指定后缀；1: 表示文件后缀不是指定后缀
# --------------------------------------------------------------------------- #
function IsSuffix() {
    local filename="$1"
    local suffix="$2"
    if [ "$(FileSuffix ${filename})" = "$suffix" ]; then
        return 0
    else
        return 1
    fi
}

file="demo.txt"

IsSuffix ${file} "txt"
ret=$?

if [  $ret -eq 0 ]; then
    echo "the suffix of the ${file} is txt"
fi
```