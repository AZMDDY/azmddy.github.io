# 解决 git 显示中文问题

> 在 Linux 环境下，可能会遇到 git 显示中文不正常的问题。

![image-20220228123901572](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220228123901572.png)

就像上面显示的一样，根本不知道是啥文件。

可以通过这个命令修正。

```shell
git config --global core.quotepath false
```

修正之后就可以正常显示中文了。

![image-20220228124053668](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220228124053668.png)
