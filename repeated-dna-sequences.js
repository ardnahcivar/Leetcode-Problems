// 187. Repeated DNA Sequences
// All DNA is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T',
// for example: "ACGAATTCCG". When studying DNA, it is sometimes useful
// to identify repeated sequences within the DNA.

// Write a function to find all the 10-letter-long sequences (substrings) 
// that occur more than once in a DNA molecule.

// Example 1:

// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]
// Example 2:

// Input: s = "AAAAAAAAAAAAA"
// Output: ["AAAAAAAAAA"]

// Constraints:

// 0 <= s.length <= 105
// s[i] is 'A', 'C', 'G', or 'T'.

/**
 * @param {string} s
 * @description time, space complexity is O(n),O(n)
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let seqs = [], start = 0
    let m = new Map()
    while(start + 10 <= s.length){
        let sq = s.slice(start,start + 10)
        if(!m.has(sq)){
            m.set(sq,1)
        }else{
            m.set(sq,m.get(sq) + 1)
            if(m.get(sq) == 2) seqs.push(sq)
        }
        start++
    }
    return seqs
};