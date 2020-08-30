---
layout: post
title: 'linux监控文件或文件夹变化的shell脚本'
date: 2020-03-22
categories: Linux
---

> 本地提交文件到Git服务器，脚本监控仓库变化，获取最新更改信息，实时发送邮件给仓库所有者。

<!-- more -->

安装`inotify-tools`。

```shell
sudo apt-get install inotify-tools
```

```shell
#!/bin/sh

# 监视的文件或目录
filename=$1

# 监视发现有增、删、改时执行的脚本
script=$2

inotifywait -mrq --format '%e' --event create,delete,modify  $filename | while read event
  do
      case $event in MODIFY|CREATE|DELETE) bash $script ;;
      esac
  done
```

这个脚本的功能是循环监听文件或目录的增删改事件，当事件发生执行设置的脚本文件。

`inotifywait`选项：

```shel
-h|--help     	
			显示帮助信息
@<file>       	
			排除不需要监视的文件，可以指定相对路径或绝对路径
--fromfile <file>
             从文件读取需要监视的文件或排除的文件，一个文件一行，排除的文件以@开头
-m|--monitor  	
			收到单个事件不退出，一直监视，默认：收到单个事件后立即退出
-d|--daemon   	
			跟--monitor一样，除了是在后台运行，需要指定--outfile把事情输出到一个文件。也意味着使用了--syslog
-o|--outfile <file>
             输出事件到<file>而不是stdout
-s|--syslog   	
			输出错误信息到syslog而不是stderr
-r|--recursive	
			监控目录下所有子目录，创建新的子目录也会被监控
-q|--quiet    	
			不输出详细信息
--exclude <pattern>
             不处理正则表达式匹配到的文件的任何事件，大小写敏感
--excludei <pattern>
             不处理正则表达式匹配到的文件的任何事件，大小写敏感
 -t <seconds>, --timeout <seconds>
             设置超时时间，如果为0，则一直等待事件
 -e <event>, --event <event>
             指定监听的事件，可以多次指定，如果省略，则监听所有事件
 -c, --csv
 			输出为csv格式
 --timefmt <fmt>	
 			指定时间格式，用于--format选项中的%T格式
 --format <fmt>	指定输出格式
     %w 表示发生事件的目录
     %f 表示发生事件的文件
     %e 表示发生的事件
     %Xe 事件以“X”分隔
     %T 使用由--timefmt定义的时间格式
```

`inotifywait`事件：

```shel
access 读取文件或目录

modify 写文件或目录

attrib 更改文件或目录属性

close_write 文件在写后关闭

close_nowrite 文件在只读模式下被读后关闭
             
close  文件或目录被关闭

open   文件或目录被打开

moved_from  文件或者目录移出监视目录

moved_from  文件或目录从监视目录移出

move 文件或目录移动

create 创建文件或目录

delete 删除文件或目录

delete_self 删除后不再监听此文件或目录

unmount 文件系统取消挂载，此后不在监听该文件系统
```
