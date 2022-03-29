# githubpage 自定义域名开启 https

> 在阿里云上购买域名，给自己的 githubpage 设置自定义域名，并开启 https

## 设置 DNS 解析

添加`CNAME`和`A`这两个记录就可以。可以参考下图：

![image-20220306093643133](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220306093643133.png)

`A`记录类型需要填的记录值是`github page`的 IP 地址。可以`ping`自己的 GitHub page。

```shell
ping azmddy.github.io
```

## github 仓库添加域名解析记录

在仓库的根目录创建`CNAME`文件，内容填写自己购买的域名：

```shell
touch CNAME
echo 'azmddy.top' > CNAME
```

## 开启 https

打开 github page 项目的`Settings`:

![image-20220306094257813](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220306094257813.png)

等待 DNS 解析完成，没有问题后，可以勾选`Enforce HTTPS`，这样你的网站就可以通过 https 访问，不会报`不安全`。

![image-20220306094444248](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220306094444248.png)
