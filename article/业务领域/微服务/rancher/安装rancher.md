---
sort: 1
---

# 安装rancher(v2.5.12)

1. 准备Linux主机：准备一台已安装64位Ubuntu 16.04或18.04的Linux主机（或其他[Rancher所支持的Linux发行版](https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.3.4/)），要求至少4GB内存。在该主机上安装[Rancher支持的Docker版本](https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.3.4/)。

2. 在主机上执行以下Docker命令，完成Rancher的安装与运行:

   ```shell
   sudo docker run --privileged -d --restart=unless-stopped -p 80:80 -p 443:443 -v <主机路径>:/var/lib/rancher/ rancher/rancher:v2.5.12
   
   # sudo docker run --privileged -d --restart=unless-stopped -p 8080:80 -p 8443:443 -v /home/volume/rancher:/var/lib/rancher/ rancher/rancher:v2.5.12
   ```

   