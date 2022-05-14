

# Valgrind

> Valgrind 是一个用于构建动态分析工具的仪器框架。Valgrind 工具可以自动检测许多内存管理和线程错误，并详细分析您的程序。



Valgrind 工具套件提供了许多调试和分析工具，可帮助您使程序更快、更正确。这些工具中最受欢迎的称为 Memcheck。它可以检测 C 和 C++ 程序中常见的许多与内存相关的错误，这些错误可能导致崩溃和不可预知的行为。

# 介绍

1. Valgrind 发行版目前包括七个生产质量工具：一个内存错误检测器、两个线程错误检测器、一个缓存和分支预测分析器、一个调用图生成缓存和分支预测分析器，以及两个不同的堆分析器。

[Memcheck](https://valgrind.org/info/tools.html#memcheck)：Memcheck 检测内存管理问题，主要针对 C 和 C++ 程序。当一个程序在 Memcheck 的监督下运行时，所有的内存读写都会被检查，并且对 malloc/new/free/delete 的调用会被拦截。因此，Memcheck 可以检测您的程序是否：

- 访问它不应该访问的内存（尚未分配的区域、已释放的区域、堆块末尾的区域、堆栈的不可访问区域）。
- 以危险的方式使用未初始化的值。
- 泄漏内存。
- 堆块的错误释放（双重释放，不匹配的释放）。
- 将重叠的源和目标内存块传递给 memcpy() 和相关函数。

Memcheck 会在这些错误发生时立即报告，并给出发生错误的源代码行号，以及为到达该行而调用的函数的堆栈跟踪。Memcheck 在字节级别跟踪可寻址性，并在位级别跟踪值的初始化。因此，它可以检测单个未初始化位的使用，并且不会报告位域操作的虚假错误。Memcheck 运行程序的速度比正常速度慢 10--30 倍。

[Cachegrind](https://valgrind.org/info/tools.html#cachegrind)：Cachegrind 是一个缓存分析器。它对 CPU 中的 I1、D1 和 L2 缓存执行详细模拟，因此可以准确地查明代码中缓存未命中的来源。它通过每个函数、每个模块和整个程序的摘要来识别每行源代码执行的缓存未命中、内存引用和指令的数量。它对用任何语言编写的程序都很有用。Cachegrind 运行程序的速度比正常速度慢 20--100 倍。

[Callgrind](https://valgrind.org/info/tools.html#callgrind)：它提供了 Cachegrind 所做的所有信息，以及有关调用图的额外信息。它在 3.2.0 版中被折叠到主要的 Valgrind 发行版中。单独提供一个令人惊叹的可视化工具 [KCachegrind](http://kcachegrind.sourceforge.net/cgi-bin/show.cgi/KcacheGrindIndex)，它可以更好地概述 Callgrind 收集的数据；它还可以用于可视化 Cachegrind 的输出。

[Massif](https://valgrind.org/info/tools.html#massif)：Massif 是一个堆分析器。它通过定期拍摄程序堆的快照来执行详细的堆分析。它会生成一个图表，显示随时间的堆使用情况，包括有关程序的哪些部分负责最多内存分配的信息。该图由文本或 HTML 文件补充，其中包含用于确定分配最多内存的位置的更多信息。Massif 运行程序的速度比正常速度慢 20 倍。

[Helgrind](https://valgrind.org/info/tools.html#helgrind)：Helgrind 是一个线程调试器，可以在多线程程序中发现数据竞争。它查找由多个 (POSIX p-) 线程访问的内存位置，但找不到一致使用的 (pthread_mutex_) 锁。这样的位置表明线程之间缺少同步，并且可能导致难以发现的时间相关问题。它对任何使用 pthread 的程序都很有用。

[DRD](https://valgrind.org/info/tools.html#drd)：DRD 是一种用于检测多线程 C 和 C++ 程序中的错误的工具。该工具适用于任何使用 POSIX 线程原语或使用构建在 POSIX 线程原语之上的线程概念的程序。虽然 Helgrind 可以检测锁定顺序违规，但对于大多数程序，DRD 需要更少的内存来执行其分析。

[DHAT](https://valgrind.org/info/tools.html#dhat)：DHAT 是用于检查程序如何使用其堆分配的工具。它跟踪分配的块，并检查每个内存访问以找到它是哪个块（如果有的话）。它带有一个 GUI，以方便探索配置文件结果。

[Experimental Tools](https://valgrind.org/info/tools.html#experimental)：实验性工具，不具体介绍，感兴趣可以去官网了解。

[Other Tools](https://valgrind.org/info/tools.html#others)：其他工具，不具体介绍，感兴趣可以去官网了解。

2. Valgrind 被设计成尽可能的非侵入性。它直接与现有的可执行文件一起工作。无需重新编译、重新链接或以其他方式修改要检查的程序。

3. 可以使用`--tool`选项来决定使用哪个Valgrind工具。默认是`Memcheck`。

# 安装

下载地址：https://valgrind.org/downloads/

```shell
wget https://sourceware.org/pub/valgrind/valgrind-3.19.0.tar.bz2
tar -jxvf valgrind-3.19.0.tar.bz2
cd valgrind-3.19.0
./configure
make
make install
```



## 使用

1. 编译带调试信息`-g`的程序，以便 Memcheck 的错误消息包含准确的行号。不建议使用`-O2`编译优化选项，`-O0`和`-O1`都OK，但`-O1`会更快一些。

   ```cpp
   #include <iostream>
   using namespace std;
   
   void Func1()
   {
       int *a = new int(10);
   }
   
   int main(int argc, char** argv)
   {
       Func1();
       return 0;
   }
   ```

   ```shell
   g++ -g -O1 main.cpp -o a.out
   ```

   

2. 使用`Memcheck`工具运行你的程序。

Memcheck 是默认工具。该`--leak-check` 选项打开详细的内存泄漏检测器。

```shell
valgrind --leak-check=yes a.out arg1 arg2
```

更多选项，点击官网链接：https://valgrind.org/docs/manual/manual-core.html#manual-core.report

使用`Memcheck`工具运行程序，会慢很多，会消耗更多的内存。

如果你的程序是长期运行的，使用valgrind工具时，不要使用`kill -9 pid`来停止程序，应该使用`kill pid`，以便生成报告。

```shell
valgrind --leak-check=yes ./a.out
```

报告如下：

```text
==2225382== Memcheck, a memory error detector
==2225382== Copyright (C) 2002-2022, and GNU GPL'd, by Julian Seward et al.
==2225382== Using Valgrind-3.19.0 and LibVEX; rerun with -h for copyright info
==2225382== Command: ./a.out
==2225382== 
==2225382== 
==2225382== HEAP SUMMARY:
==2225382==     in use at exit: 4 bytes in 1 blocks
==2225382==   total heap usage: 2 allocs, 1 frees, 72,708 bytes allocated
==2225382== 
==2225382== 4 bytes in 1 blocks are definitely lost in loss record 1 of 1
==2225382==    at 0x483CFE3: operator new(unsigned long) (vg_replace_malloc.c:422)
==2225382==    by 0x10919A: Func1() (main.cpp:6)
==2225382==    by 0x1091AC: main (main.cpp:11)
==2225382== 
==2225382== LEAK SUMMARY:
==2225382==    definitely lost: 4 bytes in 1 blocks
==2225382==    indirectly lost: 0 bytes in 0 blocks
==2225382==      possibly lost: 0 bytes in 0 blocks
==2225382==    still reachable: 0 bytes in 0 blocks
==2225382==         suppressed: 0 bytes in 0 blocks
==2225382== 
==2225382== For lists of detected and suppressed errors, rerun with: -s
==2225382== ERROR SUMMARY: 1 errors from 1 contexts (suppressed: 0 from 0)
```

+ `==2225382==`：2225382是进程ID。
+ `HEAP SUMMARY`：通过这个可以观察有多少栈被分配和释放。下面还有详细的信息表明在哪里没有释放。
+ `LEAK SUMMARY`：内存泄漏的摘要。





