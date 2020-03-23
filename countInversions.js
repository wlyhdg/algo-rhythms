function countInversions(arr) {
	let inversions = 0;
  mergeSort(arr);
  return inversions;
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr
    }

    let midpt = Math.floor(arr.length / 2);
    let left = arr.slice(0, midpt);
    let right = arr.slice(midpt, arr.length);

    let leftSort = mergeSort(left);
    let rightSort = mergeSort(right);
  
  	return (merge(leftSort, rightSort));
	}
  
    function merge(left, right) {
    let i = 0, j = 0;
    let merged = [];
    while(i < left.length && j < right.length) {
      if (left[i] > right[j]) {
      	inversions += left.length - i;
        merged.push(right[j++]);
      } else {
        merged.push(left[i++]);
      }
    }

    while(i < left.length) {
      merged.push(left[i++]);
    }

      while(j < right.length) {
      merged.push(right[j++]);
    }

    return merged;
  }
}
