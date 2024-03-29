// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1,c = 1
    while(i>=0){
        let pr = c
        if(digits[i] + c >= 10){
            c = (digits[i] + c) / 10
            digits[i] = (digits[i] + pr) % 10
        }else{
            digits[i] = digits[i] + c
            c=0
        }
        i--
    }
    // console.log(`${i} and ${c}`)
    if(i < 0 && c > 0){
        digits.unshift(c)
    }
    return  digits
};