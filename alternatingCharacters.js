/*
You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.

Your task is to find the minimum number of required deletions.
*/

// Complete the alternatingCharacters function below.

function alternatingCharacters(s) {
    let numDeletions = 0;
    for(let i =0; i < s.length - 1; i++) {
        if (s[i + 1] == s[i]) {
            numDeletions += 1;
        }
    }

    return numDeletions;

}

// Space: O(1) wrt numDeletions
// Time: O(N) wrt s.length
