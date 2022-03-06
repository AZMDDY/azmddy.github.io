# 为什么Qt会使用堆对象（指针）而不是栈对象？

> 对于C++开发者来说，对象的生命周期和内存管理都是需要特别关注的，Qt为什么new了对象，却不需要我们delete？会不会内存泄露？心中总有一种不安。



首先需要区分new了什么，如果是Qt的对象，需要将对象关联到父对象。这是由于Qt的内存管理机制：`当父对象在销毁时会自动删除子对象，Qt内存管理使用于对象的层次结构`。如果不是Qt的对象，就需要自己关注对象的生命周期和内存管理了。

```cpp
QWidget* w = new QWidget();
QPushButton* pushBtn = new QPushButton(w);
delete w;
```

对于这段代码，我们首先创建了一个`QWidget`对象，由于没有指定它的父对象，所以它的内存需要我们自己管理，`QPushButton`对象创建时关联了父对象`w`，在析构`w`时，会先析构掉`pushBtn`。

我们可以看一下源码：

因为继承的原因我们直接看`QObject`这个类就好了。

![image-20220306155226591](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220306155226591.png)

如果我们创建对象的时候指定了父对象，就会被加到`children`这个`QObjectList`中。`setParent`函数也是一样的作用。也就是只要是继承了`QObject`，不论是直接继承还是间接继承，都可以利用qt的这套内存管理方式。

我们再看一下析构函数：

函数有点长，只截取我们关注的部分。

![image-20220306155753793](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220306155753793.png)

在这里可以发现析构的是会调用`deleteChildren`去删除子对象。

![image-20220306160000103](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/img/image-20220306160000103.png)

这个函数就在删除对象的子对象。

到这里就很清晰明了了。



参考：

+ [Qt源码下载地址：https://download.qt.io/archive/qt/](https://download.qt.io/archive/qt/)



