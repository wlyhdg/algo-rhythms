/**
 * @param {string} digits
 * @return {string[]}
 */

const numPad = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

var letterCombinations = function(digits) {
    function rec(digits, currentText) {
        if ((digits.length) === 0) {
            result.push(currentText)
        } else {
        
            for (let letter of numPad[digits[0]]) {
                currentText += letter
                rec(digits.slice(1, digits.length), currentText) 
                currentText = currentText.slice(0, currentText.length - 1)
            }
        }
    }
    
    let result = [];
    if (digits)
        rec(digits, '')
    return result;
};
