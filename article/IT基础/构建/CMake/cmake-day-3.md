# CMake Day 3 —— 编译二进制或库

我们可以通过`add_executable`命令来将项目编译成一个二进制文件，通过`add_library`将项目编译编译成一个库。

项目结构如下：

```text
demo
​ ├── build
    ​ └── lib
    ​ └── bin
​ ├── CMakeLists.txt
​ ├── add.h
​ ├── add.cpp
​ └── main.cpp
```

```CMakeLists.txt
# CMake的最小版本要求
cmake_minimum_required(VERSION 3.0.0)
# 项目名称以及版本号
project(demo VERSION 0.1.0)

#启动对C++14标准的支持
set(CMAKE_CXX_STANDARD 14)

# 显式要求指明支持C++标准
set(CMAKE_CXX_STANDARD_REQUIRED True)

# 归档静态库到指定目录
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/build/lib)
# 归档动态库到指定目录
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/build/lib)
# 归档可执行文件到指定目录
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_SOURCE_DIR}/build/bin)

#设置可执行程序
add_executable(demo main.cpp)

#设置动态库
add_library(add SHARED add.cpp)
```


## add_executable

语法：
```text
add_executable(<name> [WIN32] [MACOSX_BUNDLE]
               [EXCLUDE_FROM_ALL]
               [source1] [source2 ...])
```

名为`<name>`的可执行文件将会从源文件列表中被构建，其中`<name>`需要在整个项目中全局唯一，构建出的的实际文件名是基于平台的约定构建的，例如:`<name>.exe`或者`<name>`。

默认情况下，可执行文件将会在该项目的构建树目录中被创建。可以通过`CMAKE_RUNTIME_OUTPUT_DIRECTORY`来改变可执行文件的归档路径。

+ CMAKE_RUNTIME_OUTPUT_DIRECTORY：是归档可执行文件到指定目录；

`WIN32`是指在Windows上使用WinMain入口点创建可执行文件。
`MACOSX_BUNDLE`是指在macOS或IOS上构建的可执行文件。

## add_library

语法：
```text
add_library(<name> [STATIC | SHARED | MODULE]
            [EXCLUDE_FROM_ALL]
            [<source>...])
```

名为`<name>`的库将会从源文件列表中被构建，其中`<name>`需要在整个项目中全局唯一，构建出的的实际文件名是基于平台的约定构建的，例如`libdemo.a/libdemo.so`或者`demo.lib/demo.dll`。

通过指定`STATIC`，`SHARED`，`MODULE`来指定要创建库的类型。`STATIC`是静态库，`SHARED`是动态库，`MODULE`是未链接到其它目标的插件，但可以使用`dlopen`等方式在运行期间被动态加载。

如果没有明确指定库的类型，可以通过`BUILD_SHARED_LIBS`的值是否为`ON`来指定库的类型是`SHARED`还是`STATIC`，注意：这个参数是全局标志，默认是`OFF`。

默认情况下，库文件将会在该项目的构建树目录中被创建，例如：项目中需要将不同文件夹中的代码编译成库，构建目录中会生成对于的构建树，库文件就在对应的目录中。但是我们可以通过`CMAKE_ARCHIVE_OUTPUT_DIRECTORY`,`CMAKE_LIBRARY_OUTPUT_DIRECTORY`参数来改变库文件生成的路径。

+ CMAKE_ARCHIVE_OUTPUT_DIRECTORY：是归档静态库到指定目录；
+ CMAKE_LIBRARY_OUTPUT_DIRECTORY: 是归档动态库到指定目录；
