class Solution {
	constructor() {
  	this.count = 0
  }
  
  // driver method
  countUnivalTrees(arr) {
    this.rec(arr, 0, 0)
    return this.count
  }
  
  // depth first search to continuously go through the tree that is in array format
  rec(arr, count, i) {
	  
    // if we have reached the end of the tree this indicates a leaf parent
    if (i >= arr.length) {
      return false;
    }
  
    // if on iteration the value at our i index is null, this child is missing
    if (arr[i] === null) {
      return false;
    }
  
    // We are looping through each left (2n + 1) node and each right (2n + 2) node of a tree
    // If both childs are the same value (arr[x] === arr[y]) or both values are missing (false === false) we consider the pair + parent a unival subtree
    if (this.rec(arr, count, 2 * i + 1) === this.rec(arr, count, 2 * i + 2)) {
      // increment the count if our unival subtree case is met
      this.count += 1;
    }
  
    // after parsing through children we will return their node value to do comparison on the parent node
    return arr[i]
  } 
}


let arr = [5,2,5,5,null,5,5];
let s = new Solution();
console.log(s.countUnivalTrees(arr))

// Time: O(n) w.r.t. each node/ input array length
// Space: O(h) w.r.t. height of tree for each recursive stack call
