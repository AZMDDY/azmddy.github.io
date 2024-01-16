(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{583:function(s,n,t){"use strict";t.r(n);var a=t(22),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"树莓派-4-设置静态-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#树莓派-4-设置静态-ip"}},[s._v("#")]),s._v(" 树莓派 4 设置静态 IP")]),s._v(" "),t("p",[s._v("树莓派 4 安装 Ubuntu20.4 后，设置静态 IP。")]),s._v(" "),t("p",[s._v("在 Ubuntu20.4 中需要用"),t("code",[s._v("NetPlan")]),s._v("去管理配置网络。")]),s._v(" "),t("h2",{attrs:{id:"查看网卡信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看网卡信息"}},[s._v("#")]),s._v(" 查看网卡信息")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu20.4抛弃了ifconfig，安装一下")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ifconfig")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"配置静态-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置静态-ip"}},[s._v("#")]),s._v(" 配置静态 IP")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /etc/netplan/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml.bk\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/netplan/50-cloud-init.yaml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改内容如下：")]),s._v("\nnetwork:\n    ethernets:\n        eth0:\n            addresses:\n            - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".100.211/24\n            gateway4: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".100.1\n            nameservers:\n                addresses: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.114")]),s._v(".114.114"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                search: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            optional: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n    version: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ech0: 网络接口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# addresses: 静态IP")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gateway4: IPv4网关")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nameservers: DNS域名")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" netplan apply "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用配置")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);