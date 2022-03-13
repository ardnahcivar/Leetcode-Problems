/* Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    let chars = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    if(s.length % 2 !== 0){
        return false;
    }
    
    for(let i = 0; i < s.length; i++){
        let curr = s[i];
        let top = stack.length - 1;

        if(stack.length){
            if(chars[stack[top]] === curr){
                stack.pop();
            }else{
                stack.push(curr);
            }
        }else{
            stack.push(curr);
        }
    }
    
    return stack.length === 0;
};