/* Maximum Swap

You are given an integer num. You can swap two digits at most once to get the maximum valued number.

Return the maximum valued number you can get.

Example 1:
Input: num = 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
Example 2:

Input: num = 9973
Output: 9973
Explanation: No swap.
 
Constraints:
0 <= num <= 108 
*/

/**
 * @param {number} num
 * @return {number}
 */
 var maximumSwap = function(num) {
    num = (''+num).split('');
        
    for(let i = 0; i < num.length; i++){
        let currMax = num[i];
        let indexSwap = -1;
        
        for(let j = num.length - 1; j > i; j--){
            if(currMax < num[j]){
                currMax = num[j];
                indexSwap = j;
            }
        }
        
        if(indexSwap !== -1){
            let temp = num[indexSwap];
            num[indexSwap] = num[i];
            num[i] = temp;
            break;
        }
    }

    return num.join('')
};
