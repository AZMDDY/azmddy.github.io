# glog-1

> GLog 是一个应用程序级的日志记录的库，它提供了基于C++样式流和各种帮助程序宏的日志记录API,你可以很简单的将信息传输到`LOG`来记录消息。



## 下载安装

源码下载地址: https://github.com/google/glog.git

安装方法：
终端进入glog目录，以root身份运行以下命令：

```sh
$ ./autogen.sh && ./configure && make && make install
# glog的头文件位于/usr/local/include
# glog的库文件位于/usr/local/lib
```

## 严重程度

GLog允许你制定消息的严重程度，一共有四个级别:`INFO`, `WARNING`, `ERROR`, `FATAL`。记录`FATAL`消息会终止程序(在记录消息之后),在GLog记录的消息的开头以`I`, `W`, `E`, `F`来标示信息的严重级别；

## 日志格式

默认情况下日志会写入本地`/tmp/`文件夹中，文件名格式：`<program name>.<host name>.<user name>.log.<Severity level>.<date>-<time>.<pid>`;

默认情况下。GLog还会将`ERROR`和`FATAL`错误记录到`stderr`消息中(会在终端打印出来);

在终端打印出的消息的格式:
`<Serverity level><number> <time>.<number> <pid> <file>:<line number> <messages>`

```
#include <glog/logging.h>
int main(int argc, char **argv) {
    google::InitGoogleLogging(argv[0]); // 初始化GLog库
    LOG(ERROR) << "There is error !!!";
    return 0;
}
```

![image_1d1vb501m315143k1j9eavfsp419.png-41kB](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image_1d1vb501m315143k1j9eavfsp419.png)

## 设置

### 设置存放Log的目录
如果我们想指定log文件输出位置，那么我们可以对GLog设置一下标志（FLAGS_log_dir）；

```cpp
#include <glog/logging.h>
int main(int argc, char **argv) {
    google::InitGoogleLogging(argv[0]); // 初始化GLog库
    FLAGS_log_dir = "./"; // 将日志文件输出到本地
    LOG(ERROR) << "There is error !!!";
    return 0;
}
```

在本地就会产生日志文件，日志文件有四个基本文件`<program name>.INFO`，`<program name>.WARNING`，`<program name>.ERROR`，`<program name>.FATAL`,这些文件都汇总了这四类日志信息；

### 设置只在终端显示Log

当我们只想将日志信息输出到`stderr`在终端中显示的时候,我们可以设置(FLAGS_logtostderr);
设置`FLAGS_logtostderr = 1`将使得日志信息记录到stderr而不会保存到本地日志文件中，及时你设置了`FLAGS_log_dir`;

### 设置记录Log到本地以及终端显示

当然我们可以鱼和熊掌兼得，我们可以通过设置`FLAGS_alsologtostderr = 1`将实现日志信息输出到stderr，并且会记录到本地日志文件；

### 设置记录到stderr的log的级别

这仅仅是对于记录Log到stderr中的设置；

当我们需要将WARNING等级的log记录到stderr时，我们可以通过设置`FLAGS_stderrthreshold = 1`,那么WARNING以及更高级别的Log将会记录到stderr中；`INFO`: 0, `WARNING`: 1, `ERROR`: 2 `FATAL`: 3;

### 设置需要记录log的级别

我们可以指定那些Log被记录（无论是在本地还是stderr）,通过设置`FLAGS_minloglevel = 0`标志，默认是0，设置这个标志表明，INFO以及更高级别的Log将会被记录；`INFO`: 0, `WARNING`: 1, `ERROR`: 2 `FATAL`: 3;

## 条件记录

我们可以使用`LOG_IF()`来到达有条件的输出日志的目的；

```cpp
int main(int argc, char **argv) {
    google::InitGoogleLogging(argv[0]); // 初始化GLog库
    FLAGS_logtostderr = 1; // 设置将Log记录到stderr
    for(int i = 0; i < 20; i++) {
        LOG_IF(INFO, i > 15) << "i > 15"; //当i > 15时，记录Log;
    }
    return 0;
}
```

## 周期记录

通过`LOG_EVERY_N()`实现周期性的输出日志，意思解释说，`LOG_EVERY_N()`执行n次才输出一次Log；

```cpp
int main(int argc, char **argv) {
    google::InitGoogleLogging(argv[0]); // 初始化GLog库
    FLAGS_logtostderr = 1; // 设置将Log记录到stderr
    for(int i = 0; i < 20; i++) {
        LOG_EVERY_N(INFO, 3) << "i: " << i; //每隔3次输出一次信息；
    }
    return 0;
}
```

## 条件加周期记录

通过`LOG_IF_EVERY_N`实现，当满足条件之后，每隔n次输出Log；

```cpp
int main(int argc, char **argv) {
    google::InitGoogleLogging(argv[0]); // 初始化GLog库
    FLAGS_logtostderr = 1; // 设置将Log记录到stderr
    for(int i = 0; i < 20; i++) {
        LOG_IF_EVERY_N(INFO, i > 10, 3) << "i > 10, i: " << i; //当i > 10之后，每隔3次输出一次信息；
    }
    return 0;
}
```

## 限制Log输出次数

通过`LOG_FIRST_N()`实现，只输出前n次信息；

```cpp
int main(int argc, char **argv) {
    google::InitGoogleLogging(argv[0]); // 初始化GLog库
    FLAGS_logtostderr = 1; // 设置将Log记录到stderr
    for(int i = 0; i < 20; i++) {
        LOG_FIRST_N(INFO, 4) << "i: " << i; // 输出前4次Log
    }
    return 0;
}
```

## 支持调试模式

调试模式的宏仅在调试模式下有效，在非调试模式编译时为空。
在宏前面加`D`就支持了调试模式；
`DLOG()`, `DLOG_IF()`, `DLOG_EVERY_N()`, ...

## 崩溃处理

当程序出现崩溃时，GLog也可以提供Bug定位支持。通过`google::InstallFailureSignalHandler()`安装信号处理程序，当程序出现崩溃时，会输出崩溃的位置等相关信息。

![image_1d1vg3l7h170r187n9c21lh5b1n1m.png-53.7kB](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image_1d1vg3l7h170r187n9c21lh5b1n1m.png)

按照箭头的方向去看崩溃的信息所在位置，GLog会一层一层的输出相关信息；

更具体的信息请参考官方文档。
