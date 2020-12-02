# CMake Day 4 —— 设置头文件路径和链接库

## 设置头文件搜索路径

在项目中我们会经常会调用头文件（自己写的或者第三方库的），我们首先可以通过相对路径的方式去调用，例如`#include "../../xxx.h"`，但这样不灵活，如果被调用的头文件位置发生了变动，那就需要去调用的地方一一更改。在CMake代码中，我们可以通过`include_directories`和`target_include_directories`命令去包含头文件搜索路径，这样在代码中可以直接调用头文件，而不需要加路径。

语法：
```text
include_directories([AFTER|BEFORE] [SYSTEM] dir1 [dir2 ...])

target_include_directories(<target> [SYSTEM] [BEFORE]
  <INTERFACE|PUBLIC|PRIVATE> [items1...]
  [<INTERFACE|PUBLIC|PRIVATE> [items2...] ...])

```
这里的相对路径将会被解释为相对于当前源目录。

`include_directories`是全局包含的，项目中所有子目录都能够引用。
`target_include_directories`是针对某个二进制文件的，能够更好的控制访问的粒度。

`AFTER`:表示指定目录会附加到当前目录列表之后，默认是`AFTER`；

`BEFORE`:表示指定目录会添加到当前目录之前；

`SYSTEM`:表示指定目录是系统包含目录；

`<target>`:是add_executable()或者add_library()创建的目标；

`PRIVATE`: 私有，指这里引用的头文件仅仅被这个目标使用，目标不会对外暴露引用的头文件；

`PUBLIC`: 公有，指这里引用的头文件不仅被这个目标使用，目标还会对外暴露引用的头文件;

`INTERFACE`:接口，指这里引用的头文件不仅被这个目标使用，但目标会对外暴露引用的头文件;


我们可以通过`INCLUDE_DIRECTORIES`(PUBLIC, PRIVATE)和`INTERFACE_INCLUDE_DIRECTORIES`(PUBLIC, INTERFACE)属性查看添加的头文件搜索路径。

用法：
```CMakeLists.txt
include_directories(./include)
include_directories(./include/gtest)
include_directories(BEFORE ./include/gmock)

# 打印指定的头文件搜索路径
get_property(dirs DIRECTORY ${CMAKE_SOURCE_DIR} PROPERTY INCLUDE_DIRECTORIES)
message("${dirs}")
```

```CMakeLists.txt
target_include_directories(demo PUBLIC ./person)

# 打印指定的头文件搜索路径
get_property(public_private_dirs TARGET demo PROPERTY INCLUDE_DIRECTORIES)
message("public_private_dirs: ${public_private_dirs}")

get_property(public_interface_dirs TARGET person PROPERTY INTERFACE_INCLUDE_DIRECTORIES)
message("public_interface_dirs: ${public_interface_dirs}")
```

结果：

```text
public_private_dirs: /home/Pro/cmake-demo/cmake-day-4/person/../add
public_private_dirs: /home/Pro/cmake-demo/cmake-day-4/./person
public_interface_dirs: /home/Pro/cmake-demo/cmake-day-4/person/../print
```

## 链接库

当需要调用第三方库时，可以使用`link_directories()/target_link_directories()`和`target_link_libraries()`来指定链接器搜索路径和需要链接的库。

语法：
```text
link_directories([AFTER|BEFORE] directory1 [directory2 ...])

target_link_directories(<target> [BEFORE]
  <INTERFACE|PUBLIC|PRIVATE> [items1...]
  [<INTERFACE|PUBLIC|PRIVATE> [items2...] ...])
```
这里的相对路径将会被解释为相对于当前源目录。

他们指定的路径将会被`target_link_libraries()`直接使用。

`link_directories`是全局的，`target_link_directories`是针对某个二进制文件的，能够更好的控制访问的粒度。

`PRIVATE`: 私有，指这里引用的库文件仅仅被这个目标使用，目标不会对外暴露引用的库文件；

`PUBLIC`: 公有，指这里引用的库文件不仅被这个目标使用，目标还会对外暴露引用的库文件;

`INTERFACE`:接口，指这里引用的库文件不被这个目标使用，但目标会对外暴露引用的库文件;

```text
target_link_libraries(<target>
                      <PRIVATE|PUBLIC|INTERFACE> <item>...
                     [<PRIVATE|PUBLIC|INTERFACE> <item>...]...)
```

`<target>`:是add_executable()或者add_library()创建的目标；

`PRIVATE`: 私有，指被链接的库(item)仅仅被目标(target)使用，目标(target)不对外暴露这个被链接的库(item)的接口；

`PUBLIC`: 公有，指被链接的库(item)不仅被目标(target)使用，目标(target)还对外暴露这个被链接的库(item)的接口;

`INTERFACE`:接口，指被链接的库(item)不被目标(target)使用，但目标(target)对外暴露这个被链接的库(item)的接口;

用法：

```CMakeLists.txt
add_executable(demo main.cpp)

target_include_directories(demo PUBLIC ./person)

target_link_directories(demo PUBLIC ./person)

target_link_libraries(demo PUBLIC person)
```

## 完整示例

[https://github.com/AZMDDY/cmake-demo/tree/main/cmake-day-4](https://github.com/AZMDDY/cmake-demo/tree/main/cmake-day-4)