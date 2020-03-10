/* 
Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.
For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

Follow-up: Can you do this in linear time and constant space? 
*/

function getSingles(arr) {
    let len = 0;
    let numCount = Array(Math.max(...arr));
    let result = Array(Math.max(...arr));
    for (num of arr) { 
        numCount[num] = (numCount[num] || 0) + 1;
    }
    
    numCount.map((val, index) => {
        if( val === 1) {
            result.push(index);
        }
    })
    
    return result.filter( slot => slot !== null ); // returns array of strings
}

// Time: O(n), n is with respect to the maximum number in the array
// Space: O(1), arrays defined have specific set positions
