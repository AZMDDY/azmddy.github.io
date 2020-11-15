---
sort: 7
---

# LeetCode —— 129. 求根到叶子节点数字之和

## 题目

![](https://raw.githubusercontent.com/AZMDDY/imgs/master/20201029194911.png)

## 思路

看到二叉树的题目，首先就会想到它的四种遍历，对于题目中要求，首先要获得根到某一叶子节点所代表的数字，然后再求所有数字之和。深度优先搜索就可以实现，只需要在达到叶子节点时加和就可以。
## 实现

### C++

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    void Dfs(TreeNode* node, int& ans, int res)
    {
        if (node == nullptr) {
            return;
        }
        res = res * 10 + node->val;
        if (node->left == nullptr && node->right == nullptr) {
            ans += res;
            return;
        }
        Dfs(node->left, ans, res);
        Dfs(node->right, ans, res);
    }

    int sumNumbers(TreeNode* root)
    {
        int ans = 0;
        Dfs(root, ans, 0);
        return ans;
    }
};
```

### Python

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:

    def Dfs(self, node: TreeNode, tmp: int) -> int:
        if node is None:
            return 0
        tmp = tmp * 10 + node.val
        if node.left is None and node.right is None:
            return tmp
        return self.Dfs(node.left, tmp) + self.Dfs(node.right, tmp)

    def sumNumbers(self, root: TreeNode) -> int:
        return self.Dfs(root, 0)
```

### Go

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func Dfs(node *TreeNode, tmp int) (ans int) {
	if node == nil {
		return 0
	}
	tmp = tmp * 10 + node.Val
	if node.Right == nil && node.Left == nil {
		return tmp
	}
	return Dfs(node.Left, tmp) + Dfs(node.Right, tmp)
}

func sumNumbers(root *TreeNode) int {
	return Dfs(root, 0)
}
```
