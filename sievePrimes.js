/*
The Sieve of Eratosthenes is an algorithm used to generate all prime numbers smaller than N. The method is to take increasingly larger prime 
numbers, and mark their multiples as composite.

Implement this algorithm.
*/

function sievePrimes(N) {
	let foundNumbers = new Set();
  let allNumbers = new Set();

  // First loop through the first half of numbers since second half will not be able to have another factor > 1
  for (let i = 2; i < N/2; i++) {
    // For the current number in question, add all multiples of it into our non-prime data structure
    for (let j = i + i; j <= N; j+=j) {
      foundNumbers.add(j)
    }
  }

  // add all numbers from initial to N to another data structure
  for (let k = 2; k <= N; k++) {
    allNumbers.add(k);
  }

  // return the difference of (All) - (Non-Prime) = (Prime)
  return res = [...allNumbers].filter(x => !foundNumbers.has(x));
  
}

console.log(sievePrimes(20));

// Time Complexity: O(n^2) wrt max number;
// Space Complexity: O(n) wrt max number;
