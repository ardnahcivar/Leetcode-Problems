/* Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells,
where adjacent cells are horizontally or vertically neighboring.
The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

Example 2:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

Example 3:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

Constraints:
    m == board.length
    n = board[i].length
    1 <= m, n <= 6
    1 <= word.length <= 15
    board and word consists of only lowercase and uppercase English letters.
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let n = board.length;
    let m = board[0].length;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(board[i][j] === word[0]){
                let visited = new Array(n);
                
                for(let i = 0; i < n ; i++){
                    visited[i] = new Array(m).fill(false);
                }

                if(findWord(i,j,0,visited,word,board)){
                    return true;
                }
            }
        }
    }
    
    return false;
    
    function findWord(i, j, matchIndex, visited, word, board){
        if(matchIndex === word.length){
            return true;
        }
    
        if(i < 0 || j < 0 || i >= n || j >= m || visited[i][j] === true){
            return false;
        }
    
        if(word[matchIndex] !== board[i][j]){
            return false;
        }
        
        visited[i][j] = true;
        
        if(findWord(i-1,j,matchIndex+1,visited,word,board) || 
            findWord(i,j+1,matchIndex+1,visited,word,board) ||
            findWord(i+1,j,matchIndex+1,visited,word,board) ||
            findWord(i,j-1,matchIndex+1,visited,word,board)){
            return true;
        }

        visited[i][j] = false;
        
        return false;        
    }
};