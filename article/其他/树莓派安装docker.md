# 树莓派安装 docker

脚本安装 docker

```shell
# 树莓派官方系统(arm64)
curl -sSL https://get.docker.com | sh

# 如果是ubuntu20.4
# sudo add-apt-repository "deb [arch=arm64] https://download.docker.com/linux/ubuntu bionic stable"
# sudo apt-get install docker-ce

# 非root用户使用docker, 重启生效
sudo usermod -aG docker <user_name>

 sudo systemctl enable docker

# 更换国内镜像源
sudo vim /etc/docker/daemon.json
```

```json
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

## docker 安装 ubuntu

```shell
# 拉取ubuntu镜像
docker pull ubuntu
# 查看本地镜像
docker images
# 运行容器
docker run -itd --name demo ubuntu
# 进入容器
docker exec -it demo /bin/bash
# 查看容器运行
docker ps
```
