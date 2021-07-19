/*Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.
According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q 
as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let pAncs = search(root,p.val,[])
    let qAncs = search(root,q.val,[])
        
    function search(root, val,store){
        if(root.val === val){
            store.push(root)
            return store;
        }else if(root.val > val){
            store.push(root)
            return search(root.left,val,store)
        }else{
            store.push(root)
            return search(root.right,val,store)            
        }
     
    }
    let t1 = pAncs.length > qAncs.length ? qAncs: pAncs;
    let t2 = pAncs.length > qAncs.length ? pAncs: qAncs;
    let res = []
    for(let i = 0; i < t1.length; i++){
        for(let j = 0; j < t2.length; j++){
            if(t1[i].val === t2[j].val){
                res.push(t1[i])
            }            
        }
    }    
    return res[res.length-1];
};
