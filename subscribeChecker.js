/*
You are given an array of length 24, where each element represents the number of new subscribers during the corresponding hour. Implement a data structure that efficiently supports the following:

update(hour: int, value: int): Increment the element at index hour by value.
query(start: int, end: int): Retrieve the number of subscribers that have signed up between start and end (inclusive).
You can assume that all values get cleared at the end of the day, and that you will not be asked for start and end values that wrap around midnight.
*/

class SubscriberChecker {
	constructor(arr) {
  	this.arr = arr;
  }
  
  update(hour, value) {
    this.arr[hour] += value;
    
  }
  
  query(start, end) {
  	return this.arr.slice(start, end).reduce((a, b) => a + b)
  }
}

let arr = new Array(24);

let a = [70, 98, 96, 97, 25, 45, 31, 27, 46, 69, 28, 24, 19, 28, 73, 67, 34, 90, 58, 59, 24, 15, 45, 67];

let subscribe = new SubscriberChecker(a);
console.log(subscribe.query(1,7))

// Time Complexity: O(M-N) wrt end and start time respectively
// Space Complexity: O(24) wrt hours in a day
