/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

var function = isValidBST(root) {
  function dfs(root, min, max) {
  
    // if there are no left/right nodes left the tree up to this point is considered okay
    if(!root) {
      return true;
    }
    
    // skip first round of min/max check since both default to null
    // this also checks if our recursive call root value is within previous constraints 
    // ASSUMPTION: excluding same values in BST
    if (min !== null && root.value >= min || max !== null && root.value <= max ) {
      return false;
    }
    
    // return final truthiness of left and right branches
    return dfs(root.left, root.val, max) && dfs(root.right, min, root.val);
  }
  
  return dfs(root, null, null);
}

// Space Complexity: O(1)
// Time Complexity: O(N) wrt to height of the tree
