// Stream of Characters

// Implement the StreamChecker class as follows:

// StreamChecker(words): Constructor, init the data structure with the given words.
// query(letter): returns true if and only if for some k >= 1,
// the last k characters queried (in order from oldest to newest, 
// including this letter just queried) spell one of the words in the given list.

/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
    this.root = {}
    this.queries = []
    let curr = this.root
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].split('').reverse()
        for(let j = 0; j < words[i].length; j++){
            if(!curr[words[i][j]]){
                curr[words[i][j]] = {}
            }
            curr = curr[words[i][j]]
        }
        curr.word = true
        curr = this.root
    }
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
    if(this.root[letter] && this.root[letter].word) return true
    this.queries.push(letter)
    let curr = this.root
    let n = this.queries.length - 1
    while(n >= 0 && curr[this.queries[n]] ){
        if(curr[this.queries[n]].word) return true
        curr = curr[this.queries[n]]
        n--
    }
    return false
};

 
//Your StreamChecker object will be instantiated and called as such:
var words = ["cd","f","kl"]
var streamChecker = new StreamChecker(words)
streamChecker.query('a');          // return false
streamChecker.query('b');          // return false
streamChecker.query('c');          // return false
streamChecker.query('d');          // return true, because 'cd' is in the wordlist
streamChecker.query('e');          // return false
streamChecker.query('f');          // return true, because 'f' is in the wordlist
streamChecker.query('g');          // return false
streamChecker.query('h');          // return false
streamChecker.query('i');          // return false
streamChecker.query('j');          // return false
streamChecker.query('k');          // return false
streamChecker.query('l'); 