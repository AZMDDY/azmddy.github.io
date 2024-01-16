(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{561:function(t,e,s){"use strict";s.r(e);var a=s(22),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"初识-cgroup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初识-cgroup"}},[t._v("#")]),t._v(" 初识 CGroup")]),t._v(" "),s("p",[t._v("CGroup 是 Control Groups 的缩写，是 Linux 内核提供的一种可以限制、记录、隔离进程组 (process groups) 所使用的物力资源 (如cpu, memory,i/o 等等) 的机制。")]),t._v(" "),s("h2",{attrs:{id:"树莓派-4-启用-cgroup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#树莓派-4-启用-cgroup"}},[t._v("#")]),t._v(" 树莓派 4 启用 CGroup")]),t._v(" "),s("p",[t._v("启动 CGroup 功能")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 官方系统arm64")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /boost/cmdline.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在文件尾，追加 cgroup_enable=cpuset cgroup_memory=1 cgroup_enable=memory")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" info\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nWARNING: No swap limit support\nWARNING: No cpu cfs "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("quota")]),t._v(" support\nWARNING: No cpu cfs period support\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这些警告可以忽略")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("h2",{attrs:{id:"cgroup-的子系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cgroup-的子系统"}},[t._v("#")]),t._v(" CGroup 的子系统")]),t._v(" "),s("p",[t._v("具体的资源管理功能被称为"),s("code",[t._v("CGroup")]),t._v("子系统或控制器，比如 CPU 时间、系统内存和网络带宽等。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("子系统")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("blkio")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("为块设备设定输入/输出限制，比如物理设备（磁盘，固态硬盘，USB 等等）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("cpu")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("使用调度程序提供对 CPU 的 cgroup 任务访问")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("cpuacct")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("自动生成 cgroup 中任务所使用的 CPU 报告")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("cpuset")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("为 cgroup 中的任务分配独立 CPU（在多核系统）和内存节点")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("devices")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("允许或者拒绝 cgroup 中的任务访问设备")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("freezer")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("挂起或者恢复 cgroup 中的任务")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("memory")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设定 cgroup 中任务使用的内存限制，并自动生成由那些任务使用的内存资源报告")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("net_cls")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("使用等级识别符（classid）标记网络数据包，可允许 Linux 流量控制程序（tc）识别从具体 cgroup 中生成的数据包")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);