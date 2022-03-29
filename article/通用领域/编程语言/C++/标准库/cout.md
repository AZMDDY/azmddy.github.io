# cout

> 格式化输出可以让你打印的结果更加的整齐，在一定程度上有利于你分析和使用输出的结果。

## 整数的不同进制显示

我们可以调用`hex(ios_base& _Iosbase)`,`oct(ios_base& _Iosbase)`和`dec(ios_base& _Iosbase)`函数对 cout 对象的计数系统格式状态分别设置为 16 进制数，8 进制数和 10 进制数。完成设置后，程序将按照设置好的格式打印整数，直到格式状态发生改变为止。C++还提供了更便捷的控制符（`hex`,`oct`,`dec`）来控制输出，这两者的效果一致。

对于不同的进制显示，我们有时候希望带上基数前缀输出，C++提供了这种实现。我们使用`cout.setf(ios_base::showbase);`这个函数让输出带上基数前缀（0,0x），我们使用`cout.setf(ios_base::uppercase);`这个函数让 16 进制输出时，使用大写字母。
具体用法见以下代码。

```cpp
#include <iostream>
using namespace std;
int main()
{
    hex(cout);
    cout << 14; //e

    oct(cout); //16
    cout << 14;

    dec(cout); //14
    cout << 14;

    cout << hex << 14; //等价于第5,6行
    cout << oct << 14; //等价于第8,9行
    cout << dec << 14; //等价于第11,12行

    cout.setf(ios_base::showbase); //输出带上基数前缀（0,0x）
    cout << 156 << endl; //0x9c
    cout.setf(ios_base::uppercase); //对于16进制输出，使用大写字母
    cout << 156 << endl; //0X9C
    system("pause");
    return 0;
}
```

## 控制字段宽度

我们可以使用`streamsize width(streamsize _Newwidth)`函数设置字段宽度，并返回以前的字段宽度。这个函数只能影响将要显示的下一个项目，然后字段宽度将恢复默认值。C++永远不会截断数据，所以不用担心自己设置的字段宽度不够，当设置的字段宽度不足时，C++会增宽字段。

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout << "#";
    cout.width(12);
    cout.fill('*');
    cout << 12 << endl; //#**********12
    cout << 12 << endl; //12
    system("pause");
    return 0;
}
```

## 填充

在设置字段宽度后，那些没有被填充数字的部分实际是被填充了空格，我们通过`fill()`函数设置填充的内容，并且这个函数将会一直生效，直到重新被设置。
具体用法在控制字段宽度的例程中有所体现。

## 对齐

在某些情况下，我们希望我们的输出比较整齐，这是就需要设置对齐了。
我们可以通过`setf()`函数通过使用不同的参数达到我们的目的。在默认情况下，是右对齐。
具体使用见下面例程。

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout.setf(ios_base::right, ios_base::adjustfield); //使用右对齐
    cout.width(12);
    cout.fill('*');
    cout << 12 << endl; //**********12（右对齐）

    cout.setf(ios_base::left, ios_base::adjustfield); //使用左对齐
    cout.width(12);
    cout.fill('*');
    cout << 12 << endl; //12**********（左对齐）

    cout.setf(ios_base::internal, ios_base::adjustfield); //符号或基数前缀左对齐，值右对齐
    cout.width(12);
    cout.fill('*');
    cout << hex << 12 << endl; //0x*********c
    system("pause");
    return 0;
}
```

## 显示正号

正号的显示很简单，利用`setf(ios_base::showpos)`这个函数。这函数会一直生效，直到使用`unsetf(ios_base::showpos)`函数使之失效。注意：C++将 16 进制数和 8 进制数视作无符号。

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout.setf(ios_base::showpos);  //对于正数，在其前面加上“+”
    cout << 14 << endl; //+14
    cout.unsetf(ios_base::showpos);
    cout << 14 << endl; //14
    system("pause");
    return 0;
}
```

## 浮点数精度（默认模式）

浮点数的精度在默认的输出模式下，它指的是显示的总位数。C++默认精度是 6 位，末尾的 0 不显示。我们可通过`precision()`函数设置精度。这里的设置将会一直生效，直到被重新设置。

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout.precision(3);//在默认模式下，设置显示的总位数,新设置的精度将一直生效，直到被重新设置
    cout << 12.34 << endl; //12.3
    cout.precision(5);
    cout << 12.34 << endl; //12.340
    system("pause");
    return 0;
}
```

## 浮点数精度（定点模式）

