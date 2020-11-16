# 方法

在Go中，方法是函数的一种，它实际上是和某个数据类型关联在一起的函数，也可以称之为作用在接收者(receiver)上的一个函数。

定义方法的一般格式：

```go
func (recv receiver_type) methodName(parameter_list) (return_value_list) { ... }
```

+ 当`recv`是`receiver`的实例，`Method`是它的方法时，方法的调用：`recv.Method()`
+ 当`recv`是指针时，Go会自动解引用。

例如：

```go
type myInt int

func (i *myInt) add(another int) myInt {
    *i = *i + myInt(another)
    return *i
}

i1 := myInt(1)
i2 := i1.add(2) // 自动解引用： (&i1).add(2)
fmt.Println(i1, i2)
```

如果不需要使用到`recv`的值。可以使用`_`来替换它。

```go
func (_ receiver_type) methodName(parameter_list) (return_value_list) { ... }
```

其实可以将方法看作将`receiver`作为入参的函数。

```go
func methodName(recv receiver_type, parameter_list) (return_value_list) { ... }
```

那么如果想改变接收者的值，就在接收者的指针类型上定义该方法，否则，就在普通的值类型上定义方法。