# gdb day 1 —— 初识gdb

> GDB(the GNU Project Debugger)是GNU发布的一个强大的Unix、Linux平台下的程序调试工具。

gdb通过系统提供的`ptrace()`方法来接管一个程序的运行。`ptrace()`能使一个程序去观察、控制、检查和改变被追踪者的内存及寄存器，主要用于实现断点调试和追踪系统调用。

## gdb的调试方法

1. 载入程序，并启动gdb，命令:`gdb [program]`

例如我们要调试`main`程序：

```shell
gdb main
```

执行`gdb main`后，程序并没有运行，我们需要输入`run`去启动程序。

```shell
(gdb) run
```

在调试程序发生崩溃的情况下是十分有用的。一般情况下需要设置好程序的动态库加载路径`export LD_LIBRARY_PATH=xxx`，然后就可以逐步的跟踪程序运行到问题点。

2. 调试core文件，命令`gdb [program] [core]`

可以通过调试`core`文件，来查看`core`文件产生时的现场，如使用bt查看调用栈以及寄存器现场信息。

3. 调试正在运行的程序，命令`gdb [program] [pid]`

在生产环境中，有时需要调试一个正在运行的进程，这使用就需要使用到gdb的`attach`功能来调试正在运行的进程。

## gdb通用命令介绍

### 断点

在程序中打断点，命令：`break(b)`

+ `break [filename:line_num]`: 在`filename`的第`line_num`打个断点；
+ `break [func_name]`: 在函数`func_name`调用处打个断点；

删除断点，命令：`delete(d) [break_point]`

```shell
(gdb) delete 1 # 删除1号断点
(gdb) d 2 # 删除2号断点 
```

### 查看堆栈

在程序中查看堆栈信息，命令`backtrace(bt)`

```shell
(gdb) bt n # 打印最内n层
(gdb) bt -n # 打印最外n层

# 查看所有线程堆栈
(gdb) thread apply all bt
```

### 变量

在程序中查看变量，命令：`p`

+ `p [param]`: 查看变量`param`的值；
+ `p [param]=value`: 修改变量`param`的值；

查看所有局部变量，命令：`info local`

### 下一步

执行下一步，命令：`next(n)`

### 继续执行

继续运行直到下一个断点，命令：`continue(c)`

### 进行子函数

进行子函数，命令：`step(s)`

### 返回父函数

结束子函数返回到子函数的调用点，命令：`finish(f)`

### 结束循环

结束循环，命令`until(u)`

### 查看数据

查看变量或表达式的值，命令：`print /fmt exp `，`fmt`：格式，`exp`：表达式

+ `fmt`

  + `x`: 16进制显示
  + `d`: 10进制显示
  + `u`: 16进制显示无符号整型
  + `o`: 8进制显示
  + `t`: 二进制显示
  + `c`: 字符形式显示
  + `f`: 浮点型显示
  + `s`: 字符串形式显示

  

