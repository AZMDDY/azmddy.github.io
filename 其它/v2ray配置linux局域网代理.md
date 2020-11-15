# V2ray配置Linux局域网代理

> 在Linux机器上配置v2ray，让局域网中所有机器通过这台机器科学爱国。

我用的linux机器是树莓派4(官方arm64系统)。

## 配置静态IP

```shell
sudo vim /etc/dhcpcd.conf
# 添加以下内容
interface wlan0 # 无线网口
static ip_address=192.168.61.140/24 # 静态ip地址以及掩码
static routers=192.168.61.1 # 网关
static domain_name_servers=192.168.61.1 114.114.114.114 # dns
```

## 安装V2ray

```shell
sudo apt-get install unzip daemon
# 下载安装脚本
curl -L -s https://install.direct/go.sh -o v2ray_install.sh
```

从github上下载安装包。[https://github.com/v2ray/v2ray-core/releases](https://github.com/v2ray/v2ray-core/releases)

```shell
sudo bash v2ray_install.sh --local v2ray-linux-arm64.zip # 从本地文件安装
# /usr/bin/v2ray/v2ray：V2Ray 程序；
# /usr/bin/v2ray/v2ctl：V2Ray 工具；
# /etc/v2ray/config.json：配置文件；
# /usr/bin/v2ray/geoip.dat：IP 数据文件
# /usr/bin/v2ray/geosite.dat：域名数据文件
```

## 配置

配置文件如下：

更改注释中的`http代理端口`，`服务器地址或域名`，`服务器端口`。

```json

{
  "policy": {
    "system": {
      "statsInboundUplink": true,
      "statsInboundDownlink": true
    }
  },
  "log": {
    "access": "",
    "error": "",
    "loglevel": "warning"
  },
  "inbounds": [
    {
      "tag": "proxy",
      "port": 55555,       // http代理端口
      "listen": "0.0.0.0", // 允许局域网中其它机器访问
      "protocol": "http",  // http协议
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ]
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "ip": null,
        "address": null,
        "clients": null
      },
      "streamSettings": null
    },
    {
      "tag": "api",
      "port": 54033,
      "listen": "127.0.0.1",
      "protocol": "dokodemo-door",
      "sniffing": null,
      "settings": {
        "auth": null,
        "udp": false,
        "ip": null,
        "address": "127.0.0.1",
        "clients": null
      },
      "streamSettings": null
    }
  ],
  "outbounds": [
    {
      "tag": "proxy",
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "server_address",  // 服务器地址或域名
            "port": 12345,                // 服务器端口
            "users": [
              {
                "id": "1b98c8d2-8963-e3b9-8es2-85afb4fd6w1b",
                "alterId": 2,
                "email": "t@t.tt",
                "security": "auto"
              }
            ]
          }
        ],
        "servers": null,
        "response": null
      },
      "streamSettings": {
        "network": "tcp",
        "security": null,
        "tlsSettings": null,
        "tcpSettings": null,
        "kcpSettings": null,
        "wsSettings": null,
        "httpSettings": null,
        "quicSettings": null
      },
      "mux": {
        "enabled": true,
        "concurrency": 8
      }
    },
    {
      "tag": "direct",
      "protocol": "freedom",
      "settings": {
        "vnext": null,
        "servers": null,
        "response": null
      },
      "streamSettings": null,
      "mux": null
    },
    {
      "tag": "block",
      "protocol": "blackhole",
      "settings": {
        "vnext": null,
        "servers": null,
        "response": {
          "type": "http"
        }
      },
      "streamSettings": null,
      "mux": null
    }
  ],
  "stats": {},
  "api": {
    "tag": "api",
    "services": [
      "StatsService"
    ]
  },
  "dns": null,
  "routing": {
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "type": "field",
        "port": null,
        "inboundTag": [
          "api"
        ],
        "outboundTag": "api",
        "ip": null,
        "domain": null
      }
    ]
  }
}

```

```shell
# 重启V2ray服务
sudo service v2ray restart
# 开放代理端口
sudo iptables -A INPUT -p tcp --dport 55555 -j ACCEPT
sudo iptables -A OUTPUT -p tcp --sport 55555 -j ACCEPT
sudo netfilter-persistent save
sudo netfilter-persistent reload
```

## 更多

更多内容关注官网。[https://v2ray.com/](https://v2ray.com/)