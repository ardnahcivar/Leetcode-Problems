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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(root == null) return null
    if(root.val == val){
        if(root.val.left != null)
            root.val.left.val.left = null
        if(root.val.right != null)
            root.val.right.val.right = null
        return root
    }else if(root.val < val){
        return searchBST(root.right,val) 
    }else if(root.val > val){
        return searchBST(root.left,val)     
    }
    
};