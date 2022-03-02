/* Is Subsequence
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by
deleting some (can be none) of the characters without disturbing the relative positions 
of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:
    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.
*/    

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    if(s === t){
        return true;
    }
    
    let isSeq = true
    let index = 0;

    while(index < s.length){
        let currIndex = t.indexOf(s[index]);
        if(currIndex === -1){
            isSeq = false;
            break;
        }else{
            index++;
            t = t.slice(currIndex+1)
        }
        
    }
    
    return isSeq;
};