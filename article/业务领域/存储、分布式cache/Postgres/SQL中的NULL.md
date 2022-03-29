# SQL 中的 NULL

NULL 即空值，当一个属性（字段）为 NULL 时，表示这个属性没有值。对于 NULL，因为它不是一种值，只是标识属性是`unknown`，**它是不可比较的**，只有`IS NULL`或`IS NOT NULL`才能匹配属性是 NULL 的字段。

在查询条件中，如果`>`、`>=`、`<`、`<=`、`<>`和`=`的两端的操作数有 NULL，那这个条件的结果将是 NULL。

```sql
-- 以下结果都是NULL
SELECT 12 > NULL;
SELECT 'asd' >= NULL;
SELECT 1.88 < NULL;
SELECT -12 <= NULL;
SELECT NULL = NULL;
SELECT NULL <> NULL;
```

如果条件中有 NULL，那查询会有什么表现呢？

在说这个之前，得先知道`SQL`中条件的三种结果，其实看上面的实例，就应该知道了，因为大家肯定都知道`TRUE`和`FALSE`，上面也展示了另一个结果 —— `NULL`。

- `NULL`：没有匹配上；
- `FALSE`：没有匹配上；
- `TRUE`：匹配上了；

理解以上解释就能明白，当逻辑条件（`AND`、`OR`、`NOT`）中有`NULL`时，那这个条件就始终和表中的属性无法匹配。

其实可以将带有 NULL 的条件（除了`IS NULL`和`IS NOT NULL`）都视为`FALSE`，谁也无法和`NULL`匹配。但特别要注意一点，`NOT`修饰带有`NULL`的条件也不能使条件成立（匹配），还是`NULL`，这就和`NOT FALSE`的结果不一样了。

```danger
千万不要将`NOT NULL`理解为非空！！！
```

```sql
SELECT NULL OR TRUE; -- TRUE
SELECT NULL AND TRUE; -- NULL
SELECT NOT NULL; -- NULL
SELECT NOT FALSE; -- TRUE
SELECT NOT (1 = NULL); -- NULL
SELECT NULL IS NULL; -- TRUE
SELECT NULL IS NOT NULL; -- FALSE
```
