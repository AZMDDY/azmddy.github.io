# Lua —— table排序(table.sort)

Lua中的table拥有排序函数，我们可以自定义比较函数，如果没有使用默认比较函数，则会按照升序排序。

官方手册明确说明了，这个排序算法不稳定，两个相同的元素可能在排序过程中改变相对位置。

如果自定义了排序函数，则排序函数必须有两个入参（table中的元素），并且返回这两个元素的排序结果(ture or false)。

table中不应该有`nil`，否则会执行错误。

示例：

```Lua
local stduent = {{name="Json", age=12}, {name="Tom", age=10}, {name="Jack", age=11}}

table.sort(stduent, function(a, b)
    return a.age <= b.age
end)

for _, person in pairs(stduent) do
    print(string.format("name: %s, age: %d", person.name, person.age))
end
```