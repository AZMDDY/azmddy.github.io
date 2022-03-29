---
sort: 3
---

# virtual 限定符

- `virtual`无法修饰普通函数，普通函数只有`overload`没有`override`。
- `virtual`不能修饰`static`成员函数。
- `virtual`不能修饰构造函数，因为`vptr`需要构造函数初始化，如果构造函数为`virtual`，就没办法产生`vptr`，虚函数的调用需要通过`vptr`，这就是`先有鸡还是先有蛋`的问题了。
- `virtual`不能修饰友元函数。友元函数并不支持继承。
- `virtual`不能修饰内联函数。
