/* 
Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals 
non-overlapping. Intervals can "touch", such as [0, 1] and [1, 2], but they won't be considered overlapping.

For example, given the intervals (7, 9), (2, 4), (5, 8), return 1 as the last interval can be removed and the first two won't 
overlap.

The intervals are not necessarily sorted in any order.
*/

function minimumOverlap(intervals) {
	let count = 0;
  let i = 0;
  let j = 1;
  
  // sort the intervals in order of the time they started
	let si = intervals.sort((a, b) => a[0] - b[0]);
  
  // look at previous intervals end time vs next intervals start time. For there not to be overlap, 
  // the next interval start time has to be greater than or equal to the previous end time.
  while(j < si.length) {
  	console.log(si[i][1], si[j][0])
  	if (si[i][1] <= si[j][0]) {
    	i = j;
      j++;
    } else {
    	j++;
      count += 1;
    }
  }
  
  return count;
}

const sample = [
	[7, 9],
  [2, 4],
  [5, 8]
];

minimumOverlap(sample);
