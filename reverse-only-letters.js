/* Reverse Only Letters

Given a string s, reverse the string according to the following rules:
    All the characters that are not English letters remain in the same position.
    All the English letters (lowercase or uppercase) should be reversed.

Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

Constraints:
    1 <= s.length <= 100
    s consists of characters with ASCII values in the range [33, 122].
    s does not contain '\"' or '\\'.

 */

/**
 * @param {string} s
 * @return {string}
 */
 var reverseOnlyLetters = function(s) {
    s = s.split('');
    let start = 0, end = s.length - 1;
    
    const isValidChar = charCode => ((charCode >= 97 && charCode <= 122)
        || (charCode >= 65 && charCode <= 90));
    
    while(start < end){
        if(!isValidChar(s[start].charCodeAt()) && !isValidChar(s[end].charCodeAt())){
            start++;
            end--;
        }else if(!isValidChar(s[start].charCodeAt())){
            start++;
        }else if(!isValidChar(s[end].charCodeAt())){
            end--;
        }else{
            let tmp = s[start];
            s[start] = s[end];
            s[end] = tmp;
            start++;
            end--; 
        }
    }
    
    return s.join('')
};

/* Alternate methid */
var reverseOnlyLettersAlternate = function(s) {
    let symbols = {};
    let stk = [],reverse = '';
    for(let i = 0; i < s.length; i++){
        let charCode = s[i].charCodeAt();
        if((charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90)){
            stk.push(s[i]);
        }else{
            symbols[i] = s[i]
        }
    }
    
    let pointer = 0;
    while(stk.length || pointer < s.length){
        if(symbols[pointer]){
            reverse += symbols[pointer];
        }else{
            let v = stk.pop();
            reverse += v;
        }    
        pointer++;
    }
    
    return reverse;
};