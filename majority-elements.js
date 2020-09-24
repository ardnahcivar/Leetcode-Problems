// 229. Majority Element II
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Note: The algorithm should run in linear time and in O(1) space.

// Example 1:

// Input: [3,2,3]
// Output: [3]
// Example 2:

// Input: [1,1,1,3,3,2,2,2]
// Output: [1,2]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let n1 = nums[0],n2 = nums[0],c1 = 0; c2 = 0
    if(nums.length == 1) return nums
    let res = []
    for(let i = 0; i<nums.length; i++){
        let v = nums[i]
        if(v == n1){
            c1++
        }else if(v == n2){
            c2++
        }else if(c1 == 0){
            c1++
            n1 = v
        }else if(c2 == 0){
            c2++
            n2 = v
        }else{
            c1--
            c2--
        }
    }
    c1 = c2 = 0
    for(let i = 0;i<nums.length; i++){
        if(nums[i] == n1) c1++
        else if(nums[i] == n2) c2++
    }
    if(c1 > Math.floor(nums.length/3)) res.push(n1)
    if(c2 > Math.floor(nums.length/3)) res.push(n2)
    return res
};