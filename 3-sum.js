/* 3Sum

Given an integer array nums, return all the triplets [nums[i],
nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []

Constraints:
    0 <= nums.length <= 3000
    -105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let res = [];
    
    if(nums.length < 2){
        return res;
    }
    
    nums.sort((a,b) => a - b);
    
    for(let i = 0; i < nums.length - 2; i++){
        
        while(i > 0 && nums[i-1] === nums[i]){
            i++;
        }
    
        let left = i + 1, right = nums.length - 1;
        
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            
            if(sum == 0){
                res.push([nums[i],nums[left],nums[right]]);

                while(left < right && nums[left] == nums[left + 1]){
                    left++;
                }
            
                while(left < right && nums[right] == nums[right - 1]){
                    right--;
                }
                
                left++;
                right--;
                
            }else if(sum < 0){
                left++;
            }else{
                right--;
            }
        }
    }
    
    return res;
    
};
