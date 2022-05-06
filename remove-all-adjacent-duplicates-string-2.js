/* Remove All Adjacent Duplicates in String II

You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them,
causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made.
It is guaranteed that the answer is unique.

Example 1:
Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.

Example 2:
Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"

Example 3:
Input: s = "pbbcggttciiippooaais", k = 2
Output: "ps"
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var removeDuplicates = function(s, k) {
    if(s.length <= 1){
        return s;
    }
    
    s = s.split('');
    let res = '';
    let stack = [{value: s[0], freq : 1}];
    
    for(let i = 1; i < s.length; i++){
        let top = stack[stack.length - 1] || {};
        let {value, freq} = top
        if(value === s[i]){
            if(freq + 1 === k){
                stack.pop();
                
            }else{
                stack[stack.length - 1] = {
                    value,
                    freq: freq + 1
                }        
            }
        }else{  
            stack.push({
                value: s[i],
                freq: 1
            })
        }
    }
    
    for(let i = 0; i < stack.length; i++){
        let {value, freq} = stack[i];
        for(let j = 0; j < freq; j++){
            res += value;            
        }
    }    
    
    return res;
};

