/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

var twoSum = function(nums, target) {
    let indexMap = {};

    for (let i=0; i< nums.length; i++) {
        indexMap[nums[i]] = i;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target-nums[i];
        if (complement in indexMap && indexMap[complement] !== i) {
            return [indexMap[complement], i];
        }
    }
};

// Space: O(n) where n is respect to length of nums
// Time: O(n) where n is respect to length of nums
