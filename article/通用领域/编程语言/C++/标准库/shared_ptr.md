## shared_ptr(智能指针)

## 简介

> 智能指针是用于帮助管理动态内存分配的智能指针模板，其目的是为了帮助解决程序在堆中分配了内存，由于程序员忘记释放内存而导致的内存泄露问题。**shared_ptr**智能指针模板定义了类似指针的对象，可以将new获得的地址赋值给他们，当智能指针过期的时候，其析构函数将使用delete来释放内存。因此，如果将new返回的地址赋值给这些对象，将无需记住稍后要释放这些内存：在智能指针过期的时候，这些内存将自动被释放。

## 介绍

创建智能指针对象，需要包含头文件memory，需要注意的是智能指针模板位于命名空间std中，与此同时，您的编译器需要支持C++11。

智能指针模板类不允许将常规指针隐式转换成智能指针，我们需要通过显式转换成智能指针。

下面是具体实例：
```cpp
shared_ptr<int> pd; // pd is a shared_ptr to int
int *p_reg = new int;
pd = p_reg; // not allowed (implicit conversion)
pd = share_ptr<int>(p_reg); // allowed (explicit conversion)

share_ptr<int> pshared = p_reg; // not allowed (implicit conversion)

share_ptr<int> pshared(p_reg); // allowed (explicit conversion)

shared_ptr<int>pshared(new int); // allowed

```

当智能指针对象获得了普通指针后，可以对它进行解除应用操作(*pd),用它来访问结构成员，将它赋值给指向相同类型的常规指针，还可以将它赋值给另一个同类型的智能指针对象。

但是需要注意避免下面情况:

```cpp
string vacation("I wandered lonely as a cloud");
shared_ptr<string> pv(&vaction); // NO!
```

pv过期时，会调用它的析构函数去delete非堆内存，这是错误的。

shared_ptr智能指针，跟踪引用特定对象的智能指针数，这称为引用计数，例如，赋值时，计数加一，指针过期时计数减一，当最后一个指针过期时，才会调用delete.

```cpp
int *tmp = new int;
shared_ptr<int> pv(tmp);
{
    shared_ptr<int>pt = pv; // reference count plus one
}
// reference count minus one

```

对比于常规指针，将一个常规指针(p1)赋值给另一个指向同类型的常规指针(p2)，如果对p2进行了delete,但是由于疏忽，在程序中对p1也进行了delete，这是不可以的。同时delete一个常规指针后，这个指针就变成了悬空指针，这也是不安全的行为，可以通过将nullptr赋值给那个常规指针，这样就很清楚这个指针不指向任何对象。

使用智能指针的时候，注意，一旦使用了智能指针，就不应该通过常规指针来访问shared_ptr所指向的内存了。

```cpp
// 参数为值传递，实参会拷贝到ptr中，引用计数会增加，process结束时，
// 引用计数会递减，不会为零，局部变量ptr被销毁时，它指向的内存并不
// 会被释放。
void process(shared_ptr<int> ptr){

} 

shared_ptr<int> p(new int(42));
process(p);
int i = *p; // OK!

int *tmp = new int(1033);
process(shared_ptr<int>(tmp));
int j = *tmp; // undefinition! tmp为一个悬空指针
// 上面的调用中，将一个临时的shared_ptr传递给了process,当函数调用
// 结束时，临时对象会被销毁，它所指向的内存也会被释放！
```

在使用智能指针shared_ptr时，我们可以弱化new的概念，通过make_shared函数去分配对象并且将shared_ptr与之绑定，从而避免混合使用常规指针和智能指针的问题。

```cpp
shared_ptr<int> ptr = make_shared<int>(10);
// same as:
shared_ptr<int> pv(new int(10));
// same as:
int *tmp = new int(10);
shared_ptr<int> ptr(tmp);
```

慎用get()函数：

智能指针类型定义了一个get函数，它返回一个常规指针，指向指针指针管理的对象，请注意，使用get返回的指针的时候，不能delete此指针，同时也不要使用这个指针去初始化另一个智能指针或为智能指针赋值。因为这回导致二次delete.

```cpp
{
    shared_ptr<int> ptr(new int(10));
    int *p = ptr.get();
    {
        shared_ptr<int> pv(p);
    }// pv销毁时，释放p指向的内存
}// ptr销毁时，再次释放，not allowed!

```

关于引用计数：

```cpp
shared_ptr<int> ptr(new int(10));
shared_ptr<int> pv = ptr; // ptr管理的内存的引用计数加一
share_ptr<int> tmp(new int(20));
tmp = ptr; // ptr管理的内存的引用计数加一，tmp管理的内存引用计数减一，变成0,释放了内存。

tmp.reset(new int(1024)); // 给tmp分配一个新的管理内存的指针

tmp.reset(new int(512)); // 首先会释放原来管理的内存，然后从新赋予一个指针。
```

这就是在智能指针赋值操作里的右值计数加一，左值计数减一，通过上面的实例发现在初始化智能指针的时候，就不要考虑左值计数减一了。这些操作类似于reset操作。

默认情况下，shared_ptr假定他们指向的是动态内存，因此当一个智能指针被销毁的时候，他默认对他管理的指针进行delete操作。

对于没有自定义析构函数，但需要在对象销毁前进行一些操作的对象，使用默认的delete操作是无法满足要求的，所以我们需要使用自己的释放操作，shared_ptr提供了这样的使用方法.

```cpp
//现在有一个Test类

// 这是自定义的释放操作
void release(Test *tmp) {cout << "user defined" << endl; delete tmp;}

shared_ptr<Test> p(new Test, release);
```

这个自定义操作可以用在释放动态数组空间上。

```cpp
//常规指针分配和释放动态数组空间内存
int *tmp = new int[10]{0};
delete[] tmp;
tmp = nullptr;

tmp = new int[5];
shared_ptr<int[]> ptr(tmp); // not allowed
shared_ptr<int[]> ptr(tmp, [](int *p){delete[] p;}); // OK! 这里使用了lambda释放数组

for(int i = 0; i < 5; i++){
    *(ptr.get() + i) = i;
    // same as: *(tmp + i) = i;
}

```
shared_ptr不直接支持管理动态数组，如果希望它能够管理一个动态数组，必须提供自定义的删除器。由于这个特性，我们无法通过shared_ptr使用下标运算符，并且不支持指针的算术运算。这个时候就需要用的get去获得一个常规指针，然后利用它来访问数组元素。