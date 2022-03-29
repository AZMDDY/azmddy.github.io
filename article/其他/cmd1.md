# shell 脚本中的 set -e

```shell
# Exit immediately if a simple command exits with a non-zero status.
set -e
```

`set -e` 放在 shell 脚本的首部，在执行有`set -e`的脚本时，只要语句返回的结果不为零，脚本就会退出。对于安全性要求比较高的脚本来说是十分有必要的，不放过任何一个错误。

在需要自己处理返回值非零的情形时就不适用`set -e`。
