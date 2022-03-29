# 使用 CLion 开发 Qt

> 习惯使用 CLion 开发，其实 IDE 都无所谓，根本上还是怎么使用 CMake + Qt。

基础的`CMakeLists.txt`如下：

```cmake
cmake_minimum_required(VERSION 3.21)

set(PRJECT_NAME qtdemo)
project(${PRJECT_NAME})

set(CMAKE_CXX_STANDARD 14)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_AUTOUIC ON)

set(CMAKE_PREFIX_PATH "/Users/zhengzhibing/Qt/6.2.3/macos")

find_package(Qt6 COMPONENTS
        Core
        Gui
        Widgets
        REQUIRED)

add_executable(${PRJECT_NAME} main.cpp)
target_link_libraries(${PRJECT_NAME}
        Qt::Core
        Qt::Gui
        Qt::Widgets
        )
```

通过`find_package`找到自己要使用的库，并通过`target_link_libraries`链接。

为了正确找到 qt 的库，需要设置`CMAKE_PREFIX_PATH`，CMake 必须找到 Qt 的安装目录。

源码如下：

```cpp
#include <QApplication>
#include <QPushButton>

int main(int argc, char** argv)
{
    QApplication a(argc, argv);
    QPushButton button("Hello world!", nullptr);
    button.resize(200, 100);
    button.show();
    return QApplication::exec();
}
```

编译运行后的结果：

![image-20220305201545197](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220305201545197.png)
