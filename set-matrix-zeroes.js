// Set Matrix Zeroes
// Given an m x n integer matrix matrix,
// if an element is 0, set its entire row and column to 0's, and return the matrix.
// You must do it in place.
 
// Example 1:
// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

// Constraints:
//     m == matrix.length
//     n == matrix[0].length
//     1 <= m, n <= 200
//     -231 <= matrix[i][j] <= 231 - 1

// Follow up:
//     A straightforward solution using O(mn) space is probably a bad idea.
//     A simple improvement uses O(m + n) space, but still not the best solution.
//     Could you devise a constant space solution?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let r = matrix.length, c = matrix[0].length;
    let firstRowZero = false,firstColZero = false;
    
    for(let i = 0; i < r; i++){
        for(let j = 0; j < c; j++){
            if(matrix[i][j] === 0){
                matrix[i][0] = 0;
                matrix[0][j] = 0
                if(i === 0){
                    firstRowZero = true
                }
                if(j === 0){
                    firstColZero = true
                }
            }
        }
    }
    //making rows as zero
    for(let i = 1; i < r; i++){
        if(matrix[i][0] === 0){
            for(j = 0; j < c; j++){
                matrix[i][j] = 0;
            }
        }
    }
    //making columns as zero
    for(let i = 1; i < c; i++){
        if(matrix[0][i] === 0){
            for(j = 0; j < r; j++){
                matrix[j][i] = 0;
            }
        }
    }
    
    if(firstRowZero){
        for(let i = 0; i < c; i++){
            matrix[0][i] = 0;
        }   
    }

    if(firstColZero){
       for(let i = 0; i < r; i++){
            matrix[i][0] = 0;
        }    
    }
};