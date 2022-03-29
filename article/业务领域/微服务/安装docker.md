---
sort: 1
---

# 安装 docker

【环境信息】: ubuntu20.04, amd64

```bash
# 允许通过HTTPS使用存储库
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
# 添加阿里云提供的镜像源以便于加快国内安装速度，先添加相应的密钥
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
# 添加阿里云源
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
# 添加用户到docker用户组
sudo usermod -aG docker <user>

# 更换阿里云镜像源
sudo vim /etc/docker/daemon.json
# 加入以下内容：
# {
#	"registry-mirrors": ["https://n6syp70m.mirror.aliyuncs.com"]
# }
sudo service docker restart
```

安装后，可能出现`WARNING: No swap limit support`的警告，解决方案如下：

```bash
sudo vim /etc/default/grub
# 设置GRUB_CMDLINE_LINUX的值如下：
# GRUB_CMDLINE_LINUX="cgroup_enable=memory swapaccount=1"
sudo update-grub
sudo reboot
```
