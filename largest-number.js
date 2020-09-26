// 179. Largest Number
// Given a list of non negative integers, arrange them such that they form the largest number.

// Example 1:

// Input: [10,2]
// Output: "210"
// Example 2:

// Input: [3,30,34,5,9]
// Output: "9534330"
// Note: The result may be very large, so you need to return a string instead of an integer.


/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            let [t1,t2] = [''+nums[i]+nums[j],''+nums[j]+nums[i]]
            if(parseInt(t2) > parseInt(t1)){
                let t = nums[j]
                nums[j] = nums[i]
                nums[i] = t
            }
        }
    }
    return (nums.join('').replace(/^0*/g,'') || '0')
};