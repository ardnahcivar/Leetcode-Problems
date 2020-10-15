// 189. Rotate Array
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Follow up:

// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
// Could you do it in-place with O(1) extra space?
 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]
 
// Constraints:

// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @description time complexity is O(n),space complexity is O(1)
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length

    reverse(0,nums.length-1,nums)
    reverse(0,k,nums)
    reverse(k,nums.length-1,nums)

    //NAIVE approach
    // if(k != 0){
    //     let rotArr = [...nums]
    //     let indexToFill = k    
    //     for(let i = 0; i < rotArr.length; i++){
    //         nums[indexToFill] = rotArr[i]
    //         if(indexToFill == rotArr.length - 1){
    //             indexToFill = 0
    //         }else{
    //             indexToFill++
    //         }        
    //     }    
    // }

    //best approach
    function reverse(start,end,nums){
      let i = start,j = end 
      while( i < j){
          let temp = nums[j]
          nums[j] = nums[i]
          nums[i] = temp
          i++
          j--
      }
    }
};

let a =  [1,2,3,4,5,6,7]
rotate(a,3)