function pixelSwap(arr, row, col, oldColor, newColor) {
	if (arr.length > 1) {
    if(!oldColor) {
      oldColor = arr[row][col];
    }
    
  	if(row < 0 || col < 0 || arr[row][col] != oldColor || row > arr.length || col > arr.length) {
    	return 
    }
    
    if(arr[row][col] == oldColor){
    	arr[row][col] = newColor;
    }
  }
  
  pixelSwap(arr, row, col + 1, oldColor, newColor);
  pixelSwap(arr, row, col - 1, oldColor, newColor);
  pixelSwap(arr, row + 1, col, oldColor, newColor);
  pixelSwap(arr, row - 1, col, oldColor, newColor);
  
}

let pixels = [['B', 'B', 'W'],
							['W', 'W', 'W'],
              ['W', 'W', 'W'],
              ['B', 'B', 'B']];
    
pixelSwap(pixels, 2, 2, '','G');

console.log(pixels);
              
          
