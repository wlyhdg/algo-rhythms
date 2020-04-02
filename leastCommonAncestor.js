/* 
For a BST we know we are binded by the rule that the left child value of a node has to be less than the node value & 
the right child value of a node has to be greater than the node value

Picture of our goal: [ v1 <value> v2 ]

*/

function lca(root, v1, v2) {
  // Edge case incase values are not in the tree and we have no more leaf nodes
  if(!root) {
    return null;
  }
  
  // We are positioned outside the right boundary of ranges ie. [v1  v2]   <value>
  if(node.info > v1.info && node.info > v2.info) {
    lca(root.left, v1, v2);
  }
  
  // We are positioned outside the right boundary of ranges ie. <value>   [v1  v2] 
  if(node.info < v1.info && node.info < v2.info) {
    lca(root.right, v1, v2);
  }
  
  // Once we finally get in a position where our value is in between both maximas, return the lca node
  // ie. [v1 <value v2]
  if(node.info > v1.info && node.info < v2.info) {
    return node;
  }
}
