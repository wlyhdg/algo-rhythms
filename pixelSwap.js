/*	Given an 2D array containing each pixel color, and a slot to select, 
	change the given pixel to a designated one, as well as any adjacent mutual slots
 	ie. Input: row-2 col-2, change to 'G'
	array > [['B', 'B', 'W'],
	      	['W', 'W', 'W'],
              	['W', 'W', 'W'],
              	['B', 'B', 'B']];
	output > [['B', 'B', 'G'],
	      	['G', 'G', 'G'],
              	['G', 'G', 'G' <<<<<<< (This is the row-2 col-2 start)],
              	['B', 'B', 'B']];
*/

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
              
          
