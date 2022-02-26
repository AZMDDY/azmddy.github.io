# CMake Day 6 —— 安装规则(install rules)

在CMake中，安装是指将二进制文件、库文件和头文件等安装到指定目录中。

语法：

```CMakeLists.txt
install(TARGETS <target>... [...])
install({FILES | PROGRAMS} <file>... [...])
install(DIRECTORY <dir>... [...])
install(SCRIPT <file> [...])
install(CODE <code> [...])
install(EXPORT <export-name> [...])
```

该命令是为项目配置安装规则。在项目中会按照install()命令调用的顺序执行按照规则。

首先解释几个选项：

+ `DESTINATION`：指定要安装到的目录，如果是相对路径，则是相对于`CMAKE_INSTALL_PREFIX`变量的，如果是绝对路径，则直接使用，由于cpack的安装程序生成器不支持绝对路径，所有最好使用相对路径。
+ `PERMISSIONS`: 指定安装文件的权限，有效权限有`OWNER_READ`，`OWNER_WRITE`，`OWNER_EXECUTE`，`GROUP_READ`，`GROUP_WRITE`，`GROUP_EXECUTE`，`WORLD_READ`，`WORLD_WRITE`，`WORLD_EXECUTE`，`SETUID`和`SETGID`。在某些平台上没有意义的权限将被忽略。
+ `CONFIGURATIONS`: 指定安装规则适用的构建配置(Debug, Relase等)，如果要为Debug和Relase单独配置安装路径，如下：

```CMakeLists.txt
install(TARGETS target
        CONFIGURATIONS Debug
        RUNTIME DESTINATION Debug/bin)
install(TARGETS target
        CONFIGURATIONS Release
        RUNTIME DESTINATION Release/bin)
```
+ `EXCLUDE_FROM_ALL`: 指定该文件从完整安装中排除。
+ `RENAME`: 指定已安装文件的名称，该名称可能与原始文件不同。仅当命令安装了单个文件时，才允许重命名.

## 安装二进制文件

语法：
```CMakeLists.txt
install(TARGETS targets... [EXPORT <export-name>]
        [[ARCHIVE|LIBRARY|RUNTIME|OBJECTS|FRAMEWORK|BUNDLE|
          PRIVATE_HEADER|PUBLIC_HEADER|RESOURCE]
         [DESTINATION <dir>]
         [PERMISSIONS permissions...]
         [CONFIGURATIONS [Debug|Release|...]]
         [COMPONENT <component>]
         [NAMELINK_COMPONENT <component>]
         [OPTIONAL] [EXCLUDE_FROM_ALL]
         [NAMELINK_ONLY|NAMELINK_SKIP]
        ] [...]
        [INCLUDES DESTINATION [<dir> ...]]
        )
```

常用参数：

+ `ARCHIVE`: 静态库
+ `LIBRARY`: 动态库
+ `RUNTIME`: 可执行文件

如果没有指定下列目录的路径，则使用内置的默认值：

|Target|Variable|Built-In Default|
|------|--------|----------------|
|RUNTIME|${CMAKE_INSTALL_BINDIR}|bin|
|LIBRARY|${CMAKE_INSTALL_LIBDIR}|lib|
|ARCHIVE|${CMAKE_INSTALL_LIBDIR}|lib|
|PRIVATE_HEADER|${CMAKE_INSTALL_INCLUDEDIR}|include|
|PUBLIC_HEADER|${CMAKE_INSTALL_INCLUDEDIR}|include|

## 安装文件和目录

语法：
```CMakeLists.txt
install(<FILES|PROGRAMS> files...
        TYPE <type> | DESTINATION <dir>
        [PERMISSIONS permissions...]
        [CONFIGURATIONS [Debug|Release|...]]
        [COMPONENT <component>]
        [RENAME <name>] [OPTIONAL] [EXCLUDE_FROM_ALL])

install(DIRECTORY dirs...
        TYPE <type> | DESTINATION <dir>
        [FILE_PERMISSIONS permissions...]
        [DIRECTORY_PERMISSIONS permissions...]
        [USE_SOURCE_PERMISSIONS] [OPTIONAL] [MESSAGE_NEVER]
        [CONFIGURATIONS [Debug|Release|...]]
        [COMPONENT <component>] [EXCLUDE_FROM_ALL]
        [FILES_MATCHING]
        [[PATTERN <pattern> | REGEX <regex>]
         [EXCLUDE] [PERMISSIONS permissions...]] [...])
```


当通过命令行使用`cmake --install .`或者`make install`时，将会运行安装步骤。如果要指定安装的根目录，需要使用`cmake --install --prefix "/home/user/installdir" .`来指定。

