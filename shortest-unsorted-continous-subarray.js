/* Shortest Unsorted Continuous Subarray

Given an integer array nums, you need to find one continuous subarray that if you only sort 
this subarray in ascending order, then the whole array will be sorted in ascending order.
Return the shortest such subarray and output its length.

Example 1:
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

Example 2:
Input: nums = [1,2,3,4]
Output: 0

Example 3:
Input: nums = [1]
Output: 0 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findUnsortedSubarray = function(nums) {
    let max =  nums[0];
    let min = nums[nums.length - 1];
    let start = 0;
    let end = -1;
    
    for(let i = 1; i < nums.length;i++){
        if(max > nums[i]){
            end = i;
        }else{
            max = nums[i];
        } 
    }

    for(let i = nums.length - 2; i >= 0; i--){
        if(min < nums[i]){
           start = i
        }else{
            min = nums[i]
        }
    }
    
    return end - start + 1;
};