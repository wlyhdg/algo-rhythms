// Definition for a binary tree node
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Add any helper functions you may need here


function visibleNodes(root) {
  // Write your code here
  return rec(root, 0)
  
  function rec(root, level) {
    if (!root) {
      return level
    }
    

    let left = rec(root.left, level + 1)
    let right = rec(root.right, level + 1)
    
    return Math.max(left, right)
  }
}
