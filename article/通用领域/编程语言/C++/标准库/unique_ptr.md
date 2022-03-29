# unique_ptr(智能指针)

> 智能指针是用于帮助管理动态内存分配的智能指针模板，其目的是为了帮助解决程序在堆中分配了内存，由于程序员忘记释放内存而导致的内存泄露问题。

**unique_ptr**智能指针模板定义了类似指针的对象，可以将 new 获得的地址赋值给他们，当智能指针过期的时候，其析构函数将使用 delete 来释放内存。因此，如果将 new 返回的地址赋值给这些对象，将无需记住稍后要释放这些内存：在智能指针过期的时候，这些内存将自动被释放。

unique_ptr 与 shared_ptr 的区别从单词就可以看出来，unnque_ptr 强调的是独一无二，在某一时刻只能有一个 unique_ptr 指向特定的对象。当 unique_ptr 销毁时，它所指的对象也会被销毁。

与 shared_ptr 一样，unique_ptr 初始化必须直接初始化，不支持隐式转换。与 shared_ptr 不同的是，unique_ptr 不支持拷贝和赋值操作。

```cpp
unique_ptr<int> p1; // 可以指向一个int的unique_ptr
p1 = unique_ptr<int>(new int(11)); // allowed; 支持移动赋值
p1 = new int(10); // not allowed! 不支持隐式转换
unique_ptr<int> p2(new int(23)); // allowed! 支持移动拷贝
unique_ptr<int> p3(p2) // not allowed! 不支持普通的拷贝
p1 = p2; // not allowed! 不支持普通赋值
```

以上的特点都是印证了一点：unique_ptr 对它所指向的对象拥有独一无二的主权。这一特点在函数返回一个 unique_ptr 中也有体现。我们可以拷贝或者赋值一个即将被销毁的 unique_ptr.

虽然我们不能拷贝或者赋值 unique_ptr，但可以通过 release 或者 reset 将指针的所有权转移。

```cpp
unique_ptr<int> p1(new int(10));
unique_ptr<int> p2(new int(48));
p1.reset(); // 释放p1指向的内存, p1置空
int *pt = p2.release(); // p2放弃对指针的控制权，返回一个普通指针，并将p2置成空。
p1.reset(pt); // p1获得pt的控制权，如果p1对其它指针有控制权，那么就放弃原来的控制权。
p2 = unique_ptr<int>(new int(21));
p1 = nullptr;
// same as:
// p1.reset();
p2.reset(nullptr);
// same as:
// p2 = nullptr;

```

当我们使用 release 函数，收回智能指针对原来管理对象的所有权时，并不会释放内存，因为它返回了一个常规指针，这时需要程序去负责资源的释放。

```cpp
unique_ptr<int> ptr(new int(10));
ptr.release(); // 错误，资源没有释放，并且丢失了常规指针
auto p = ptr.release(); // 正确，但是需要记住delete p;
delete p;
```

类似于 shared_ptr, unique_ptr 默认情况下用 delete 释放它指向的对象。同样我们可以重载一个删除器，但是 unique_ptr 管理删除器的方式与 shared_ptr 不一样。重载一个 unique_ptr 中的删除器会影响到 unique_ptr 类型以及如何构造该类型的对象。所以我们需要在尖括号中指名删除器的类型。我们需要使用 decltype 指名函数指针的类型，由于 decltype(selfdel)返回一个函数类型，所以需要加一个\*指名我们在使用该类型的一个指针。

```cpp
// unique_ptr<objT, delT>p(new objT, fcn);
void selfdel(int *p){
    cout << "delete..." << endl;
    delete p;
}

unique_ptr<int, decltype(selfdel)*> ptr(new int(10), selfdel);

```
