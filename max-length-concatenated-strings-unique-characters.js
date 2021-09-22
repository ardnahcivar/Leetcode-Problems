/* Maximum Length of a Concatenated String with Unique Characters

Given an array of strings arr. String s is a concatenation of a sub-sequence of arr 
which have unique characters.

Return the maximum possible length of s.

Example 1:
Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.

Example 2:
Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".

Example 3:
Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26

Constraints:
    1 <= arr.length <= 16
    1 <= arr[i].length <= 26
    arr[i] contains only lower case English letters.
 */

/**
 * @param {string[]} arr
 * @return {number}
 */
 var maxLength = function(arr) {
    let maxLen = 0;
    
    uniqueChars(arr,'',0);
    
    return maxLen;
    
    function uniqueChars(arr,res,start){
        maxLen = Math.max(maxLen,res.length);
        
        for(let i = start; i < arr.length; i++){
            let curr = arr[i];
            let isUnique = true;
            let s = new Set(curr);
            for(let j = 0; j < curr.length; j++){
                if(res.includes(curr[j]) || s.size !== curr.length){
                    isUnique = false;
                }
            }
            if(isUnique){
                let t = res + curr;
                uniqueChars(arr,t,i+1)
            }
        }
    }  
};