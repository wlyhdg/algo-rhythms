  
	countUnivalTrees(arr) {
  
  	this.count = 0
  	this.rec(arr, 0, 0)
    return this.count
  }
  
  rec(arr, count, i) {
    if (i >= arr.length) {
      return false;
    }
  
    if (arr[i] === null) {
      return false;
    }
  
    if (this.rec(arr, count, 2 * i + 1) === this.rec(arr, count, 2 * i + 2)) {
      this.count += 1;
    }
  
    return arr[i]
  } 
}


let arr = [5,2,5,5,null,5,5];
let s = new Solution();
console.log(s.countUnivalTrees(arr))