浮点数的精度在定点模式下，它指的是小数点后面的位数。通过使用`setf(ios_base::fixed, ios_base::floatfield);`和`precision();`函数打印末尾的 0。这里的设置将会一直生效，直到被重新设置。

```cpp
#include <iostream>
using namespace std;
int main()
{
    cout.setf(ios_base::fixed, ios_base::floatfield); //使用定点计数法
    cout << 12.34 << endl; //12.340000(默认6位小数)
    cout.precision(5);
    cout << 12.34 << endl; //12.34000
    system("pause");
    return 0;
}
```

## 浮点数精度（科学模式）

浮点数的精度在科学模式下，它指的是小数点后面的位数。通过使用`setf(ios_base::scientific, ios_base::floatfield);`和`precision();`函数打印末尾的 0。这里的设置将会一直生效，直到被重新设置。

```cpp
#include <iostream>
using namespace std;
int main()
{
	cout.setf(ios_base::scientific, ios_base::floatfield); //使用科学计数法
	cout << 12.34 << endl; //1.234000e+01
	cout.precision(8);
	cout << 12.34 << endl; //1.23400000e+01
	system("pause");
	return 0;
}
```

## setf()函数的参数

| 第一个参数           | 第二个参数            | 含义                           |
| :------------------- | :-------------------- | :----------------------------- |
| ios_base::dec        | ios_base::basefield   | 使用基数 10                    |
| ios_base::oct        | ios_base::basefield   | 使用基数 8                     |
| ios_base::hex        | ios_base::basefield   | 使用基数 16                    |
| ios_base::fixed      | ios_base::floatfield  | 使用定点计数法                 |
| ios_base::scientific | ios_base::floatfield  | 使用科学计数法                 |
| ios_base::left       | ios_base::adjustfield | 使用左对齐                     |
| ios_base::right      | ios_base::adjustfield | 使用右对齐                     |
| ios_base::internal   | ios_base::adjustfield | 符号或基数前缀左对齐，值右对齐 |

我们在使用`setf()`函数设置输出格式的同时，也可以使用`unsef()`函数恢复默认设置

## 标准控制符

使用`setf()`并不是进行格式化的，对用户最为友好的方法，C++提供了很多控制符，能够代用 setf(),并自动提供正确的参数，前面使用过`dec`,`hex`和`oct`。
例如：`cout << left << fixed;`设置了左对齐和定点模式。

| 控制符      | 调用                                             |
| ----------- | ------------------------------------------------ |
| boolalpha   | setf(ios_base::boolalpha)                        |
| noboolalpha | unsetf(ios_base::boolalpha)                      |
| showbase    | setf(ios_base::showbase)                         |
| noshowbase  | unsetf(ios_base::showbase)                       |
| showpoint   | setf(ios_base::showpoint)                        |
| noshowpoint | unsetf(ios_base::showpoint)                      |
| showpos     | setf(ios_base::showpos)                          |
| noshowpos   | unsetf(ios_base::showpos)                        |
| uppercase   | setf(ios_base::uppercase)                        |
| nouppercase | unsetf(ios_base::uppercase)                      |
| internal    | setf(ios_base::internal, ios_base::adjustfield)  |
| left        | setf(ios_base::left, ios_base::adjustfield)      |
| right       | setf(ios_base::right, ios_base::adjustfield)     |
| dec         | setf(ios_base::dec, ios_base::basefield)         |
| hex         | setf(ios_base::hex, ios_base::basefield)         |
| oct         | setf(ios_base::oct, ios_base::basefield)         |
| fixed       | setf(ios_base::fixed, ios_base::floatfield)      |
| scientific  | setf(ios_base::scientific, ios_base::floatfield) |

简单的应用：

```cpp
#include <iostream>
using namespace std;
int main()
{
	cout << hex << showbase << 14 << endl;//0xe

	cout << fixed << showpos << 12.22 << endl;//+12.220000

	system("pause");
	return 0;
}
```

## 头文件 iomanip

使用 iostream 工具设置格式化输出有时候不太方便。C++在头文件 ipmanip 中提供了其他一些控制符，让我们使用变得更加方便。
3 个最常用的控制符分别为 setprecision(),setfill()和 setw()，它们分别用于设置精度，填充和字段宽度。

```cpp
#include <iostream>
#include <iomanip>
using namespace std;
int main()
{
	cout << setw(12) << setfill('*') << left << 12 << endl;//12**********
	cout << setprecision(7) << fixed << 12.3 << endl;//12.3000000
	system("pause");
	return 0;
}
```
