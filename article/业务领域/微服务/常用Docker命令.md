---
sort: 2
---

# 常用 Docker 命令

- 查看镜像

```Bash
docker image ls
```

- 拉取镜像

```Bash
# docker image pull [OPTIONS] NAME[:TAG|@DIGEST]
docker image pull ubuntu
```

- 删除镜像

```Bash
# docker image rm [OPTIONS] IMAGE [IMAGE...]
docker image rm ubuntu:14.04
```

- 创建容器

```Bash
# docker container create [OPTIONS] IMAGE [COMMAND] [ARG...]
docker container create hello-world
# 容器还没有运行
```

- 查看容器

```Bash
# 默认只展示正在运行的容器
# docker container ls [OPTIONS]
docker container ls -a
```

- 以交互命令的形式从镜像中启动容器

```Bash
# docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]
docker container run -ti ubuntu /bin/bash
```

- 后台运行一个容器

```Bash
docker container run -tid ubuntu /bin/bash
```

- 进入一个正在运行的容器

```Bash
# docker container exec [OPTIONS] CONTAINER COMMAND [ARG...]
docker exec -ti 2ff1ee267201 bash
```

- 停止正在运行的容器

```Bash
# docker container stop [OPTIONS] CONTAINER [CONTAINER...]
docker stop 2ff1ee267201
```

- 重启容器

```Bash
# docker container restart [OPTIONS] CONTAINER [CONTAINER...]
docker container restart 2ff1ee267201
```

- 删除容器

```Bash
# 不能删除一个正在运行的容器，需要先stop
# docker container rm [OPTIONS] CONTAINER [CONTAINER...]
docker container rm 2ff1ee267201
```

- 查看容器的详细信息

```Bash
# docker container inspect [OPTIONS] CONTAINER [CONTAINER...]
docker container inspect 2ff1ee267201
```

- 查看容器日志

```Bash
# docker container logs [OPTIONS] CONTAINER
docker container logs 2ff1ee267201
```

- 查看容器中的进程

```Bash
# docker container top CONTAINER [ps OPTIONS]
docker container top 2ff1ee267201
```
