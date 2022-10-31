/* Toeplitz Matrix

Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

Example 1:
Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
Output: true
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.

Example 2:
Input: matrix = [[1,2],[2,2]]
Output: false
Explanation:
The diagonal "[1, 2]" has different elements. */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var isToeplitzMatrix = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    let isTpz = true;
    let p = 0
    
    while(p < n && isTpz){
        let i = 0, j  = p;          
        let prev = matrix[i][j];
        i++;
        j++;
    
        while(i < m && j < n ){
            if(matrix[i][j] !== prev){
                isTpz = false;
                break;
            }else{
                prev = matrix[i][j];
            }
            i++;
            j++;
        }

        p++;
    }
    
    i = m - 2, j = 0;

    while(i > 0 && isTpz){
        let k = i, l = 0;
        prev = matrix[k][l];
        
        while(k < m && l < n ){
            if(matrix[k][l] !== prev){
                isTpz = false;
                break;
            }else{
                prev = matrix[k][l];
            }
            k++;
            l++;
        }
        i--;
    }
    
    return isTpz;
};

//Simplified approach
var isToeplitzMatrix = function(matrix) {
    let m = matrix.length, n = matrix[0].length;
    
    for(let i = 0; i < m - 1; i++){
        for(let j = 0; j < n - 1; j++){
            if(matrix[i+1][j+1] !== matrix[i][j]){
                return false;
            }
        }
    }
    
    return true;
};