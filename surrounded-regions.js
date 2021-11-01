/* Surrounded Regions

Given an m x n matrix board containing 'X' and 'O',
capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example 1:
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Surrounded regions should not be on the border,
which means that any 'O' on the border of the board are not flipped to 'X'.
Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'.
Two cells are connected if they are adjacent cells connected horizontally or vertically.

Example 2:
Input: board = [["X"]]
Output: [["X"]]
 
Constraints:
m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.
*/


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    let m = board.length;
    let n = board[0].length;

    for(j = 0; j < n; j++){
        if(board[0][j] === 'O'){
            dfs(board,0,j);
        }
    }
    
    for(j = 0; j < n; j++){
        if(board[m-1][j] === 'O'){
            dfs(board,m-1,j);
        }
    }
    
    for(let j = 0; j < m; j++){
        if(board[j][0] === 'O'){
            dfs(board,j,0);
        }
    }

    for(let j = 0; j < m; j++){
        if(board[j][n-1] === 'O'){
            dfs(board,j,n-1);
        }
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j] === 'O'){
                board[i][j] = 'X';
            }
        }
    }
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j] === '#'){
                board[i][j] = 'O';
            }
        }
    }
    
    return board;
    
    function dfs(board,i,j){
        if(i < 0 || j < 0 || i >= m || j >= n 
           || board[i][j] === 'X' || board[i][j] === '#'){
            return; 
        }else{
            board[i][j] = '#';
            dfs(board,i-1,j);
            dfs(board,i,j+1);
            dfs(board,i+1,j);
            dfs(board,i,j-1);            
        }    
    }
};