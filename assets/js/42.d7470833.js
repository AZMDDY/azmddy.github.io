(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{534:function(v,_,e){"use strict";e.r(_);var t=e(22),o=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"遵守三五原则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遵守三五原则"}},[v._v("#")]),v._v(" 遵守三五原则")]),v._v(" "),e("blockquote",[e("p",[v._v("为什么要遵守三五原则？这涉及到 C++11 拷贝移动规则。")])]),v._v(" "),e("p",[e("code",[v._v("默认构造函数")]),v._v("，"),e("code",[v._v("析构函数")]),v._v("，"),e("code",[v._v("拷贝构造函数")]),v._v("，"),e("code",[v._v("拷贝赋值运算符")]),v._v("，"),e("code",[v._v("移动构造函数")]),v._v("，"),e("code",[v._v("移动赋值运算符")]),v._v("。这些函数在"),e("strong",[v._v("需要")]),v._v("的时候会被生成。")]),v._v(" "),e("p",[v._v("默认构造函数是当类中没有任何构造函数时才生成。")]),v._v(" "),e("p",[v._v("默认移动操作（移动构造函数，移动赋值运算符）如果生成了，会对非 static 数据执行"),e("code",[v._v("逐成员")]),v._v("的移动，也会移动基类部分。实际上是逐成员的移动"),e("code",[v._v("请求")]),v._v("，逐成员移动的核⼼是对对象使⽤"),e("code",[v._v("std::move")]),v._v("，然后函数决议时会选择执⾏"),e("code",[v._v("移动")]),v._v("还是"),e("code",[v._v("拷⻉")]),v._v("操作。")]),v._v(" "),e("p",[v._v("拷贝构造函数和拷贝赋值运算符是相互独立的，声明一个不会限制编译器声明另一个。")]),v._v(" "),e("p",[v._v("而移动构造函数和移动赋值运算符是"),e("strong",[v._v("互斥的")]),v._v("，声明一个会限制编译器声明另一个。因为你声明了一个，就暗示你要自定义移动语义，不再按照"),e("code",[v._v("逐成员方式")]),v._v("进行移动。")]),v._v(" "),e("p",[v._v("另一方面，声明了拷贝操作，编译器就不会声明移动操作。声明拷贝操作暗示你逐成员拷贝方式不适合，也就是默认拷贝不适合，编译器就认为移动操作也是不适合的。")]),v._v(" "),e("p",[v._v("再者，声明了移动操作，编译器就不会声明拷贝操作。逐成员移动不适合，那不能要求逐成员赋值是适合的。")]),v._v(" "),e("p",[v._v("最后，用户定义了析构函数的，编译器也不会声明移动操作。")]),v._v(" "),e("p",[e("strong",[v._v("C++11 对于特殊成员函数处理的规则如下")]),v._v("：")]),v._v(" "),e("ul",[e("li",[v._v("默认构造函数：和 C++98 规则相同。仅当类不存在⽤⼾声明的构造函数时才⾃动⽣成。")]),v._v(" "),e("li",[v._v("析构函数：基本上和 C++98 相同；稍微不同的是现在析构默认 noexcept（参⻅ Item14）。和\nC++98 ⼀样，仅当基类析构为虚函数时该类析构才为虚函数。")]),v._v(" "),e("li",[v._v("拷⻉构造函数：和 C++98 运⾏时⾏为⼀样：逐成员拷⻉⾮ static 数据。仅当类没有⽤⼾定义的拷⻉\n构造时才⽣成。如果类声明了移动操作它就是 delete。当⽤⼾声明了拷⻉赋值或者析构，该函数不\n再⾃动⽣成。")]),v._v(" "),e("li",[v._v("拷⻉赋值运算符：和 C++98 运⾏时⾏为⼀样：逐成员拷⻉赋值⾮ static 数据。仅当类没有⽤⼾定义\n的拷⻉赋值时才⽣成。如果类声明了移动操作它就是 delete。当⽤⼾声明了拷⻉构造或者析构，该\n函数不再⾃动⽣成。")]),v._v(" "),e("li",[v._v("移动构造函数和移动赋值运算符：都对⾮ static 数据执⾏逐成员移动。仅当类没有⽤⼾定义的拷⻉\n操作，移动操作或析构时才⾃动⽣成。")])]),v._v(" "),e("p",[v._v("这也是我们遵循三/五原则的原因。")]),v._v(" "),e("p",[v._v("三/五原则：")]),v._v(" "),e("ul",[e("li",[v._v("三原则："),e("code",[v._v("析构函数")]),v._v("，"),e("code",[v._v("拷贝构造函数")]),v._v("，"),e("code",[v._v("拷贝赋值运算符")])]),v._v(" "),e("li",[v._v("五原则："),e("code",[v._v("析构函数")]),v._v("，"),e("code",[v._v("拷贝构造函数")]),v._v("，"),e("code",[v._v("拷贝赋值运算符")]),v._v("，"),e("code",[v._v("移动构造函数")]),v._v("，"),e("code",[v._v("移动赋值运算符")])])])])}),[],!1,null,null,null);_.default=o.exports}}]);