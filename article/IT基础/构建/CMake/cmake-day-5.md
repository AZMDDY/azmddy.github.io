# CMake Day 5 —— 从CMakeLists.txt传递变量到源文件

语法：

```text
configure_file(<input> <output>
               [COPYONLY] [ESCAPE_QUOTES] [@ONLY]
               [NO_SOURCE_PERMISSIONS]
               [NEWLINE_STYLE [UNIX|DOS|WIN32|LF|CRLF] ])
```

将`<input>`文件复制到`<output>`文件，并在输入的文件内容中替换`@VAR@`或`${VAR}`的变量值，每个变量的引用都会被替换为该变量当前的值，如果变量未定义，则为空字符串。

`<input>`文件中定义变量替换的形式如下：

```C++
#cmakedefine VAR ...
```

这将会被替换成：

```C++
#define VAR ...
```

或者:

```C++
/* #undef VAR */
```

当`input`文件被修改时，需要运行CMake以重新配置文件。

+ `<input>`：输入文件的路径，相对路径是相对于`CMAKE_CURRENT_SOURCE_DIR`，必须是文件，不能是目录；
+ `<output>`：输入文件或目录的路径，相对路径是相对于`CMAKE_CURRENT_BINARY_DIR`，如果是现有的目录，则输出文件和输入文件同名；
+ `COPYONLY`: 表示复制文件，而不替换任何变量引用和其它内容；
+ `ESCAPE_QUOTES`: 表示用反斜杠替换任何引号；
+ `@ONLY`：仅仅替换`@VAR@`形式的变量引用；
+ `NO_SOURCE_PERMISSIONS`：不会将原始文件权限转移到副本，复制的文件权限默认644，PS:有些CMake版本不支持这个参数；
+ `NEWLINE_STYLE <style>`：指定输出文件的换行形式；

`CMAKE_CURRENT_BINARY_DIR`：cmake的构建目录；


示例：

```CMakeLists.txt
cmake_minimum_required(VERSION 3.10.0)

project(demo)

include_directories(${CMAKE_SOURCE_DIR})
include_directories(${CMAKE_CURRENT_BINARY_DIR})

set(VAR1 "1222")
set(VAR2 2)
set(VAR3)
set(VAR4 "\"QAZ\"")
set(VAR5 "BABA")

configure_file(Config.h.in Config.h)

configure_file(Config.h.in Config1.h ESCAPE_QUOTES @ONLY NEWLINE_STYLE CRLF)
configure_file(Config.h.in ./ COPYONLY)
add_executable(demo main.cpp)

```

[https://github.com/AZMDDY/cmake-demo/tree/main/cmake-day-5](https://github.com/AZMDDY/cmake-demo/tree/main/cmake-day-5)