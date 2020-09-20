// Sequential Digits
// An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

// Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]
 
// Constraints:
// 10 <= low <= high <= 10^9


//best solution with O(1) complexity
function seqwithQueue(low,high){
    let q = new Array(9)
    let res = [],last
    for(let i=0; i<9; i++){
        q[i] = i + 1
    }
    while(q.length){
        let v  = q.shift()
        if(v >= low && v <= high) res.push(v)
        last = v % 10
        if(last < 9) q.push(v*10+last + 1)
    }
    return res
}
// console.log(seqwithQueue(10,10000000000))


//with Recursion , doesn't work for large inputs gets ERROR:RangeError: Maximum call stack size exceeded
var sequentialDigits = function(low, high) {
    let num = low,res = []
    let min_d = 0,fd
    while(num > 0){
        fd = num
        num = Math.floor(num / 10)
        min_d++
    }
    genseq(fd,min_d)
    return res

    function genseq(f,nl){
        if(f <= 10-nl){
            let n = 0
            let next = f
            for(let i = nl-1; i>=0; i--){
                let t = next + 1
                n = Math.pow(10,i) * next + n
                next = t
            }
            if(n <= high){
                res.push(n)
                genseq(f+1,nl)
            }
        }else if(f >= 9-nl){
                genseq(fd,nl+1)
        }
    }  
};
// sequentialDigits(10,1000000000)

//with loops works with O(n^2) complexit
function seqwithBruteforce(low,high){
    let num,res=[]
    for(let i=0; i<10; i++){
        num = i
        for(let j = i+1; j<10; j++){
            num = 10 * num + j
            if(num >= low && num <= high)
                res.push(num);
            else if(num > high)
                break;
        }    
    }
    res.sort((a,b) => a-b)
}
// seqwithBruteforce(10,10000000000)
