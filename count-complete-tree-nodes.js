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
var countNodes = function(root) {
    let c = 0
    function countNodes(root){
        if(root){
            c = c + 1
            if(root.left != null){
                countNodes(root.left)
            }
            if(root.right != null){
                countNodes(root.right)
            }
        }
    }
    countNodes(root)
    return c
};