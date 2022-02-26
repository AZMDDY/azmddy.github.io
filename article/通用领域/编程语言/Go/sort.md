# 自定义类型的sort排序

使用`sort.Interface`接口进行排序，需要实现它的三个方法：

```go
type Interface interface {
	// Len is the number of elements in the collection.
	Len() int
	// Less reports whether the element with
	// index i should sort before the element with index j.
	Less(i, j int) bool
	// Swap swaps the elements with indexes i and j.
	Swap(i, j int)
}
```

以二维数组（这里是一个点集）为例：

```go
package main

import (
	"fmt"
	"sort"
)

type PointsType [][]int

func (v PointsType) Len() int {
	return len(v)
}

func (v PointsType) Less(i int, j int) bool {
	return v[i][0]*v[i][0]+v[i][1]*v[i][1] < v[j][0]*v[j][0]+v[j][1]*v[j][1]
}

func (v PointsType) Swap(i int, j int) {
	v[i], v[j] = v[j], v[i]
}

func main() {
	points := PointsType{
		{2, -1},
		{1, 1},
		{3, -1}}
	sort.Sort(points)
	for _, p := range points {
		fmt.Printf("(%d, %d)\n", p[0], p[1])
	}
}

```