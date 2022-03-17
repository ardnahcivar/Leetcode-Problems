/* Score of Parentheses

Given a balanced parentheses string s, return the score of the string.
The score of a balanced parentheses string is based on the following rule:

"()" has score 1.
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
 
Example 1:
Input: s = "()"
Output: 1

Example 2:
Input: s = "(())"
Output: 2
Example 3:

Input: s = "()()"
Output: 2
*/

/**
 * @param {string} s
 * @return {number}
 */
 var scoreOfParentheses = function(s) {
    let res = 0;
    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push(res);
            res = 0;
        }else{
            res = stack.pop() + Math.max(2 * res, 1);
        }
    }
    
    return res;
};




