/* Minimum Add to Make Parentheses Valid
A parentheses string is valid if and only if:

It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
You are given a parentheses string s. In one move, 
you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" 
or a closing parenthesis to be "())))".
Return the minimum number of moves required to make s valid.

Example 1:
Input: s = "())"
Output: 1

Example 2:
Input: s = "((("
Output: 3

Example 3:
Input: s = "()"
Output: 0

Example 4:
Input: s = "()))(("
Output: 4

Constraints:
1 <= s.length <= 1000
s[i] is either '(' or ')'. 
*/


/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
    s = s.split('');
    let stk = [];
    
    if(s.length === 0){
        return 0;
    }
    
    stk.push(s[0]);
    for(let i = 1; i < s.length; i++){
        let top = stk[stk.length - 1];
        if(top === '(' && s[i] === ')'){
            stk.pop();
        }else{
            stk.push(s[i]);
        }
    }
    
    return stk.length;
};