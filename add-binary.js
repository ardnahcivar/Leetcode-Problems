/* Add Binary

Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints:
    1 <= a.length, b.length <= 104
    a and b consist only of '0' or '1' characters.
    Each string does not contain leading zeros except for the zero itself.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let res = [],carry = 0;
    let maxLen = a.length > b.length ? a.length : b.length;
    let currIndex = 0;
    a = a.split('').reverse();
    b = b.split('').reverse();
    
    while(currIndex < maxLen){
        let first = a[currIndex] ? parseInt(a[currIndex]) : 0;
        let second = b[currIndex] ? parseInt(b[currIndex]) : 0;
        let curr = (first + second + carry);
        carry = Math.floor(curr / 2);
        res.unshift(curr % 2)
        currIndex++;
    }

    if(carry){
        res.unshift(carry)
    }

    return res.join('')
};