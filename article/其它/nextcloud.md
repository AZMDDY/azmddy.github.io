# docker + nextcloud搭建私有云(Linux)

> 使用docker+nextcloud可以快速的搭建私有云盘。

## 安装

```bash
# step0: 先安装docker，配置镜像拉取地址
# 安装docker-ce

# 允许通过HTTPS使用存储库
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
# 添加阿里云提供的镜像源以便于加快国内安装速度，先添加相应的密钥
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
# 添加阿里云源
sudo add-apt-repository "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install docker-ce
# 添加用户到docker用户组
sudo usermod -aG docker zzb

# 更换阿里云镜像源
sudo vim /etc/docker/daemon.json
# 加入以下内容：
# {
#	"registry-mirrors": ["https://n6syp70m.mirror.aliyuncs.com"]
# }
sudo service docker restart

# step1: 创建容器映射到本地的目录，将关键数据保存到本地，以快速恢复私有云
sudo mkdir /home/volume

# step2: 下载nextcloud，postgres镜像
docker pull nextcloud
docker pull postgres

# step3: 运行postgres容器
# 将postgres数据库的端口映射到服务器的32456端口（如果没有开启，需要先开启端口;根据自己喜好修改）
# 设置postgres数据库的密码为pgsql_pwd（根据自己喜好修改）
docker run -d \
--name hcloud-pg \
--restart=always \
-p 32456:5432 \
-e POSTGRES_PASSWORD=pgsql_pwd \
-e PGDATA=/var/lib/postgresql/data/pgdata \
-v /home/volume/pgdata:/var/lib/postgresql/data \
postgres

# step4: 运行nextcloud容器
# 将nextcloud容器的80端口映射到本机的32531端口（如果没有开启，需要先开启端口;根据自己喜好修改）
docker run --name hcloud -d \
--restart=always \
-p 32531:80 \
-v /home/volume/hcloud/hc:/var/www/html \
-v /home/volume/hcloud/apps:/var/www/html/custom_apps \
-v /home/volume/hcloud/config:/var/www/html/config \
-v /home/volume/hcloud/data:/var/www/html/data \
-v /home/zzb/store:/home/store \
nextcloud
```

## 配置

在浏览器输入`http://ip:32531`，开始进行私有云的配置。

1. 创建管理员用户
2. 选择文件存储路径（保持默认，如果需要更改，请同时更改上面的容器映射路径）
3. 数据库选择postgres，用户名:`postgres`（默认，如果需要更改，请创建用户）, 密码:`pgsql_pwd`, 数据库:`postgres`（默认，如果需要更改，请创建数据库）, IP地址:`ip:32456`
4. 安装完成
5. 可以创建用户，设定配额，还可以进行创建群组，聊天，视频，共享等，功能是否的丰富(视频和共享需要使用https)。

## https

对于nextcloud的用户间视频共享等功能需要使用https协议，所以需要在本地到服务器直接使用https协议。

使用`nginx`配置反向代理来完成。

### 安装nignx

```bash
sudo apt-get install nginx
```

### 创建ssl证书

可以选择自己创建证书，也可以通过其他方式获取证书

```bash
# 创建有效期为365天的证书
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/your-selfsigned.key -out /etc/ssl/certs/your-selfsigned.crt
# 根据自己的意愿，填写相关信息
```

### 反向代理配置

```bash
# 修改nginx配置文件
sudo cp /etc/nginx/sites-available/default /etc/nginx/sites-available/default.bk
sudo vim /etc/nginx/sites-available/default
```

修改如下：

```text
server {
		# https 监听32533端口
        listen 32533 ssl;
        # 服务器ip或域名
        server_name your_ip;
        # 证书路径
        ssl_certificate /etc/ssl/certs/your-selfsigned.crt;
        ssl_certificate_key /etc/ssl/private/your-selfsigned.key;
        location / {
        		# 被代理的地址，就是实际的nextcloud访问地址
                proxy_pass http://$server_name:32531;
        }
}
```

如果使用默认端口，即nextcloud容器映射端口到443端口，可以将80端口重定向到443端口。

## FAQ

+ 遇到通过域名无法访问私有云时，需要修改`config/config.php`文件中的`trusted_domains`（/home/volume/hcloud/config/config.php）将域名加入其中。

![image-20210221173535654](https://raw.githubusercontent.com/AZMDDY/imgs/master/img/image-20210221173535654.png)

## 效果

![image-20210221173711028](https://raw.githubusercontent.com/AZMDDY/imgs/master/img/image-20210221173711028.png)

![image-20210221173907048](https://raw.githubusercontent.com/AZMDDY/imgs/master/img/image-20210221173907048.png)