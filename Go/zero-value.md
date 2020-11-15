---
sort: 2
---

# 零值

Go语言中零值时变量没有做初始化的时候系统默认设定的值。

|Type|Zero Value|
|:--:|:--------:|
|bool|false|
|string|""|
|byte|0|
|rune|0|
|int, int8, ...|0|
|float32, float64|0.0|
|complex64, complex128|0.0 + 0.0i|
|*int|nil|
|[]int|nil|
|[5]int|[0, 0, 0, 0, 0]|
|map[string] int|nil|
|chan int|nil|
|func(string) int|nil|
|error|nil|

+ 数组初始化时，数组中的元素都被初始化为该类型的零值；
+ 使用make函数初始化的切片值的每一个元素值都是其类型的零值；