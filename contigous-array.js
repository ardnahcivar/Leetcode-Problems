Contiguous Array

Given a binary array nums,
return the maximum length of a contiguous subarray with an equal number of 0 and 1.

Example 1:
Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

Example 2:
Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

Constraints:
    1 <= nums.length <= 105
    nums[i] is either 0 or 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxLength = function(nums) {
    let sumMap = {};
    let max = 0;
        
    if(nums.length === 1){
        return 0;
    }
   
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            nums[i] = -1;
        }
    }
    
    sumMap['0'] = -1;
    
    let currSum = 0;
    
    for(let i = 0; i < nums.length; i++){
        currSum += nums[i];
        if(currSum in sumMap){
            let lastIndex = sumMap[currSum];
            max = Math.max(max,i-lastIndex)
        }else{
            sumMap[currSum] = i;
        }
    }
        
    return max;
};

