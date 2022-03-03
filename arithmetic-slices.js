/* Arithmetic Slices

An integer array is called arithmetic if it consists of at least three elements and
if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.

Given an integer array nums, return the number of arithmetic subarrays of nums.
A subarray is a contiguous subsequence of the array.

Example 1:
Input: nums = [1,2,3,4]
Output: 3
Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.

Example 2:
Input: nums = [1]
Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
    let count = 0;

    if(nums.length  < 3){
        return count;
    }

    let lastDiff = nums[1] - nums[0];
    let currCount = 0;
    
    for(let i = 1; i < nums.length - 1; i++){
        let currDiff = nums[i + 1] - nums[i];
        
        if(currDiff === lastDiff){
            currCount++;
        }else{
            currCount = 0;
            lastDiff = currDiff
        }
        
        count += currCount;
    }
    
    return count;
};


