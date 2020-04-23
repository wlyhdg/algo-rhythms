/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let arr = [];
    dfs(root, arr);
    return arr;
    function dfs(root, arr) {
        if (!root) {
            return
        }   
        if(root.left)
            dfs(root.left, arr)
        arr.push(root.val)
        if(root.right)
            dfs(root.right, arr)

    }
};

// Can do this problem iteratively by using a Stack; while stack is not empty and current node is not null, add current node and then while loop left side and add to stack
// Add right side after


// Space Complexity: O(n) wrt nodes of tree
// Time Complexity: O(n) wrt nodes of tree
