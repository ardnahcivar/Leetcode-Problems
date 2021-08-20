// Valid Sudoku

// Solution
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
 
// Example 1:
// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true

// Example 2:
// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let isValid = true;
    let row = [], col = [];
    for(let i = 0; i < board.length; i+=3){
        for(let j = 0; j < board[i].length; j+=3){
            let digits = [];
            for(let k = i; k < i + 3; k++){
                for(let l = j; l < j + 3; l++){
                    if(digits.includes(board[k][l])){
                        isValid = false;
                        break;
                    }else{
                        if(board[k][l] !== '.')
                            digits.push(board[k][l]); 
                    }
                }
                if(!isValid)
                    break;
            }
            if(!isValid)
                break;
        }
        if(!isValid)
            break;
    }
    if(isValid){
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(row.includes(board[i][j]) || col.includes(board[j][i])){
                    isValid = false;
                    break;
                }
                else{
                    if(board[i][j] !== '.')
                        row.push(board[i][j]);
                    if(board[j][i] !== '.')
                        col.push(board[j][i]);
                }
            }
            if(!isValid)
                break;
            row = [];
            col = []; 
        }
    }
    return isValid;
};