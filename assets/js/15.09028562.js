(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{507:function(a,s,e){"use strict";e.r(s);var t=e(22),n=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"cmake-day-1-初识-cmake"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cmake-day-1-初识-cmake"}},[a._v("#")]),a._v(" CMake Day 1 —— 初识 CMake")]),a._v(" "),e("p",[a._v("CMake（Cross platform Make）是一个开源的跨平台自动化建构系统，用来管理软件构建的程序，并不依赖于某特定编译器，并可支持多层目录、多个应用程序与多个库的构建。它使用配置文件(CMakeLists.txt)控制软件构建的过程。CMake 并不直接构建出最终的软件，而是产生标准的构建文档，例如 Unix 的 Makefile，Window MSVC 的 projects/workspaces，再通过一般的构建方式使用。这使得熟悉某个集成开发环境（IDE）的开发者可以用标准的方式构建软件，这种可以使用各平台的原生建构系统的能力是 CMake 和 SCons 等其他类似系统的区别之处。CMake 配置文件（CMakeLists.txt）可设置源代码或目标程序库的路径、产生适配器（wrapper）、还可以用任意的顺序构建可执行文件。CMake 支持 in-place 构建（二进档和源代码在同一个目录树中）和 out-of-place 构建（二进档在别的目录里），因此可以很容易从同一个源代码目录树中构建出多个二进档。CMake 也支持静态与动态程序库的构建。")]),a._v(" "),e("p",[a._v("功能介绍：")]),a._v(" "),e("ul",[e("li",[a._v("配置文件是用一种建构软件专用的特殊编程语言写的 CMake 脚本。")]),a._v(" "),e("li",[a._v("内置 C 语言、C++、Fortran、Java 的自动相依性分析功能。")]),a._v(" "),e("li",[a._v("经由 CMake 脚本语言支持 SWIG、Qt、FLTK。")]),a._v(" "),e("li",[a._v("内置对微软 Visual Studio .NET 和过去的 Visual Studio 版本的支持，可以产生.dsp、.sln 和.vcproj 档。")]),a._v(" "),e("li",[a._v("用传统的时间标签侦测文件内容的改变。")]),a._v(" "),e("li",[a._v("支持分布式建构（在多台电脑上同时建构）")]),a._v(" "),e("li",[a._v("在许多操作系统上进行跨平台编译，包括 Linux、与 POSIX 兼容的系统（AIX、*BSD 系统、HP-UX、IRIX、MinGW/MSYS、Solaris）、Mac OS X 和微软 Windows 95/98/NT/2000/XP 等。")]),a._v(" "),e("li",[a._v("产生可以给 Graphviz 用的全局相依图。")]),a._v(" "),e("li",[a._v("已经和 Dart、CTest 和 CPack 等软件测试和发布的工具集成。")])]),a._v(" "),e("p",[a._v("cmake 简单示例：")]),a._v(" "),e("p",[a._v("项目结构：")]),a._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("demo\n​ ├── build\n​ ├── CMakeLists.txt\n​ └── main.cpp\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("div",{staticClass:"language-CMakeLists.txt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# CMake的最小版本要求\ncmake_minimum_required(VERSION 3.0.0)\n# 项目名称以及版本号\nproject(demo VERSION 0.1.0)\n\n#设置可执行程序\nadd_executable(demo main.cpp)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br")])]),e("p",[a._v("在 CMake 代码中命令是不区分大小写的，"),e("code",[a._v("add_executable")]),a._v("、"),e("code",[a._v("ADD_EXECUTABLE")]),a._v("和"),e("code",[a._v("ADD_executable")]),a._v("都是可以的，一般情况下都使用小写命令。")]),a._v(" "),e("p",[a._v("创建一个构建目录"),e("code",[a._v("build")]),a._v("，进入到构建目录之后，运行 CMake 来配置项目并生成本地构建系统：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" build\ncmake "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("然后使用该构建系统来进行编译或链接项目：")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("cmake --build "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("最后，可以通过"),e("code",[a._v("./demo")]),a._v("来运行程序。")])])}),[],!1,null,null,null);s.default=n.exports}}]);