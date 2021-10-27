/* Sort Colors

Given an array nums with n objects colored red, white, or blue,
sort them in-place so that objects of the same color are adjacent,
with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
You must solve this problem without using the library's sort function.

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

Example 3:
Input: nums = [0]
Output: [0]

Example 4:
Input: nums = [1]
Output: [1]

Constraints:
    n == nums.length
    1 <= n <= 300
    nums[i] is 0, 1, or 2.
  */   

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Naive approach
/*  var sortColors = function(nums) {
    let zero = 0, one = 0, two = 0;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            zero++;
        }else if(nums[i] === 1){
            one++;
        }else{
            two++;
        }
    }
    
    let n = 0;
    
    while(zero > 0){
        nums[n] = 0;
        n++;
        zero--;
    }
    
    while(one > 0){
        nums[n] = 1;
        n++;
        one--;
    }
    
    while(two > 0){
        nums[n] = 2;
        n++;
        two--;
    }
    
    return nums;
};
 */
var sortColors = function(nums) {
    let zero = 0, two = nums.length -1;
    let i = 0;
    
    while(i <= two){
        if(nums[i] === 2){
            swap(i,two,nums);
            two--;
        }else if(nums[i] === 0){
            swap(i,zero,nums);
            zero++;
            i++;
        }else{
            i++;
        }
    }

    function swap(i,j,nums){
        let t = nums[i];
        nums[i] = nums[j];
        nums[j] = t;
    }
    
    return nums;
};