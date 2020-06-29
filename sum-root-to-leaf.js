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
var sumNumbers = function(root) {
    function calc(root,c){
        if(root == null) return 0
        if(root.left != null && root.right != null){
          root.left.val = +[root.val,root.left.val].join('')
          root.right.val = +[root.val,root.right.val].join('') 
          return calc(root.left) + calc(root.right)  
        } 
        if(root.left == null && root.right == null) return root.val
        if(root.left == null && root.right != null){
          root.right.val = +[root.val,root.right.val].join('') 
          return calc(root.right)  
        } 
        if(root.left != null && root.right == null){
          root.left.val = +[root.val,root.left.val].join('')
          return calc(root.left)   
        }
    }    
    return calc(root,[])
};