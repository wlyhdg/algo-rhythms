/*
Given a binary tree, convert it to a full one by removing nodes with only one child
*/

// Node Class
class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function removeUnevenNodes(node) {
  // Base Case
  if(!node) {
    return null;
  }
  
  // We do a post-order traversal because we want to inspect the children first and then compute logic of whether we need to swap 
  // the current node with a child node
  
  node.left = removeUnevenNodes(node.left);
  node.right = removeUnevenNodes(node.right);
  
  // Check if current node is either a leaf (has no children) or is complete (has both children). We want to keep it in this case since it follows our rule.
  if(!(!!node.left ^ !!node.right)) {
    return node;
  }
  
  // Check if there is no left node and check the truthy value of the right node. If uneven, only get the child that is a valid.
  if(!node.left && !!node.right) {
    return node.right;
  }
  
  // Check if there is no right node and check the truthy value of the left node. If uneven, only get the child that is a valid.
  if(!!node.left && !node.right) {
    return node.left;
  }
}

// Test
let root = new Node(2);
root.left = new Node(1);
root.right = new Node(4);
root.left.left = new Node(5);
root.left.left.right = new Node(7);
root.right.right = new Node(8);
root.right.right.left = new Node(10);
root.right.right.right = new Node(11);

let test = removeUnevenNodes(root);
console.log(test.right.val === 8)

// Time: O(n) w.r.t. all nodes in tree
// Space: O(n) w.r.t. all nodes
