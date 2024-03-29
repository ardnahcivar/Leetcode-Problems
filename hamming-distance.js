// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given two integers x and y, calculate the Hamming distance.

// Note:
// 0 ≤ x, y < 231.

// Example:

// Input: x = 1, y = 4

// Output: 2

// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// The above arrows point to positions where the corresponding bits are different

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // x = (x).toString(2)
    // y = (y).toString(2)
    // let d = 0
    // let m = x.length > y.length ? x.length : y.length
    // for(let i = 0;i<m;i++){
    //     if(x[i] && y[i])
    // }
    return (x ^ y).toString(2).split('').filter(a => +a).length
};