# vscode 开发 go

【环境】：Linux, Go1.13

## 环境变量配置

```bash
go env -w GOPROXY=https://goproxy.cn,direct
go env -w GOSUMDB="sum.golang.google.cn"
```

## 插件安装

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216090824.png)

## 开发

1. 新建项目文件夹`godemo`,结构如下：

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216091028.png)

2. 安装分析工具

首先设置分析工具下载的位置，因为这些不应该被放到项目中，而且也是为了多个项目共用。点击`设置`，在工作区中设置`go.toolsGoPath`路径。下一个项目就只需要设置这个路径，不需要再下载这些工具了。也可以全局设置这个路径。

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216202617.png)

按`Ctrl+Shift+P`，输入`Go: Install/Update Tools`，勾选所有工具，点击`OK`下载。

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216091902.png)

3. 运行调试

创建`launch.json`文件。

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216203354.png)

配置我们的运行参数：

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216204645.png)

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Run",
      "type": "go",
      "request": "launch",
      "mode": "auto",
      "program": "${workspaceFolder}/src/main.go", // 调试的文件路径
      "env": {}, // 自定义环境变量
      "args": ["example"] // 传递给程序的参数
    }
  ]
}
```

演示：

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216204831.png)

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216205039.png)

## 其它配置

setting.json

```json
{
  "go.toolsGopath": "/home/zzb/go",
  "go.autocompleteUnimportedPackages": true,
  "go.gocodePackageLookupMode": "go",
  "go.gotoSymbol.includeImports": true,
  "go.useCodeSnippetsOnFunctionSuggest": true,
  "go.useCodeSnippetsOnFunctionSuggestWithoutType": true,
  "go.docsTool": "guru"
}
```

## go modules

1.开启 go modules 功能

```Bash
go env -w GO111MODULE=auto
# auto 则会根据当前目录下是否有 go.mod 文件来判断是否使用 modules 功能， off和on分别时关闭和开启。
```

2.初始化 module

```Bash
# 进入项目src目录
cd ./godemo/src
go mode init godemo
```

由于 GOPATH 与 go modules 不能共存，所有 go modules 就不在项目的根目录中初始化。项目的`src`下会生成`go.mod`文件，此时文件中仅有项目名和 go 的版本号。

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216215625.png)

3.检查依赖

例如，项目中使用了 echo 库。

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216220614.png)

使用`go mod tidy`检查引入的依赖，并写入`go.mod`文件中。

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216215740.png)

4.下载依赖

```Bash
go mod download
```

5.导入依赖

```Bash
go mod vendor
# 将下载到GOPATH下的依赖转移到项目根目录下的vendor文件夹下
```

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216221011.png)

到此结束!
