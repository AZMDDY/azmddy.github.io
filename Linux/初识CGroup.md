# 初识CGroup

> `CGroup` 是 `Control Groups `的缩写，是 Linux 内核提供的一种可以限制、记录、隔离进程组 (`process groups`) 所使用的物力资源 (如`cpu`, `memory`,`i/o` 等等) 的机制。

## 树莓派4启用CGroup

启动CGroup功能

```shell
# 官方系统arm64
sudo vim /boost/cmdline.txt
# 在文件尾，追加 cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory
docker info
...
WARNING: No swap limit support
WARNING: No cpu cfs quota support
WARNING: No cpu cfs period support
# 这些警告可以忽略
```

## CGroup的子系统

具体的资源管理功能被称为`CGroup`子系统或控制器，比如CPU 时间、系统内存和网络带宽等。



| 子系统  | 说明                                                         |
| :-----: | :----------------------------------------------------------- |
|  blkio  | 为块设备设定输入/输出限制，比如物理设备（磁盘，固态硬盘，USB 等等） |
|   cpu   | 使用调度程序提供对CPU的cgroup任务访问                        |
| cpuacct | 自动生成cgroup中任务所使用的CPU报告                          |
| cpuset  | 为cgroup中的任务分配独立CPU（在多核系统）和内存节点          |
| devices | 允许或者拒绝cgroup中的任务访问设备                           |
| freezer | 挂起或者恢复cgroup中的任务                                   |
| memory  | 设定cgroup中任务使用的内存限制，并自动生成由那些任务使用的内存资源报告 |
| net_cls | 使用等级识别符（classid）标记网络数据包，可允许Linux流量控制程序（tc）识别从具体cgroup中生成的数据包 |
