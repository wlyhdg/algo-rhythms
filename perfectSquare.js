/*
Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.
*/

// Create Queue for BFS algorithm
const Queue = function() {
    this.queue = [];
    this.enqueue = function(item) {
    this.queue.push(item);
  };
  this.dequeue = function() {
    this.queue.shift();
  }
}

Queue.prototype.length = this.queues.length;

// Main function
function numSquares(n) {
  // Initialize set of visited numbers.
  // We will keep a track of numbers we have visited. We know that if a number is visited for the first time, it is the least amount of steps taken to reach that given number.
  let visited = new Set();
  
  // Initialize queue
  let myQ = new Queue();
  
  // Add 1) The numerical value to the queue and 2) The amount of times we have subtracted from the value [start: 0]
  myQ.enqueue(n, 0);
  
  // As long as there is content in the queue keep checking
  while (myQ.length > 0) {
  
    // Analyze first element in the queue and destructure
    let [currentNum, currentSteps] = myQ.dequeue();
    
    // We are working backwards: we start with the total sum and constantly subtract perfect squares that are less than or equal to the current number
    // When a number has been perfectly summed, in reverse, it means that the difference has become 0 (ex. 4 + 3 = 7 -> 7 - 4 - 3 = 0).
    if (currentNum == 0) {
        return currentSteps;
    }
    
    // We need to figure out what is the highest squared number that is less than the current number.
    // We do this by taking the square root of the number (say sqrt(12)) and rounding DOWN since we never want to go over that number.
    // so sqrt(12) = 3.3.... and we round down to 3. We now know that all the squares will be 1*1 (1) to 3*3 (9).
    let maxSquareRoot = Math.floor(Math.sqrt(currentNum));
    
    // loop through all of the valid squares less than the current number, if we have not visited that value already we will add it to our number queue
    for (let i = 1; i <= maxSquareRoot; i++){
      // We make sure that we are still less than the sum and that we have not visited the next number yet.
      if (currentNum - i * i >= 0 && !visited.has(currentNum - i * i)) {
        myQ.enqueue([currentNum - i * i, currentSteps + 1]);
        visited.add(currentNum - i * i);
      }
    }
  }
} 

// Space Complexity: O(m * n) where m is wrt Math.sqrt(n)
// Time Complexity: O(n) with optimized visited nodes



