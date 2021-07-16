// Given an array nums of n integers, return an array of all the unique quadruplets
// [nums[a], nums[b], nums[c], nums[d]] such that:
//     0 <= a, b, c, d < n
//     a, b, c, and d are distinct.
//     nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

// Example 1:
// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

// Example 2:
// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]

// Constraints:
// 1 <= nums.length <= 200
// -109 <= nums[i] <= 109
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
 var fourSum = function(nums, target) {
    nums.sort((n1,n2) => n1 - n2);
    let res = [];
    let n = nums.length;
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let t = target - nums[i] - nums[j];
            let st = j + 1;
            let end = n - 1;
            while(st < end){
                if(nums[st] + nums[end] === t){
                    res.push([nums[i],nums[j],nums[st],nums[end]]);
                    let third = nums[st];
                    let fourth = nums[end];
                    while(st < end && nums[st] === third) st++;
                    while(st < end && nums[end] === fourth) end--;
                    
                }else if(nums[st] + nums[end] > t){
                    end--;
                }else {
                    st++
                }
            }
            while(j+1 < n && nums[j] === nums[j+1]) j++
        }
        while(i+1 < n && nums[i] === nums[i+1]) i++
    }
    return res;
};
