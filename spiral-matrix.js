/* Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 10
    -100 <= matrix[i][j] <= 100
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let spiral = [];
    let top,right,bottom,left;
    top = 0;
    right = n - 1;
    bottom = m - 1;
    left = 0;
    let counter = m * n;
    
    if(m === 1 || n === 1){
        for(let i = 0; i < m;i++){
            spiral.push(...matrix[i]);
        }
        return spiral;
    }
    
    while(counter > 0){
        let t = top;
        for(let j = t; j <= right; j++){
            spiral.push(matrix[t][j]);
            counter--;
        }
        top++;
        
        let r = right;
        for(let j = top; j <= bottom; j++){
            spiral.push(matrix[j][r]);
            counter--;
        }
        right--;
        
        let b = bottom;
        for(let j = right; j >= left; j--){
            spiral.push(matrix[b][j]);
            counter--;
        }
        bottom--;
        
        let l = left;
        for(let j = bottom; j >= top; j--){
            spiral.push(matrix[j][l]);
            counter--;
        }
        left++;
    }
    
    while(spiral.length > m * n){
          spiral.pop()
    }
    
    return spiral;
};