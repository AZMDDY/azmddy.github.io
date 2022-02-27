# signals2

> signals2 基于Boost里的另一个库signals，实现了线程安全的观察者模式。它是一种函数回调机制，当一个信号关联了多个槽时，信号发出，这些槽将会被调用。

其实Qt也提供了它自己的**信号和槽机制**，那个是非常的灵活和好用的，但是它依赖于Qt的框架，所以退而求其次，选择了Boost提供了`signals2`;

signals2库位于命名空间`boost::signals2`中，为了使用它，需要包含头文件`<boost/signals2.hpp>`;

## 信号（Signal）

signal是不可拷贝的，如果将signal作为类的成员变量，那么类将不能被拷贝，除非使用只能智能或者是引用间接的持有它；

signal是一个模板类，它的定义如下：

```cpp
    template<typename Signature, 
             typename Combiner = boost::signals2::optional_last_value<R>, 
             typename Group = int, typename GroupCompare = std::less<Group>, 
             typename SlotFunction = boost::function<Signature>, 
             typename ExtendedSlotFunction = boost::function<R (const connection &, T1, T2, ..., TN)>, 
             typename Mutex = boost::signals2::mutex> 
      class signal;
```

第一个模板参数`Signature`的含义和`function`相同，也是一个函数类型，表示signal调用的函数（槽，事件处理handler）,例如： 

```cpp
signal<void(int, double)> sig;
```

第二个模板参数`Combiner`是一个函数对象，它被称为‘合并器’，用于组合所有槽的返回值，默认是`boost::signals2::optional_last_value<R>`，返回最后一个被调用的槽的返回值；

第三个模板参数`Group`是槽编组的类型，你可以为你的槽设置不同的组，默认组的类型是int，通常情况下，不需要更改；

<!--more>
第四个模板参数`SlotFunction`是

第五个模板参数`ExtendedSlotFunction`是

第六个模板参数`Mutex`是
<!more-->
## 连接（connect）

```cpp
connection connect(const group_type &group,const slot_type &slot, connect_position position = at_back)
```

它作为signal的成员函数，具有三个参数，第一个参数表示这个槽所属的组，第二的参数表示信号触发哪个槽函数，而最后的参数，表示槽函数在响应队列中响应的位置，默认`at_back`表示这个槽函数出来队列的末尾，它将在其他槽函数之后被调用。

## 实例

### 不带返回值的槽函数

```
#include <iostream>
#include <boost/signals2.hpp>
using namespace boost::signals2;
void slots1() {
    std::cout << "slot 1 called" << std::endl;
}

void slots2(int a) {
    std::cout << "slot 2 called " << a << std::endl;
}

void slots3(int a) {
    std::cout << "slot 3 called " << a << std::endl;
}

void slots4(int a) {
    std::cout << "slot 4 called " << a << std::endl;
}

int main() {
    signal<void()>sig1;
    sig1.connect(&slots1);
    sig1(); // the slot 1 called
    signal<void(int)>sig2;
    sig2.connect(1, &slots2);
    sig2.connect(2, &slots3);
    sig2.connect(2, &slots4, at_front); // slot 4 处于 第二组的最前面
    // 槽函数的调用，首先是比较连接的组的先后循序，然后根据组内循序调用；
    sig2(2); //  slot 2 called slot 4 called slots3 called
    return 0;
}
```

当槽函数带参数的时候，参数是通过信号传递的，所以需要保持信号和槽的参数的个数一致

结果如下：

