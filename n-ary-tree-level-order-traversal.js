/* N-ary Tree Level Order Traversal

Given an n-ary tree, return the level order traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal,
each group of children is separated by the null value (See examples).

Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]

Example 2:
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]

Constraints:
    The height of the n-ary tree is less than or equal to 1000
    The total number of nodes is between [0, 104]

 */

    /**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null)
        return [];
    
    let q = [],levels = [];
    q.push(root);
    levels.push([root.val]);
    
    while(q.length){
        let temp = [];
        let currLevelSize = q.length;
     
        while(currLevelSize > 0){
            let curr = q.shift();
            currLevelSize--;
            for(let i = 0; i < curr.children.length; i++){
                if(curr.children[i] !== null){
                    q.push(curr.children[i]);
                    temp.push(curr.children[i].val)                
                }
            }
        }

        if(temp.length)
            levels.push(temp);
    }
    
    return levels;
    
};