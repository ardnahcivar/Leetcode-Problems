// 17. Letter Combinations of a Phone Number
// Given a string containing digits from 2-9 inclusive, 
// return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.
//  Note that 1 does not map to any letters.

// Example:
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order,
//  your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let letters = [
                [],
                [],
                ['a','b','c'],
                ['d','e','f'],
                ['g','h','i'],
                ['j','k','l'],
                ['m','n','o'],
                ['p','q','r','s'],
                ['t','u','v'],
                ['w','x','y','z']
            ]
    let d = digits.split('').map(v => +v)
    if(!d.length) return []
    let res = []
    combinations(d,'',0)
    return res    
    
    function combinations(digits,curr,index){
        if(curr.length == digits.length){
            res.push(curr)
            return
        }else{
            let s = letters[digits[index]]
            for(let i = 0; i < s.length; i++){
                combinations(digits,curr+s[i],index+1)
            }
        }
    }
    
};