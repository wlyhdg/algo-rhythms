/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let totalMax = '';
    for (let i = 0; i < s.length; i++) {
        let a = checkAroundCenter(s, i, i);
        let b = checkAroundCenter(s, i, i + 1);
        let currentMax = a.length > b.length ? a : b;
        if (currentMax.length > totalMax.length) {
            totalMax = currentMax;
        }
    }
    return totalMax
};

function checkAroundCenter(s, start, end) {
    let left = start;
    let right = end;
    
    while(left >= 0 && right < s.length) { 
        if (s[left] === s[right]) {
            left -= 1;
            right += 1;
        } else {
            return s.slice(left + 1, right)
        }

    }
    
    return s.slice(left + 1, right)
    
}

// Time: O(n^2) w.r.t. length of array
// Space: O(n) for slice of index w.r.t. length of array
