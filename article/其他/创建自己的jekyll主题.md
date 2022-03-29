# 创建自己的 jekyll 主题

首先你需要安装`jekyll`。安装好后，使用下面命令创建主题。

```shell
jekyll new-theme my-theme
```

然后根据自己的实际情况修改`*.gemspec`文件。

可以开始构建自己的主题。

```shell
cd my-theme
gem build my-theme.gemspec
```

这会在目录下生成一个`.gem`包。我们可以使用这个本地包来创建博客。

创建一个基础博客。

```shell
jekyll new my-site
```

修改`Gemfile`文件。

```shell
cd my-site
vim Gemfile
# 修改 主题引用如下，这样就能使用自己的主题了
# gem "my-theme", :path => "xxx/my-theme/"

# 修改_config.yaml
vim _config.yaml
# 主题名称改成自己的
# theme: my-theme
```

运行。

```shell
jekyll serve
```

如果遇到运行失败。可能是缺少`webrick`包。安装一下即可。

```shell
bundle add webrick
```

运行成功的结果就是：

![image-20220309083048542](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220309083048542.png)

![image-20220309083109455](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220309083109455.png)

主页一片空白，等着你去发挥！！！
