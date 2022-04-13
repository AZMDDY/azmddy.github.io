---
sort: 1
---



# 编译GoogleTest

> 在Mac和Linux中编译GoogleTest。

GoogleTest需要符合C++11或者更高标准的代码库和编译器。

编译器要求：

+ gcc 5.0+
+ clang 5.0+ (Xcode 9.3+)
+ MSVC 2015+

可以使用`Bazel`和`CMake`构建GoogleTest，这里使用`CMake`进行构建。

如果没有安装CMake，参考[CMake官方安装指南](https://cmake.org/install)

```shell
weget -c -t 100 -T 30 https://github.com/google/googletest/archive/refs/tags/release-1.11.0.tar.gz
tar -zxvf release-1.11.0.tar.gz
cd ../googletest-release-1.11.0
# INSTALL_PREFIX="$(pwd)/../thirdparty"
cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX="$INSTALL_PREFIX" .
make -j 2
make install
```







