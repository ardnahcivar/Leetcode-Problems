// 74. Search a 2D Matrix
// Write an efficient algorithm that searches for a value in an m x n matrix. 
// This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
 
// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 3
// Output: true

// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,50]], target = 13
// Output: false
// Example 3:

// Input: matrix = [], target = 0
// Output: false
 
// Constraints:
// m == matrix.length
// n == matrix[i].length
// 0 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @description Search in a 2D matrix,solution time and space complexity is O(n+nlogn), O(1)
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0 || matrix[0][0] > target ) return false
    let col = -1
    for(let i = 0; i < matrix.length; i++){
        if(matrix[i][0] == target) return true
        if(matrix[i][0] < target) col = i   
    }
    if(col == -1) col = matrix.length - 1    
    return bsearch(0,matrix[col].length-1,target,matrix[col])
    
    function bsearch(start,end,target,arr){
        let mid  = Math.floor((start + end)/2)
        while(start <= end){
            if(arr[mid] == target){
                return true
            }
            if(arr[mid] < target){
                return bsearch(mid+1, end, target,arr)                
            }else if(arr[mid] > target){
                return bsearch(start, mid-1, target,arr)
            }       
        }
        return false
    }
};