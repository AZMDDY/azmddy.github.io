(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{518:function(s,t,a){"use strict";a.r(t);var n=a(22),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vscode-开发-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vscode-开发-go"}},[s._v("#")]),s._v(" vscode 开发 go")]),s._v(" "),a("p",[s._v("【环境】：Linux, Go1.13")]),s._v(" "),a("h2",{attrs:{id:"环境变量配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量配置"}},[s._v("#")]),s._v(" 环境变量配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("go "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://goproxy.cn,direct\ngo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOSUMDB")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sum.golang.google.cn"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"插件安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件安装"}},[s._v("#")]),s._v(" 插件安装")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216090824.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发"}},[s._v("#")]),s._v(" 开发")]),s._v(" "),a("ol",[a("li",[s._v("新建项目文件夹"),a("code",[s._v("godemo")]),s._v(",结构如下：")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216091028.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("安装分析工具")])]),s._v(" "),a("p",[s._v("首先设置分析工具下载的位置，因为这些不应该被放到项目中，而且也是为了多个项目共用。点击"),a("code",[s._v("设置")]),s._v("，在工作区中设置"),a("code",[s._v("go.toolsGoPath")]),s._v("路径。下一个项目就只需要设置这个路径，不需要再下载这些工具了。也可以全局设置这个路径。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216202617.png",alt:""}})]),s._v(" "),a("p",[s._v("按"),a("code",[s._v("Ctrl+Shift+P")]),s._v("，输入"),a("code",[s._v("Go: Install/Update Tools")]),s._v("，勾选所有工具，点击"),a("code",[s._v("OK")]),s._v("下载。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216091902.png",alt:""}})]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("运行调试")])]),s._v(" "),a("p",[s._v("创建"),a("code",[s._v("launch.json")]),s._v("文件。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216203354.png",alt:""}})]),s._v(" "),a("p",[s._v("配置我们的运行参数：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216204645.png",alt:""}})]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Use IntelliSense to learn about possible attributes.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Hover to view descriptions of existing attributes.")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.2.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"configurations"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Run"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"go"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"launch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"program"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${workspaceFolder}/src/main.go"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调试的文件路径")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"env"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 自定义环境变量")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"args"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"example"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 传递给程序的参数")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("演示：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216204831.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216205039.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"其它配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它配置"}},[s._v("#")]),s._v(" 其它配置")]),s._v(" "),a("p",[s._v("setting.json")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"go.toolsGopath"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/zzb/go"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"go.autocompleteUnimportedPackages"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"go.gocodePackageLookupMode"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"go"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"go.gotoSymbol.includeImports"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"go.useCodeSnippetsOnFunctionSuggest"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"go.useCodeSnippetsOnFunctionSuggestWithoutType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"go.docsTool"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"guru"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"go-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#go-modules"}},[s._v("#")]),s._v(" go modules")]),s._v(" "),a("p",[s._v("1.开启 go modules 功能")]),s._v(" "),a("div",{staticClass:"language-Bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("go "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" -w "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GO111MODULE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# auto 则会根据当前目录下是否有 go.mod 文件来判断是否使用 modules 功能， off和on分别时关闭和开启。")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("2.初始化 module")]),s._v(" "),a("div",{staticClass:"language-Bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入项目src目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./godemo/src\ngo mode init godemo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("由于 GOPATH 与 go modules 不能共存，所有 go modules 就不在项目的根目录中初始化。项目的"),a("code",[s._v("src")]),s._v("下会生成"),a("code",[s._v("go.mod")]),s._v("文件，此时文件中仅有项目名和 go 的版本号。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216215625.png",alt:""}})]),s._v(" "),a("p",[s._v("3.检查依赖")]),s._v(" "),a("p",[s._v("例如，项目中使用了 echo 库。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216220614.png",alt:""}})]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("go mod tidy")]),s._v("检查引入的依赖，并写入"),a("code",[s._v("go.mod")]),s._v("文件中。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216215740.png",alt:""}})]),s._v(" "),a("p",[s._v("4.下载依赖")]),s._v(" "),a("div",{staticClass:"language-Bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("go mod download\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("5.导入依赖")]),s._v(" "),a("div",{staticClass:"language-Bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("go mod vendor\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将下载到GOPATH下的依赖转移到项目根目录下的vendor文件夹下")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201216221011.png",alt:""}})]),s._v(" "),a("p",[s._v("到此结束!")])])}),[],!1,null,null,null);t.default=e.exports}}]);