![](https://raw.githubusercontent.com/AZMDDY/imgs/master/img/image_1d1t1c8jr1qt91vup1j40quh1cggp.png)

### 带参数的槽函数

```cpp
#include <iostream>
#include <boost/signals2.hpp>
using namespace boost::signals2;
int slots1(int a) {
    std::cout << "slot 1 called " << a << std::endl;
    return a + 1;
}

int slots2(int a) {
    std::cout << "slot 2 called " << a << std::endl;
    return a + 2;
}

int slots3(int a) {
    std::cout << "slot 3 called " << a << std::endl;
    return a + 3;
}

int main() {
    signal<int(int)> sig;
    sig.connect(&slots1);
    sig.connect(&slots2, at_front);
    sig.connect(&slots3);
    std::cout << *sig(0) << std::endl;
    return 0;
}
```

在默认情况下，一个信号连接多个槽函数，并且槽函数是带有返回值的，那么这个信号将返回槽函数队列中的最后一个的返回值。

结果如下：

![image_1d1t252qt1bec1md11vrb112611m71m.png-55.5kB](https://raw.githubusercontent.com/AZMDDY/imgs/master/img/image_1d1t252qt1bec1md11vrb112611m71m.png )

### 合并器

自定义合并器可以让我们处理多个槽的返回值；

```cpp
template<typename T>
struct Combiner {
    typedef vector<T> result_type;
    template<typename InputIterator>
    result_type operator()(InputIterator first, InputIterator last) const {
        if(first == last) {
            return result_type(0);
        }
        return result_type(first, last);
    }
};
```

这是一个典型的合并器，它返回一个拥有所有槽的返回值的一个vector,我们可以随便定义合并器的返回类型，但要注意，一定要通过 `typedef your_type result_type`去注册一下你的返回值类型；

具体的用法如下：

```cpp
#include "boost/signals2.hpp"
#include <iostream>
#include <vector>
using namespace std;
using namespace boost::signals2;

template<typename T>
struct Combiner {
    typedef vector<T> result_type;
    template<typename InputIterator>
    result_type operator()(InputIterator first, InputIterator last) const {
        if(first == last) {
            return result_type(0);
        }
        return result_type(first, last);
    }
};

int slots3(int x) {
    return x + 3;
}

int slots4(int x) {
    return x + 4;
}

int main() {
    signal<int(int), Combiner<int> > sig;
    sig.connect(&slots3);
    sig.connect(&slots4);
    auto result = sig(1);
    for(const auto& i : result) {
        cout << i << endl;
    }    
    return 0;
}

```

### 断开连接

```cpp

// 以上省略一些代码
sig.connect(0, &slots1);
sig.connect(0, &slots2);
connection c1 = sig.connect(1, &slots3);
sig.connect(2, &slots4);
sig.connect(2, &slots5);
sig();
sig.disconnect(0); // 断开组号为0的连接
cout << sig.num_slots() << endl; // 还有三个连接
sig();
sig.disconnect(2); // 断开组号为2的连接
sig();
c1.disconnect(); // 断开slot3的连接

```

以上两种方法都是可以的；

### 临时连接

Boost提供了一个临时的连接方式`scoped_connection`，也就是有作用域的连接；

```cpp
// 以上省略了一些代码
sig.connect(&slots1);
{ // 进入作用域， 建立临时的连接
    scoped_connection sc = sig.connect(&slots2);
    cout << sig.num_slots() << endl;
} // 离开作用域就自动断开了连接
cout << sig.num_slots() << endl;
```

### 阻塞连接

Boost提供了一个`shared_connection_block`实现阻塞和解除阻塞连接的操作，当它被析构(离开作用域)或者被显式的调用`unblock()`就好解除阻塞；

```cpp
// 以上省略一些代码
connection c1 = sig.connect(slots1);
connection c2 = sig.connect(slots2);
connection c3 = sig.connect(slots3);
connection c4 = sig.connect(slots4);
sig();
{
    shared_connection_block block(c1); // 阻塞了c1
    sig(); //c1不会被调用
}
sig();
```

### 触发成员中的槽函数

我们使用signal通常是为了实现类间的通信，实现观察者模式；

我们需要使用bind()函数绑定槽函数，返回函数对象；
```cpp
#include "boost/signals2.hpp"
#include <iostream>
#include <vector>
using namespace std;
using namespace boost::signals2;

class C_Slots1 {
public:
    int SL(int a) {
        cout << "slot 1 called" << a << endl;
        return a;
    }
    void SL1(int a, int b) {
        cout << "slot 2 called " << a << " " << b << endl;
    }
};

int main() {
    signal<int(int)> sig1;
    sig1.connect(bind(&C_Slots1::SL, &cs_1,_1)); // 绑定对象的成员
    signal<void(int, int)>sig2;
    sig2.connect(bind(&C_Slots1::SL1,&cs_1, _1, _2));
    cout << *sig1(10) << endl;
    sig2(1, 2);
    return 0;
}
```


### 自动断开

当槽函数被意外销毁时，信号调用会发生未定义的行为。我们希望它能够跟踪槽函数的生命周期，当槽函数失效时，连接会自动断开；

我们通过`boost::shared_ptr`来管理槽函数的生命周期，`track()`函数来跟踪槽所使用的资源；(`boost::shared_ptr`与`std::shared_ptr`功能上一样，但是实现不一样，是不一样的！！！)

```cpp
#include "boost/signals2.hpp"
#include <iostream>
#include <vector>
using namespace std;
using namespace boost::signals2;

class C_Slots {
public:
    int SL(int a) const{
        cout << "slot 1 called" << a << endl;
        return a;
    }
};

int main() {
    typedef signal<int(int)> signal_t;
    signal_t sig;
    boost::shared_ptr<C_Slots> p_c1(new C_Slots2());
    sig5.connect(signal_t::slot_type(&C_Slots::SL, p_c1.get(), _1).track(p_c1));
    cout << *sig(2) << endl;
    return 0;
}
```
