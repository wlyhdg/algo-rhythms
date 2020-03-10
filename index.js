/* 
Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.
For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

Follow-up: Can you do this in linear time and constant space? 
*/

function getSingles(arr) {
    let mapper = {}
    let singles = []
    for (num of arr) { 
        mapper[num] = (mapper[num] || 0) + 1
    }
    Object.keys(mapper).map(num => {
        if (mapper[num] == 1) {
            singles.push(num)
        }
    })
    return singles;
}

Time: O(n), n is with respect to length of input of array
Space: O(n), n is with respect to length of input array at most
