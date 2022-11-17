(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{526:function(s,t,a){"use strict";a.r(t);var n=a(22),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"glog使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#glog使用"}},[s._v("#")]),s._v(" GLog使用")]),s._v(" "),a("blockquote",[a("p",[s._v("GLog 是一个应用程序级的日志记录的库，它提供了基于 C++样式流和各种帮助程序宏的日志记录 API,你可以很简单的将信息传输到"),a("code",[s._v("LOG")]),s._v("来记录消息。")])]),s._v(" "),a("h2",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),a("p",[s._v("源码下载地址: https://github.com/google/glog.git")]),s._v(" "),a("p",[s._v("安装方法：\n终端进入 glog 目录，以 root 身份运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ ./autogen.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" ./configure "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# glog的头文件位于/usr/local/include")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# glog的库文件位于/usr/local/lib")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"严重程度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#严重程度"}},[s._v("#")]),s._v(" 严重程度")]),s._v(" "),a("p",[s._v("GLog 允许你制定消息的严重程度，一共有四个级别:"),a("code",[s._v("INFO")]),s._v(", "),a("code",[s._v("WARNING")]),s._v(", "),a("code",[s._v("ERROR")]),s._v(", "),a("code",[s._v("FATAL")]),s._v("。记录"),a("code",[s._v("FATAL")]),s._v("消息会终止程序(在记录消息之后),在 GLog 记录的消息的开头以"),a("code",[s._v("I")]),s._v(", "),a("code",[s._v("W")]),s._v(", "),a("code",[s._v("E")]),s._v(", "),a("code",[s._v("F")]),s._v("来标示信息的严重级别；")]),s._v(" "),a("h2",{attrs:{id:"日志格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日志格式"}},[s._v("#")]),s._v(" 日志格式")]),s._v(" "),a("p",[s._v("默认情况下日志会写入本地"),a("code",[s._v("/tmp/")]),s._v("文件夹中，文件名格式："),a("code",[s._v("<program name>.<host name>.<user name>.log.<Severity level>.<date>-<time>.<pid>")]),s._v(";")]),s._v(" "),a("p",[s._v("默认情况下。GLog 还会将"),a("code",[s._v("ERROR")]),s._v("和"),a("code",[s._v("FATAL")]),s._v("错误记录到"),a("code",[s._v("stderr")]),s._v("消息中(会在终端打印出来);")]),s._v(" "),a("p",[s._v("在终端打印出的消息的格式:\n"),a("code",[s._v("<Serverity level><number> <time>.<number> <pid> <file>:<line number> <messages>")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include <glog/logging.h>\nint main(int argc, char **argv) {\n    google::InitGoogleLogging(argv[0]); // 初始化GLog库\n    LOG(ERROR) << "There is error !!!";\n    return 0;\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image_1d1vb501m315143k1j9eavfsp419.png",alt:"image_1d1vb501m315143k1j9eavfsp419.png-41kB"}})]),s._v(" "),a("h2",{attrs:{id:"设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置"}},[s._v("#")]),s._v(" 设置")]),s._v(" "),a("h3",{attrs:{id:"设置存放-log-的目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置存放-log-的目录"}},[s._v("#")]),s._v(" 设置存放 Log 的目录")]),s._v(" "),a("p",[s._v("如果我们想指定 log 文件输出位置，那么我们可以对 GLog 设置一下标志（FLAGS_log_dir）；")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("<glog/logging.h>")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    google"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("InitGoogleLogging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化GLog库")]),s._v("\n    FLAGS_log_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将日志文件输出到本地")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("LOG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"There is error !!!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("在本地就会产生日志文件，日志文件有四个基本文件"),a("code",[s._v("<program name>.INFO")]),s._v("，"),a("code",[s._v("<program name>.WARNING")]),s._v("，"),a("code",[s._v("<program name>.ERROR")]),s._v("，"),a("code",[s._v("<program name>.FATAL")]),s._v(",这些文件都汇总了这四类日志信息；")]),s._v(" "),a("h3",{attrs:{id:"设置只在终端显示-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置只在终端显示-log"}},[s._v("#")]),s._v(" 设置只在终端显示 Log")]),s._v(" "),a("p",[s._v("当我们只想将日志信息输出到"),a("code",[s._v("stderr")]),s._v("在终端中显示的时候,我们可以设置(FLAGS_logtostderr);\n设置"),a("code",[s._v("FLAGS_logtostderr = 1")]),s._v("将使得日志信息记录到 stderr 而不会保存到本地日志文件中，及时你设置了"),a("code",[s._v("FLAGS_log_dir")]),s._v(";")]),s._v(" "),a("h3",{attrs:{id:"设置记录-log-到本地以及终端显示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置记录-log-到本地以及终端显示"}},[s._v("#")]),s._v(" 设置记录 Log 到本地以及终端显示")]),s._v(" "),a("p",[s._v("当然我们可以鱼和熊掌兼得，我们可以通过设置"),a("code",[s._v("FLAGS_alsologtostderr = 1")]),s._v("将实现日志信息输出到 stderr，并且会记录到本地日志文件；")]),s._v(" "),a("h3",{attrs:{id:"设置记录到-stderr-的-log-的级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置记录到-stderr-的-log-的级别"}},[s._v("#")]),s._v(" 设置记录到 stderr 的 log 的级别")]),s._v(" "),a("p",[s._v("这仅仅是对于记录 Log 到 stderr 中的设置；")]),s._v(" "),a("p",[s._v("当我们需要将 WARNING 等级的 log 记录到 stderr 时，我们可以通过设置"),a("code",[s._v("FLAGS_stderrthreshold = 1")]),s._v(",那么 WARNING 以及更高级别的 Log 将会记录到 stderr 中；"),a("code",[s._v("INFO")]),s._v(": 0, "),a("code",[s._v("WARNING")]),s._v(": 1, "),a("code",[s._v("ERROR")]),s._v(": 2 "),a("code",[s._v("FATAL")]),s._v(": 3;")]),s._v(" "),a("h3",{attrs:{id:"设置需要记录-log-的级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置需要记录-log-的级别"}},[s._v("#")]),s._v(" 设置需要记录 log 的级别")]),s._v(" "),a("p",[s._v("我们可以指定那些 Log 被记录（无论是在本地还是 stderr）,通过设置"),a("code",[s._v("FLAGS_minloglevel = 0")]),s._v("标志，默认是 0，设置这个标志表明，INFO 以及更高级别的 Log 将会被记录；"),a("code",[s._v("INFO")]),s._v(": 0, "),a("code",[s._v("WARNING")]),s._v(": 1, "),a("code",[s._v("ERROR")]),s._v(": 2 "),a("code",[s._v("FATAL")]),s._v(": 3;")]),s._v(" "),a("h2",{attrs:{id:"条件记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件记录"}},[s._v("#")]),s._v(" 条件记录")]),s._v(" "),a("p",[s._v("我们可以使用"),a("code",[s._v("LOG_IF()")]),s._v("来到达有条件的输出日志的目的；")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    google"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("InitGoogleLogging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化GLog库")]),s._v("\n    FLAGS_logtostderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置将Log记录到stderr")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("LOG_IF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i > 15"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当i > 15时，记录Log;")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"周期记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#周期记录"}},[s._v("#")]),s._v(" 周期记录")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("LOG_EVERY_N()")]),s._v("实现周期性的输出日志，意思解释说，"),a("code",[s._v("LOG_EVERY_N()")]),s._v("执行 n 次才输出一次 Log；")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    google"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("InitGoogleLogging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化GLog库")]),s._v("\n    FLAGS_logtostderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置将Log记录到stderr")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("LOG_EVERY_N")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i: "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//每隔3次输出一次信息；")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"条件加周期记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件加周期记录"}},[s._v("#")]),s._v(" 条件加周期记录")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("LOG_IF_EVERY_N")]),s._v("实现，当满足条件之后，每隔 n 次输出 Log；")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    google"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("InitGoogleLogging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化GLog库")]),s._v("\n    FLAGS_logtostderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置将Log记录到stderr")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("LOG_IF_EVERY_N")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i > 10, i: "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//当i > 10之后，每隔3次输出一次信息；")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"限制-log-输出次数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制-log-输出次数"}},[s._v("#")]),s._v(" 限制 Log 输出次数")]),s._v(" "),a("p",[s._v("通过"),a("code",[s._v("LOG_FIRST_N()")]),s._v("实现，只输出前 n 次信息；")]),s._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" argc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("char")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    google"),a("span",{pre:!0,attrs:{class:"token double-colon punctuation"}},[s._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("InitGoogleLogging")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 初始化GLog库")]),s._v("\n    FLAGS_logtostderr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置将Log记录到stderr")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("LOG_FIRST_N")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"i: "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 输出前4次Log")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"支持调试模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#支持调试模式"}},[s._v("#")]),s._v(" 支持调试模式")]),s._v(" "),a("p",[s._v("调试模式的宏仅在调试模式下有效，在非调试模式编译时为空。\n在宏前面加"),a("code",[s._v("D")]),s._v("就支持了调试模式；\n"),a("code",[s._v("DLOG()")]),s._v(", "),a("code",[s._v("DLOG_IF()")]),s._v(", "),a("code",[s._v("DLOG_EVERY_N()")]),s._v(", ...")]),s._v(" "),a("h2",{attrs:{id:"崩溃处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#崩溃处理"}},[s._v("#")]),s._v(" 崩溃处理")]),s._v(" "),a("p",[s._v("当程序出现崩溃时，GLog 也可以提供 Bug 定位支持。通过"),a("code",[s._v("google::InstallFailureSignalHandler()")]),s._v("安装信号处理程序，当程序出现崩溃时，会输出崩溃的位置等相关信息。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image_1d1vg3l7h170r187n9c21lh5b1n1m.png",alt:"image_1d1vg3l7h170r187n9c21lh5b1n1m.png-53.7kB"}})]),s._v(" "),a("p",[s._v("按照箭头的方向去看崩溃的信息所在位置，GLog 会一层一层的输出相关信息；")]),s._v(" "),a("p",[s._v("更具体的信息请参考官方文档。")])])}),[],!1,null,null,null);t.default=r.exports}}]);