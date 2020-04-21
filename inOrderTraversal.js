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
