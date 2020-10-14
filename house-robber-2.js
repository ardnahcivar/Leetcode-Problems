// 213. House Robber II

// You are a professional robber planning to rob houses along a street. 
// Each house has a certain amount of money stashed.
// All houses at this place are arranged in a circle. 
// That means the first house is the neighbor of the last one.
// Meanwhile, adjacent houses have a security system connected, 
// and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers nums representing the amount of money of each house,
//  return the maximum amount of money you can rob tonight without alerting the police.
 
// Example 1:

// Input: nums = [2,3,2]
// Output: 3
// Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
// because they are adjacent houses.

// Example 2:
// Input: nums = [1,2,3,1]
// Output: 4
// Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
// Total amount you can rob = 1 + 3 = 4.

// Example 3:
// Input: nums = [0]
// Output: 0
 
// Constraints:
// 1 <= nums.length <= 100
// 0 <= nums[i] <= 1000

/**
 * @param {number[]} nums
 * @return {number}
 * @description solved using the DP approach,time complexity is O(n) and space complexity is O(1) 
 */
var rob = function(nums) {
    if(nums.length == 1) return nums[0]
    if(nums.length == 2) return Math.max(nums[0],nums[1])
    return Math.max(maxRob(0,nums.length-2,nums),maxRob(1,nums.length - 1,nums))
    
    function maxRob(start,end,nums){
        if(start == end) return nums[start]
        let max = nums[start]
        let prevTwo = nums[start]
        let prevOne = Math.max(nums[start],nums[start + 1])
        for(let i = start + 2; i <= end; i++){
            max = Math.max(prevOne,prevTwo + nums[i])
            prevTwo = prevOne
            prevOne = max
        }
        return max
    }
};