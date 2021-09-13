/* Maximum Number of Balloons

Given a string text, you want to use the characters of text 
to form as many instances of the word "balloon" as possible.

You can use each character in text at most once.
Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0

Constraints:
    1 <= text.length <= 104
    text consists of lower case English letters only.
 */


/**
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    let charFreq = {'b':0,'a':0,'l':0,'o':0,'n':0};
    let counter = Number.MAX_VALUE;
    let ballon = ['b','a','l','o','n'];
    
    for(let i = 0; i < text.length; i++){
        if(text[i] in charFreq){
            charFreq[text[i]] += 1;   
        }
    }
    
    for(let key of ballon){
        if(key === 'l' || key === 'o'){
            charFreq[key] = Math.floor(charFreq[key] / 2);
        }
        counter = Math.min(counter,charFreq[key])        
    }
    return counter === Number.MAX_VALUE ? 0 : counter;
};
