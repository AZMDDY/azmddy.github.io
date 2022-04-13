# C++ main函数的传入参数(argc, argv)

> argc: argument count；argv: argument vector。

```cpp
int main(int argc, char** argv)
{
    return 0;
}
```

我们编译好一个程序（`a.out`）后，可以通过在程序后面添加参数的方式，将参数传递到程序内部。`./a.out param1 param2`

对于C/C++程序，我们可以通过`int main(int argc, char** argv)`或`int main(int argc, char* argv[])`来获取传递到程序的参数。

+ argc：代表参数个数。
+ argv：参数数组。都是以字符串存储着。

注意：`argv[0]`是程序名称。例如我们这样执行程序`./a.out`，则`argv[0] == "./a.out"`。

我们可以写一个小函数来将传递到程序的参数存起来。

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

std::vector<std::string> GetArgs(int argc, char** argv)
{
    if (argc <= 0 || argv == nullptr) {
        return {};
    }
    std::vector<std::string> args;
    args.reserve(argc);
    for (int i = 0; i < argc; i++) {
        args.emplace_back(argv[i]);
    }
    return args;
}

int main(int argc, char** argv)
{
    auto args = GetArgs(argc, argv);
    for (const auto& arg : args) {
        cout << "arg: " << arg << endl;
    }
    return 0;
}
```

