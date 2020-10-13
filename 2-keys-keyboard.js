// 650. 2 Keys Keyboard
// Initially on a notepad only one character 'A' is present. 
// You can perform two operations on this notepad for each step:

// Copy All: You can copy all the characters present on the notepad (partial copy is not allowed).
// Paste: You can paste the characters which are copied last time.
 
// Given a number n. 
// You have to get exactly n 'A' on the notepad by performing the minimum number of steps permitted. 
// Output the minimum number of steps to get n 'A'.

// Example 1:

// Input: 3
// Output: 3
// Explanation:
// Intitally, we have one character 'A'.
// In step 1, we use Copy All operation.
// In step 2, we use Paste operation to get 'AA'.
// In step 3, we use Paste operation to get 'AAA'.
 
// Note:
// The n will be in the range [1, 1000].

/**
 * @param {ncopyPasteCheckerumber} n
 * @return {number}
 * @description not a best/optimized solution
 */
var minSteps = function(n) {
    let curr = 'A',min = Infinity
    if(curr.length == n) return 0
    copyPaste(curr,curr,1)
    return min
    
    function copyPaste(state, cp, cnt){
        let t = state + cp
        cnt = cnt + 1
        if(t.length > n){
            return   
        }else if(t.length == n && cnt < min){
            min = cnt
        }else if(t.length < n ){
            copyPaste(t,cp,cnt)
            copyPaste(t,t,cnt+1)
        }  
    }
};