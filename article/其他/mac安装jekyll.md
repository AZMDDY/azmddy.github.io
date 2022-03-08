# mac安装jekyll

## 安装ruby

mac自带的了一个ruby，但版本是`2.6.0`	,不满足安装要求。

![image-20220308200855970](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220308200855970.png)

所以我们需要自己安装一个ruby。

```shell
brew install ruby
```

![image-20220308200949201](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220308200949201.png)

这里也可看到提示，如果要使用新安装的ruby就需要执行：

```shell
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
```

重新打开终端就可以看到版本了。

![image-20220308201217074](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220308201217074.png)

## 安装Jekyll

```shell
gem install --user-install bundler jekyll
```

```shell
# 修改gem的运行环境
echo 'export PATH="$HOME/.gem/ruby/3.0.0/bin:$PATH"' >> ~/.zshrc
```

根据提示还需要添加路径到环境变量。

```shell
# 添加路径
echo 'export PATH="$HOME/.local/share/gem/ruby/3.0.0/bin:$PATH"' >> ~/.zshrc
```

重新打开终端，创建一个jekyll项目。

```shell
jekyll new my-site
```

![image-20220308205122305](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220308205122305.png)

安装`webrick`包，不然会运行失败。

```shell
bundle add webrick
```

现在就可以本地运行了。

![image-20220308205507478](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220308205507478.png)

![image-20220308205531255](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220308205531255.png)

## 参考

+ [Jekyll on macOS | Jekyll • Simple, blog-aware, static sites (jekyllrb.com)](https://jekyllrb.com/docs/installation/macos/)