/* Permutations II

Given a collection of numbers, nums, that might contain duplicates,
return all possible unique permutations in any order.

Example 1:
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]

Example 2:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let result = [];
    let permsMap = new Map();
    
    function perms(start, end, arr){
        if(start === end && !permsMap.has(arr.join(''))){            
            result.push([...arr]);
            permsMap.set(arr.join(''), true);
        }else{
            for(let i = start; i <= end; i++){
                let temp = arr[start];
                arr[start] = arr[i];
                arr[i] = temp;
                
                perms(start + 1, end, arr);
                
                let temp1 = arr[start]
                arr[start] = arr[i];
                arr[i] = temp1;
            }
        }
    }
    
    perms(0,nums.length - 1,nums);
    
    return result;
};