/* 
Given two strings,  and , that may or may not be of the same length, determine the minimum number of character 
deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.
Complete the makeAnagram function below.
*/

function makeAnagram(string1, string2) {
    let count = 0;
    let charFreq1 = {};
    let charFreq2 = {};
    
    for (let i = 0; i < string1.length ; i++) {
        charFreq1[string1[i]] = (charFreq1[string1[i]] || 0) + 1;
    }

    for (let i = 0; i < string2.length ; i++) {
        charFreq2[string2[i]] = (charFreq2[string2[i]] || 0) + 1;
    }

    Object.keys(charFreq1).map( character => { // ‘b’ ‘o’
        if (charFreq2[character]) {
            count += Math.abs(charFreq1[character] - charFreq2[character]);
        } else {
            count += charFreq1[character]
        }
    });

    Object.keys(charFreq2).map( character2 => { // ‘o’ ‘c’ ‘b’
        if (!charFreq1[character2]) { 
            count += charFreq2[character2];
        }
    });

    console.log(charFreq1);
    console.log(charFreq2);


    return count // 7
}

// space: O(M + N) w/ respect to charFreq1 and charFreq2
// time: O(M + N) w/ respect to string1.length and string2.length
