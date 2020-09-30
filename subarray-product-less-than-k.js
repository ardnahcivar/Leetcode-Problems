


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    if(!nums.length) return 0
    let c = 0,i = 0,j = 0,p = 1
    
    //correct way but time limit exceeds
    // for(let i = 0; i < nums.length; i++){
    //     if(nums[i] < k) c++
    //     let j = i + 1
    //     let p = nums[i]
    //     while(j < nums.length){
    //         if(p * nums[j] >= k){
    //             break
    //         }else if(p * nums[j] < k){
    //             c++
    //             p = p * nums[j]
    //         }
    //         j++
    //     }
    // }

    while(j < nums.length){
        p = p * nums[j]
        while( j >= i && p >=k){
            p = p / nums[i]
            i = i + 1
        }
        c = c + j - i + 1
        j = j + 1
    }
    return c
};