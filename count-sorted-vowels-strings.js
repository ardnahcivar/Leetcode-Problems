/* Count Sorted Vowel Strings

Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.
A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

Example 1:
Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].

Example 2:
Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.

Example 3:
Input: n = 33
Output: 66045
*/


/**
 * @param {number} n
 * @return {number}
 */
 var countVowelStrings = function(n) {
    //using recursion but will get TLE upon submission
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const results =[];
    
    function vowelsCombinations(currStr){
        if(currStr.length > 1 && currStr[currStr.length - 1] > currStr[currStr.length - 2]){
            return
        }else if(currStr.length === n){
            results.push(currStr)
            return;
        }else{
            for(let i = 0; i < vowels.length; i++){
                vowelsCombinations(currStr + vowels[i])
            }
        }
    }
    
    vowelsCombinations('')
    
    return results.length;
};


//using DP concept
var countVowelStrings = function(n) {
    let dp = new Array(5).fill(1);
    let counter = 0;
    
    for(let i = 2; i <= n; i++){
        for(let j = 3; j >= 0; j--){
            dp[j] = dp[j] + dp[j+1];
        }
    }
    
    for(let i = 0; i < dp.length; i++){
        counter += dp[i];
    }
    
    return counter;
};