(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{510:function(e,s,t){"use strict";t.r(s);var a=t(22),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"cmake-day-4-设置头文件路径和链接库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cmake-day-4-设置头文件路径和链接库"}},[e._v("#")]),e._v(" CMake Day 4 —— 设置头文件路径和链接库")]),e._v(" "),t("h2",{attrs:{id:"设置头文件搜索路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置头文件搜索路径"}},[e._v("#")]),e._v(" 设置头文件搜索路径")]),e._v(" "),t("p",[e._v("在项目中我们会经常会调用头文件（自己写的或者第三方库的），我们首先可以通过相对路径的方式去调用，例如"),t("code",[e._v('#include "../../xxx.h"')]),e._v("，但这样不灵活，如果被调用的头文件位置发生了变动，那就需要去调用的地方一一更改。在 CMake 代码中，我们可以通过"),t("code",[e._v("include_directories")]),e._v("和"),t("code",[e._v("target_include_directories")]),e._v("命令去包含头文件搜索路径，这样在代码中可以直接调用头文件，而不需要加路径。")]),e._v(" "),t("p",[e._v("语法：")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("include_directories([AFTER|BEFORE] [SYSTEM] dir1 [dir2 ...])\n\ntarget_include_directories(&lt;target> [SYSTEM] [BEFORE]\n  &lt;INTERFACE|PUBLIC|PRIVATE> [items1...]\n  [&lt;INTERFACE|PUBLIC|PRIVATE> [items2...] ...])\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("这里的相对路径将会被解释为相对于当前源目录。")]),e._v(" "),t("p",[t("code",[e._v("include_directories")]),e._v("是全局包含的，项目中所有子目录都能够引用。\n"),t("code",[e._v("target_include_directories")]),e._v("是针对某个二进制文件的，能够更好的控制访问的粒度。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("AFTER")]),e._v(":表示指定目录会附加到当前目录列表之后，默认是"),t("code",[e._v("AFTER")]),e._v("；")]),e._v(" "),t("li",[t("code",[e._v("BEFORE")]),e._v(":表示指定目录会添加到当前目录列表之前；")]),e._v(" "),t("li",[t("code",[e._v("SYSTEM")]),e._v(":表示指定目录是系统包含目录；")])]),e._v(" "),t("p",[e._v("这里要指出一点："),t("strong",[e._v("头文件路径列表中的第一条路径是根路径(root_dir)")]),e._v("，"),t("code",[e._v('#include "xx.h"')]),e._v("是相对于这个根路径的，相当于"),t("code",[e._v('#include "root_dir/xx.h"')]),e._v("。")]),e._v(" "),t("p",[t("code",[e._v("<target>")]),e._v(":是 add_executable()或者 add_library()创建的目标；")]),e._v(" "),t("p",[t("code",[e._v("PRIVATE")]),e._v(": 私有，指这里引用的头文件路径仅仅被这个目标使用，目标不会对外暴露引用的头文件路径；")]),e._v(" "),t("p",[t("code",[e._v("PUBLIC")]),e._v(": 公有，指这里引用的头文件路径不仅被这个目标使用，目标还会对外暴露引用的头文件路径;")]),e._v(" "),t("p",[t("code",[e._v("INTERFACE")]),e._v(":接口，指这里引用的头文件路径不被这个目标使用，但目标会对外暴露引用的头文件路径;")]),e._v(" "),t("p",[e._v("我们可以通过"),t("code",[e._v("INCLUDE_DIRECTORIES")]),e._v("(PUBLIC, PRIVATE)和"),t("code",[e._v("INTERFACE_INCLUDE_DIRECTORIES")]),e._v("(PUBLIC, INTERFACE)属性查看添加的头文件搜索路径。")]),e._v(" "),t("p",[e._v("用法：")]),e._v(" "),t("div",{staticClass:"language-CMakeLists.txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('include_directories(./include)\ninclude_directories(./include/gtest)\ninclude_directories(BEFORE ./include/gmock)\n\n# 打印指定的头文件搜索路径\nget_property(dirs DIRECTORY ${CMAKE_SOURCE_DIR} PROPERTY INCLUDE_DIRECTORIES)\nmessage("${dirs}")\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("div",{staticClass:"language-CMakeLists.txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('target_include_directories(demo PUBLIC ./person)\n\n# 打印指定的头文件搜索路径\nget_property(public_private_dirs TARGET demo PROPERTY INCLUDE_DIRECTORIES)\nmessage("public_private_dirs: ${public_private_dirs}")\n\nget_property(public_interface_dirs TARGET person PROPERTY INTERFACE_INCLUDE_DIRECTORIES)\nmessage("public_interface_dirs: ${public_interface_dirs}")\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("结果：")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public_private_dirs: /home/Pro/cmake-demo/cmake-day-4/person/../add\npublic_private_dirs: /home/Pro/cmake-demo/cmake-day-4/./person\npublic_interface_dirs: /home/Pro/cmake-demo/cmake-day-4/person/../print\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"链接库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链接库"}},[e._v("#")]),e._v(" 链接库")]),e._v(" "),t("p",[e._v("当需要调用第三方库时，可以使用"),t("code",[e._v("link_directories()/target_link_directories()")]),e._v("和"),t("code",[e._v("target_link_libraries()")]),e._v("来指定链接器搜索路径和需要链接的库。")]),e._v(" "),t("p",[e._v("语法：")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("link_directories([AFTER|BEFORE] directory1 [directory2 ...])\n\ntarget_link_directories(&lt;target> [BEFORE]\n  &lt;INTERFACE|PUBLIC|PRIVATE> [items1...]\n  [&lt;INTERFACE|PUBLIC|PRIVATE> [items2...] ...])\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])]),t("p",[e._v("这里的相对路径将会被解释为相对于当前源目录。")]),e._v(" "),t("p",[e._v("他们指定的路径将会被"),t("code",[e._v("target_link_libraries()")]),e._v("直接使用。")]),e._v(" "),t("p",[t("code",[e._v("link_directories")]),e._v("是全局的，"),t("code",[e._v("target_link_directories")]),e._v("是针对某个二进制文件的，能够更好的控制访问的粒度。")]),e._v(" "),t("p",[t("code",[e._v("PRIVATE")]),e._v(": 私有，指这里引用的库文件路径仅仅被这个目标使用，目标不会对外暴露引用的库文件路径；")]),e._v(" "),t("p",[t("code",[e._v("PUBLIC")]),e._v(": 公有，指这里引用的库文件路径不仅被这个目标使用，目标还会对外暴露引用的库文件路径;")]),e._v(" "),t("p",[t("code",[e._v("INTERFACE")]),e._v(":接口，指这里引用的库文件路径不被这个目标使用，但目标会对外暴露引用的库文件路径;")]),e._v(" "),t("div",{staticClass:"language-text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("target_link_libraries(&lt;target>\n                      &lt;PRIVATE|PUBLIC|INTERFACE> &lt;item>...\n                     [&lt;PRIVATE|PUBLIC|INTERFACE> &lt;item>...]...)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("code",[e._v("<target>")]),e._v(":是 add_executable()或者 add_library()创建的目标；")]),e._v(" "),t("p",[t("code",[e._v("PRIVATE")]),e._v(": 私有，指被链接的库(item)仅仅被目标(target)使用，目标(target)不对外暴露这个被链接的库(item)的接口；")]),e._v(" "),t("p",[t("code",[e._v("PUBLIC")]),e._v(": 公有，指被链接的库(item)不仅被目标(target)使用，目标(target)还对外暴露这个被链接的库(item)的接口;")]),e._v(" "),t("p",[t("code",[e._v("INTERFACE")]),e._v(":接口，指被链接的库(item)不被目标(target)使用，但目标(target)对外暴露这个被链接的库(item)的接口;")]),e._v(" "),t("p",[e._v("用法：")]),e._v(" "),t("div",{staticClass:"language-CMakeLists.txt line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("add_executable(demo main.cpp)\n\ntarget_include_directories(demo PUBLIC ./person)\n\ntarget_link_directories(demo PUBLIC ./person)\n\ntarget_link_libraries(demo PUBLIC person)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h2",{attrs:{id:"完整示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整示例"}},[e._v("#")]),e._v(" 完整示例")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/AZMDDY/cmake-demo/tree/main/cmake-day-4",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/AZMDDY/cmake-demo/tree/main/cmake-day-4"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);