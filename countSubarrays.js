function countSubarrays(arr) {
  // [3, 4, 1, 6, 2]
  
  let output = new Array(arr.length).fill(0);
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        break;
      }
      output[i] += 1;
    }
  }
  
  for (let k = arr.length - 1; k >= 0; k--) {
     for (let l = k; l >= 0; l--) {
       if (arr[k] < arr[l]) {
         break;
       }
       output[k] += 1;
     }
  }
  
  return output;
}
