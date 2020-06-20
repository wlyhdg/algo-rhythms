/* Calculate number of ways of making the lock pattern with number of connections in given range. 
In general terms, we are given a range as min and max, we need to tell how many patterns can be made which use 
at least min connection cell and at most max connection cell.
*/

class Solution {
	numberOfPatterns(m, n) {
    let result = 0;

    let wrongs = new Array(10).fill(0).map(() => new Array(10).fill(0));

    wrongs[1][3] = wrongs[3][1] = 2;
    wrongs[1][7] = wrongs[7][1] = 4;
    wrongs[1][9] = wrongs[9][1] = wrongs[3][7] = wrongs[7][3] = wrongs[4][6] = wrongs[6][4] = wrongs[2][8] = wrongs[8][2]= 5;
    wrongs[3][9] = wrongs[9][3] = 6;
    wrongs[7][9] = wrongs[9][7] = 8;

    let visited = new Array(10).fill(false);


    // got to do it for the MAX amount (n) of times all the way to the MIN amount (m) of times
    for ( let i = m; i <= n; i++) {
      result += this.dfs(1, i-1, visited, wrongs) * 4;
      result += this.dfs(2, i-1, visited, wrongs) * 4;
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

    visited[startNum] = true;

    for ( let x = 1; x <= 9; x ++) {
      if (!visited[x] && (wrongs[startNum][x] === 0 || visited[wrongs[startNum][x]])) {
        result += this.dfs(x, stepsLeft - 1, visited, wrongs);
      }

    }
		visited[startNum] = false;
    return result;
  }
}

const s = new Solution();
let a = s.numberOfPatterns(4,6);
console.log(a)
