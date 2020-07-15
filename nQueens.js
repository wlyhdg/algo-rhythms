/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let solution = rec(0, [], [], n);
    return solution
};

function rec(row, sol, result, n) {
    // base case if we have exhausted the rows and
    // reached the end of the board
    if (row === n) {
        let p = parseBoards(result)
        sol.push(p)
        return sol;
    }
    else {
    // loop throw all columns for each row
    for (let c = 0; c < n; c++) {
        // check column choice to test if we should continue recursing or
        // move to next board position option
        result.push(c);
        
        //check constraint
        if (checkOkay(result)) {
            // continue recursion since we have had valid rows up to this point
            sol = rec(row + 1, sol, result, n);
        }
        // if we loop out of recursion before base case, we
        // know there was an invalid board placing
        result.pop();
        }
}
    
    return sol
    
}

function checkOkay(result) {
    let row = result.length - 1;
    let col = result[row]
    if (result.length === 1) {
        return true;
    }
    for (let i = 0; i < row; i++) {
        // diagonal conflict
        if ((row - i === col - result[i]) ||  (i - row === col - result[i] )) {
            return false;
        }
        
        // column conflict
        if (result[i] === col) {
            return false;
        }
    }
    
    return true;
}

function parseBoards(rowColData) {
    return rowColData.map((col, idx) => {
        return ".".repeat(col) + 'Q' + ".".repeat(rowColData.length - col - 1);
    });
}
