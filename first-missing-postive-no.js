// 41. First Missing Positive
// Given an unsorted integer array, find the smallest missing positive integer.

// Example 1:

// Input: [1,2,0]
// Output: 3
// Example 2:

// Input: [3,4,-1,1]
// Output: 2
// Example 3:

// Input: [7,8,9,11,12]
// Output: 1
// Follow up:

// Your algorithm should run in O(n) time and uses constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    // let fp = 1
    // let i = 0
    // while(i < nums.length){
    //     if(nums[i] != fp) i++
    //     if(nums[i] == fp){
    //         fp++
    //         i = 0
    //     }
    // }
    // return fp
    
    if(!nums.length) return 1
    let v = new Array(nums.length + 1).fill(false)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0 && nums[i] <= nums.length){
            v[nums[i]] = true
        }
    }
    for(let i = 1; i < v.length; i++){
        if(!v[i]) return i
    }
    return nums.length + 1
};