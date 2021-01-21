# table深拷贝

lua中table类型的赋值是引用传递，而不是值传递，类似于指针，table类型的赋值双方都实际指向的内容是相同的。

针对需要深拷贝的场景就需要自己去实现。


递归实现深拷贝，拷贝所有层次，对于大型表，有可能会堆栈溢出。

```Lua
function deepcopy(orig)
    local orig_type = type(orig)
    local copy
    if orig_type == 'table' then
        copy = {}
        for orig_key, orig_value in next, orig, nil do
            copy[deepcopy(orig_key)] = deepcopy(orig_value)
        end
        setmetatable(copy, deepcopy(getmetatable(orig)))
    else -- number, string, boolean, etc
        copy = orig
    end
    return copy
end
```