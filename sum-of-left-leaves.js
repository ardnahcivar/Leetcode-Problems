// 404. Sum of Left Leaves
// Easy

// 1394

// 140

// Add to List

// Share
// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root) return 0
    let s = 0
    dfs(root,s,false)
    return s
    
    function dfs(root,v,flag){
        if(root && flag && root.left == null && root.right == null){
            s = s + v + root.val
        }        
        if(root && root.left){
            dfs(root.left,v,true)
        }
        if(root && root.right){
            dfs(root.right,v,false)
        }
    }
    
};