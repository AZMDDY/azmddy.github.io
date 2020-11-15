# 树莓派4 Ubuntu20.4设置静态IP

> 树莓派4安装Ubuntu20.4后，设置静态IP。

在Ubuntu20.4中需要用`NetPlan`去管理配置网络。

## 查看网卡信息

```shell
# ubuntu20.4抛弃了ifconfig，安装一下
sudo apt-get install net-tools
ifconfig
```

## 配置静态IP

```shell
sudo cp /etc/netplan/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml.bk
sudo vim /etc/netplan/50-cloud-init.yaml
# 修改内容如下：
network:
    ethernets:
        eth0:
            addresses:
            - 192.168.100.211/24
            gateway4: 192.168.100.1
            nameservers:
                addresses: [8.8.8.8, 114.114.114.114]
                search: []
            optional: true
    version: 2
# ech0: 网络接口
# addresses: 静态IP
# gateway4: IPv4网关
# nameservers: DNS域名
sudo netplan apply # 应用配置
```
