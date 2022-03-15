/* Minimum Remove to Make Valid Parentheses
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')',
in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:
    It is the empty string, contains only lowercase characters, or
    It can be written as AB (A concatenated with B), where A and B are valid strings, or
    It can be written as (A), where A is a valid string.

Example 1:
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:
Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:
Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.
*/

/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    let stack = [];
    s = s.split('');
    let parentheses = ['(', ')']
    let res = '';
    
    for(let i = 0; i < s.length; i++){
        let curr = s[i];
        if(stack.length){
            let top = stack.length - 1;
            if(parentheses.includes(curr)){
                if(stack[top].val === '(' && curr === ')'){
                    stack.pop();
                }else{
                    stack.push({val: curr, index: i});
                }
            }
        }else{
            if(parentheses.includes(curr)){
                stack.push({val:curr, index: i});
            }
        }
    }
    
    while(stack.length){
        let {index} = stack.pop();
        s[index] = '';
    }
        
    return s.join('');
};