// 316. Remove Duplicate Letters
// Given a string s, remove duplicate letters so that every letter appears once and only once. 
// You must make sure your result is the smallest in lexicographical order among all possible results.

// Note: This question is the same as 1081: https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/

// Example 1:

// Input: s = "bcabc"
// Output: "abc"
// Example 2:

// Input: s = "cbacdcbc"
// Output: "acdb"
 
// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let res = []
    let lastIndexes = new Map()
    for(let i = 0; i < s.length; i++){
        lastIndexes.set(s[i],i)
    }
    for(let i = 0; i < s.length; i++){
        if(!res.includes(s[i])){
            while(res.length && lastIndexes.get(res[res.length - 1]) > i && res[res.length - 1] > s[i])
                res.pop()
            res.push(s[i])
       }
    }
    return res.join('')    
};