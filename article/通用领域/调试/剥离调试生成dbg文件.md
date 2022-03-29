# 剥离调试信息生成 dbg 文件

> 在实际工作环境中运行的可执行文件都是去掉了调试信息，但这并不方便定位问题，所以需要剥离调试信息生成 dbg 文件。

通过剥离二进制文件的调试信息，可以减少二进制文件的大小，同时生成的 dbg 文件也可以有助于定位问题。

只需要将对应的 dbg 文件放到剥离了调试信息的二进制文件的同级目录下，gdb 调试时就能看到相关的调试信息。

1. 生成有调试信息的可执行文件

```shell
g++ -g main.cpp -o main
```

2. 剥离符号生成 dbg 文件

```shell
objcopy --only-keep-debug main main.dbg
objcopy --strip-debug main
objcopy --strip-all main
objcopy --add-gnu-debuglink main.dbg main
```

`objcopy`命令是将目标文件的一部分或者全部内容拷贝到另外一个目标文件中，或者实现目标文件的格式转换。

`objcopy --only-keep-debug main main.dbg`: **创建包含调试信息的文件**。

`objcopy --strip-debug main`: 剥离目标文件的调试信息。

`objcopy --strip-all main`: 不从源文件中复制重定位和符号信息。删除重定位和符号信息。

`objcopy --add-gnu-debuglink main.dbg main`: 为不含调试信息的文件关联一个调试文件。也就是将 main.dbg 和 main 关联起来。**在调试时，调试器会尝试当前目录下查找单独的调试信息文件。**

更多关于`objcopy`的信息可以查阅[objcopy (GNU Binary Utilities) (sourceware.org)](https://sourceware.org/binutils/docs/binutils/objcopy.html)
