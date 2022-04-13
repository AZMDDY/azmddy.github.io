# WARNING: IPv4 forwarding is disabled. Networking will not work.

> docker创建容器时报“WARNING: IPv4 forwarding is disabled. Networking will not work.”

```shell
# Ubuntu18.04 X86
sudo vim /etc/sysctl.conf 
# net.ipv4.ip_forward=1
# 重启network和docker服务
systemctl restart docker
```

