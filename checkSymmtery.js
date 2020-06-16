// For a given k-ary tree, check whether it is symmetrical (mirrored) or not

function checkSymmetry(arr, k) {
	if (arr.length === 0) {
  	return false;
  }
  
  if (arr.length === 1) {
  	return true;
  }
  
  let i = 1;
  let validRow;
  
  while (i < arr.length) {
  	startIndex = i;
    endIndex = i + Math.pow(k, i);
    validRow = reverseCheck(arr.slice(startIndex, endIndex));
    
    if (!validRow) {
    	return 'Assymetrical'
    }
    i = endIndex;
  }
  return 'Symmetrical'
}

function reverseCheck(arr) {
	return arr.slice().reverse().join('') === arr.join('');
}

// Time Complexity: O(n^2) w.r.t. length of array
// Space Complexity: O(n)
