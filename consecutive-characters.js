/* Consecutive Characters

The power of the string is the maximum length of a non-empty substring that contains only one unique character.

Given a string s, return the power of s.

Example 1:
Input: s = "leetcode"
Output: 2
Explanation: The substring "ee" is of length 2 with the character 'e' only.

Example 2:
Input: s = "abbcccddddeeeeedcba"
Output: 5
Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

Example 3:
Input: s = "triplepillooooow"
Output: 5

Example 4:
Input: s = "hooraaaaaaaaaaay"
Output: 11

Example 5:
Input: s = "tourist"
Output: 1

Constraints:
    1 <= s.length <= 500
    s consists of only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var maxPower = function(s) {
    s = s.split('');
    let max = 1;
    
    if(s.length === 1){
        return 1;
    }
    
    let prev = 0, curr = 1;    
    
    while(curr < s.length){
        if(s[prev] === s[curr]){
            let currMax = curr - prev + 1;
            max = Math.max(max,currMax);
            curr++;
        }else{
            prev = curr;
            curr += 1;
        }
    }
    
    return max;
};
