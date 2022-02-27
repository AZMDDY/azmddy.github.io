# shell脚本中数组作为参数传递

在shell脚本中将数组作为参数传递给函数或者其它脚本，遇到的最大的问题是如何将存着字符串(中间包含空格的字符串)的数组正确传递并解析。方法如下：

```Bash
arr_1=(1 2 3 4 5)
arr_2=(how are you)
arr_3=("hello world" "hi shell" "oh my god")

function GetStr() {
    # 加括号是为了将传入的参数重新组织成数组
    arr=("$@")
    echo "arr len: ${#arr[*]}"
    for i in "${arr[@]}"; do
        echo $i
    done
}

GetStr "${arr_1[@]}"
GetStr "${arr_2[@]}"
GetStr "${arr_3[@]}"
```

结果如下：

![](https://cdn.jsdelivr.net/gh/AZMDDY/imgs/20201223213502.png)

PS:

`$@`: 将每个参数都看作单独的单词
`$*`: 将所有参数看作一个单词