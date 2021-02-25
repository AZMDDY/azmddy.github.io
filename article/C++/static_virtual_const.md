# C++ 中的static, virtual, const

`static`变量和`static`(成员)函数在程序的生命周期中始终存在，从始至终。

但`static`的全局变量的作用域仅在本文件。

所有的未初始化的静态变量的所有位都被置`0`。

`static`成员函数不能用`virtual`和`const`修饰。类的所有对象都能使用这个函数，没用动态绑定；`static`成员函数不属于任何一个对象，不用带用`this`指针，而`const`成员函数会有`const this`指针；

`static`不能修饰构造函数。

静态成员函数不能访问非静态成员变量。



`virtual`无法修饰普通函数，普通函数只有`overload`没有`override`。

`virtual`不能修饰`static`成员函数。

`virtual`不能修饰构造函数，因为`vptr`需要构造函数初始化，如果构造函数为`virtual`，就没办法产生`vptr`。

`virtual`不能修饰友元函数。友元函数并不支持继承。

`virtual`不能修饰内联函数。



`const`修饰的函数中不能访问非`const`变量。

`const`是可以作为函数签名的，也就是说`void Func();`和`void Func() const;`是两个不同的函数。



