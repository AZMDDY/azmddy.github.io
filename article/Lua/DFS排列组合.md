# dfs排列组合

从n堆书中，各取一本，共有多少种组合，输出所有组合。

```Lua
{% raw %}
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

books = {{'A', 'B'}, {'C', 'D', 'E'}, {'F'}}

function compose(books)
    function dfs(data, dep, ret, res)
        if dep < 1 then
            table.insert(res, deepcopy(ret))
            return
        end
        for j = 1, #data[dep] do
            table.insert(ret, deepcopy(data[dep][j]))
            dfs(data, dep - 1, ret, res)
            table.remove(ret)
        end
    end

    local result = {}
    dfs(books, #books, {}, result)
    return result
end
{% endraw %}
```