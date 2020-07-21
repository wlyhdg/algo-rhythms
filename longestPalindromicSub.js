/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let longest = ''
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let snippet = s.slice(i,j)
            if (isPalindrome(snippet)) {
                if (snippet.length > longest.length) {
                    longest = snippet
                }
            }
        }
    }
    return longest
};

function isPalindrome(s) {
    let o = 0;
    for (let k = s.length - 1; k >= 0; k--) {
        if (s[o] !== s[k]) {
            return false;
        }
        o++;
    }
    
    return true;
}

// Time: O(n^3) wrt length of array
// Space: O(n) wrt length of array - 1
