/* 
Shuffle an Array
Given an integer array nums, design an algorithm to randomly shuffle the array. 
All permutations of the array should be equally likely as a result of the shuffling.

Implement the Solution class:
    Solution(int[] nums) Initializes the object with the integer array nums.
    int[] reset() Resets the array to its original configuration and returns it.
    int[] shuffle() Returns a random shuffling of the array.

Example 1:

Input
["Solution", "shuffle", "reset", "shuffle"]
[[[1, 2, 3]], [], [], []]
Output
[null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

Explanation
Solution solution = new Solution([1, 2, 3]);
solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
                       // Any permutation of [1,2,3] must be equally likely to be returned.
                       // Example: return [3, 1, 2]
solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2

Constraints:
    1 <= nums.length <= 200
    -106 <= nums[i] <= 106
    All the elements of nums are unique.
    At most 5 * 104 calls in total will be made to reset and shuffle.
*/


/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.original = nums;
    this.shuffled = [...nums];    
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.original; 
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    let right = this.shuffled.length - 1;
    while(right > 0){
        let randomIndex = Math.floor(Math.random() * this.shuffled.length);
        let t = this.shuffled[right];
        this.shuffled[right] = this.shuffled[randomIndex];
        this.shuffled[randomIndex] = t
        right = right - 1;
    }
    return this.shuffled
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var nums = [1,2,3,4,5,6]
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
