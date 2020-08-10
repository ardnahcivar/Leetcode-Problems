// Excel Sheet Column Number

// Solution
// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28 
//     ...
// Example 1:

// Input: "A"
// Output: 1
// Example 2:

// Input: "AB"
// Output: 28
// Example 3:

// Input: "ZY"
// Output: 701
 

// Constraints:

// 1 <= s.length <= 7
// s consists only of uppercase English letters.
// s is between "A" and "FXSHRXW".


/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    s = s.split('')
    let base = 26
    let n = s.length
    let r = 0
    while( n > 0){
        let a = s[s.length-n].charCodeAt() - 65 + 1
        r = r + a * Math.pow(base,n-1)
        n--
    }
    return r
};