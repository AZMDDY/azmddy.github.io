# cc1plus: error: unrecognized command line option ‘-fdump-class-hierarchy’

【问题描述】：

在Linux环境下，使用`g++ -fdump-class-hierarchy main.cpp`打印类的继承关系和虚表结构时，出现`cc1plus: error: unrecognized command line option ‘-fdump-class-hierarchy’`  。



【问题现象】：

![image-20220303195311289](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220303195311289.png)



【问题原因】：

我的环境的GCC版本是`GCC9.3`，这个选项在GCC7.x及更早的版本中可使用，在GCC8.0中被删除。



【解决办法】：

使用`g++ -fdump-lang-class main.cpp `。

![image-20220303195410248](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220303195410248.png)



【参考】：

+ [c++ - cc1plus.exe：错误：无法识别的命令行选项"-fdump-class-hierarchy" 与 CMake - 堆栈溢出 (stackoverflow.com)](https://stackoverflow.com/questions/54021902/cc1plus-exe-error-unrecognized-command-line-option-fdump-class-hierarchy-wi)