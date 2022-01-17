/* Word Pattern

Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match,
such that there is a bijection between a letter in pattern and a non-empty word in s.
 
Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 
Constraints:
1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.

*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let wordMap = {};
    s = s.split(' ');
    let used = [];
    
    if(pattern.length !== s.length){
        return false;
    }
    
    for(let i = 0; i < pattern.length; i++){
        let curr = pattern[i];
        if(curr in wordMap){
            if(wordMap[curr] !== s[i]){
                return false;
            }
        }else{
            if(used.includes(s[i])){
                return false;
            }
            wordMap[curr] = s[i];
            used.push(s[i])
        } 
    }
    
    return true;
};