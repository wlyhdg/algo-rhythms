/* Calculate number of ways of making the lock pattern with number of connections in given range. 
In general terms, we are given a range as min and max, we need to tell how many patterns can be made which use 
at least min connection cell and at most max connection cell.
*/

class Solution {
  numberOfPatterns(m, n) {
    let result = 0;

    // create matrix to map the blocking middle value between two unallowable endpoints
    let wrongs = new Array(10).fill(0).map(() => new Array(10).fill(0));

    // wrongs[pointA][pointB] where the values is the blocking number between pointA and pointB
    wrongs[1][3] = wrongs[3][1] = 2;
    wrongs[1][7] = wrongs[7][1] = 4;
    wrongs[1][9] = wrongs[9][1] = wrongs[3][7] = wrongs[7][3] = wrongs[4][6] = wrongs[6][4] = wrongs[2][8] = wrongs[8][2]= 5;
    wrongs[3][9] = wrongs[9][3] = 6;
    wrongs[7][9] = wrongs[9][7] = 8;

    // new data structure to correlate with what numbers we have visited in current recursive loop check
    let visited = new Array(10).fill(false);


    // got to analyze permutations for the MAX length (n) of the passcode all the way down to the MIN length (m) of the passcode
    for ( let i = m; i <= n; i++) {
      // Keypad Reference:
      //	1 2 3
      //	4 5 6
      //	7 8 9
	    
      // this is when you start from a corner (the number one is in a corner and do this 4 times for all 4 corners of keypad
      // note: the first parameter below could have also been 3, 7, or 9
      result += this.dfs(1, i-1, visited, wrongs) * 4;	
	    
      // this is for the outside-middle numbers on the keypad which is applicable for all 4 sides of the keypad
      // note: the first parameter below could have also been 4, 6, or 8
      result += this.dfs(2, i-1, visited, wrongs) * 4;
	    
      // this is for the middle number implementation which is a pattern that is never repeated
      result += this.dfs(5, i-1, visited, wrongs);
		}
    
    return result;
    }

  dfs(startNum, stepsLeft, visited, wrongs) {
    let result = 0;
    // base case
    if ( stepsLeft === 0) {
      return 1;
    }

    // when going into recursive calls, we need to note that the current number in question has finally been visited
    visited[startNum] = true;

    for ( let x = 1; x <= 9; x ++) {
      // checking for next point in swipe sequence; the next point has to:
      // 1. Not have been visited
      // 2. Not have a number in between it and the previous point UNLESS that middle blocking number has already 
      //    been visited in this given recursive "swipe"
      if (!visited[x] && (wrongs[startNum][x] === 0 || visited[wrongs[startNum][x]])) {
        result += this.dfs(x, stepsLeft - 1, visited, wrongs);
      }

    }
    // once done with this specific current pattern, we need to free the main number inspected for the next recursive call
    visited[startNum] = false;
	  
    return result;
  }
}

const s = new Solution();
let a = s.numberOfPatterns(4,6);
console.log(a)
