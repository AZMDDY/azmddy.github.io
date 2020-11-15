# linux搭建gitlab服务

> 使用docker 搭建gitlab服务。

<!-- more -->

```shell
docker pull gitlab/gitlab-ce
# docker pull ulm0/gitlab # 用于ARM
docker run --detach --hostname host_name --publish 4334:80 --name gitlab --restart unless-stopped ulm0/gitlab
# host_name为域名或者公网ip
# 4334:80是外部4334端口映射到docker的80端口
docker ps # 查看gitlab运行状态
# 如果发现一直重启查看日志
docker logs gitlab
# 通过公网ip和端口查看自己搭建的gitlab网站。
```