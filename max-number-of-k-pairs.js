/* Max Number of K-Sum Pairs

You are given an integer array nums and an integer k.
In one operation, you can pick two numbers from the array whose sum equals k 
and remove them from the array.

Return the maximum number of operations you can perform on the array.

Example 1:
Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

Example 2:
Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxOperations = function(nums, k) {
    let map = {};
    let count = 0;
    
    for(let i = 0; i < nums.length; i++){
        let curr = k - nums[i];
        let value = nums[i];

        if(curr in map){
            let freq = map[curr];
            if(freq === 1){
                delete map[curr];
            }else{
                map[curr] = freq - 1;
            }
            count++
        }else{
            map[value] = (map[value] || 0) + 1;
        }
    }
        
    return count;
};