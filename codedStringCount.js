function codedStringCount(str) {
	if (str.length === 0) {
  	return "";
  }
  
  if (str.length === 1) {
  	return str + 1;
  }

	let occurence = 1;
  let prevChar = str[0];
  let result = "";
  
  for (let i = 1; i <= str.length; i++) {
  	if (str[i] !== prevChar) {
    	result += prevChar + occurence.toString();
      occurence = 1;
      prevChar = str[i];
    } else {
    	occurence += 1;
    }
  }
  
  return result;
}

let myString = "aaabbcbbaacc";
console.log(codedStringCount(myString));

// Time: O(n) w.r.t. length of string
// Space: O(n) w.r.t. chars in a string
