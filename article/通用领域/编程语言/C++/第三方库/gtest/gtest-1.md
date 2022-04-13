---
sort: 2
---



# gtest-1

> GoogleTest 是 Google 的 C++ 测试和模拟框架。

## 初步使用

下载构建好 GTest 之后，我们就可以开始在自己的项目中使用 GTest 了,首先我们需要在自己的工程中包含`#include"gtest/gtest.h"`，于此同时，我们在项目构建中需要链接 gtest 和 gtest_main 库以及头文件。pthread 库也应该包含到你的工程中，gtest 依赖于 pthread,这样我们就可以开始使用 GTest 了。

首先是初始化 GTest;

```cpp
#include <iostream>
#include <gtest/gtest.h>

int main(int argc, char **argv) {
    testing::InitGoogleTest(&argc, argv);
    std::cout << "hello world" << endl;
    return RUN_ALL_TESTS();
}
```

`testing::InitGoogleTest(&argc, argv);`：初始化 GoogleTest;

执行`RUN_ALL_TESTS()`将会运行你定义了的测试;

## 基本的概念

当使用 GTest 的时候，你去写一些断言来测试情况是否正确，断言的会产生三种结果：`success`,`nonfatal failure`和 `fatal failure`,当发生了一个（fatal failure）致命错误的时候，它会终止当前的程序，其他情况下，程序仍会正常运行。

## 断言（Assertions）

GTest 的断言是像函数调用一样的宏，当断言失败了，GTest 在终端打印出断言所在源文件以及所在行数，并且会输出失败信息，你也可以提供一个自定义的错误信息，这个错误信息将在 GTest 产生的错误信息后面打印出来;

### 断言的前缀

GTest 有两种类型的断言，它们的区别在于前缀，一种是`ASSERT_*`。另一种是`EXPECT_*`;

`ASSERT_`前缀的断言产生的错误将是`fatal failure`，这个将会中断程序的执行，对于很大威胁的调试而言，使用这个类型的断言是很明智的，但是这个断言有可能导致程序申请的资源没有被释放，造成内存泄露。

`EXPECT_`前缀的断言产生的错误是`non failure`，它并不会中断程序的执行，通常情况下可使用`EXPECT_*`是更好一点的，它能够一次性报告多个错误;

### 自定义错误信息的

我们可以通过`<<`操作符将自定义的错误信息添加到宏中;

```cpp
ASSERT_EQ(1, 2) << "1 and 2 are unequal";
```

对于任何能够作为输出流的内容都能够作为自定义的错误信息，对于`UNICODE`编码的内容将会被转化成`UTF-8`;

### 基础的断言

这些断言仅仅是测试条件是`true/false`;

|      Fatal assertion       |     Nonfatal assertion     |       Verifies       |
| :------------------------: | :------------------------: | :------------------: |
| `ASSERT_TRUE(condition);`  | `EXPECT_TRUE(condition);`  | `condition` is true  |
| `ASSERT_FALSE(condition);` | `EXPECT_FALSE(condition);` | `condition` is false |

### 两项比较

这个是用来比较两项内容的值的断言;

|     Fatal assertion      |    Nonfatal assertion    |    Verifies    |
| :----------------------: | :----------------------: | :------------: |
| `ASSERT_EQ(val1, val2);` | `EXPECT_EQ(val1, val2);` | `val1 == val2` |
| `ASSERT_NE(val1, val2);` | `EXPECT_NE(val1, val2);` | `val1 != val2` |
| `ASSERT_LT(val1, val2);` | `EXPECT_LT(val1, val2);` | `val1 < val2`  |
| `ASSERT_LE(val1, val2);` | `EXPECT_LE(val1, val2);` | `val1 <= val2` |
| `ASSERT_GT(val1, val2);` | `EXPECT_GT(val1, val2);` | `val1 > val2`  |
| `ASSERT_GE(val1, val2);` | `EXPECT_GE(val1, val2);` | `val1 >= val2` |

用于比较的两个值必须是同一种，否则会产生编译错误;

### 字符串比较

The assertions in this group compare two **C strings**. If you want to compare
two `string` objects, use `EXPECT_EQ`, `EXPECT_NE`, and etc instead.

|         Fatal assertion         |        Nonfatal assertio        |                         Verifies                         |
| :-----------------------------: | :-----------------------------: | :------------------------------------------------------: |
|   `ASSERT_STREQ(str1, str2);`   |   `EXPECT_STREQ(str1, str2);`   |         the two C strings have the same content          |
|   `ASSERT_STRNE(str1, str2);`   |   `EXPECT_STRNE(str1, str2);`   |        the two C strings have different contents         |
| `ASSERT_STRCASEEQ(str1, str2);` | `EXPECT_STRCASEEQ(str1, str2);` |  the two C strings have the same content, ignoring case  |
| `ASSERT_STRCASENE(str1, str2);` | `EXPECT_STRCASENE(str1, str2);` | the two C strings have different contents, ignoring case |

C 风格的字符串适合使用以上断言，而对于 String 风格的字符串，`ASSERT_EQ`和`EXPECT_EQ`之类的都是可以用的。
