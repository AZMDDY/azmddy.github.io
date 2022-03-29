# CMake Day 2 —— 指定 C/C++的标准

我们可以在 CMake 代码中设置正确的标志，以启动对特定 C/C++标准的支持。最简单的是使用`CMAKE_CXX_STANDARD`变量。

**注意：要在`add_executable`之前，添加对`CMAKE_CXX_STANDARD`的声明。**

脚本中`set`是将普通变量、缓存变量或者环境变量设置为指定的值。

```CMakeLists.txt
# CMake的最小版本要求
cmake_minimum_required(VERSION 3.0.0)
# 项目名称以及版本号
project(demo VERSION 0.1.0)

#启动对C++14标准的支持
set(CMAKE_CXX_STANDARD 14)

# 显式要求指明支持C++标准
set(CMAKE_CXX_STANDARD_REQUIRED True)

# 启动对C11标准的支持
# set(CMAKE_C_STANDARD 11)
# 显式要求指明支持C标准
# set(CMAKE_C_STANDARD_REQUIRED True)

#设置可执行程序
add_executable(demo main.cpp)
```
