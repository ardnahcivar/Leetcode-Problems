/* Populating Next Right Pointers in Each Node II

Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}

Populate each next pointer to point to its next right node.
If there is no next right node, the next pointer should be set to NULL.
Initially, all next pointers are set to NULL.

Example 1:
Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A),
your function should populate each next pointer to point to its next right node,
just like in Figure B. The serialized output is in level order as connected by the next pointers,
with '#' signifying the end of each level.

Example 2:
Input: root = []
Output: []
*/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    let queue = [];
    
    if(root === null){
        return root;
    }
    
    queue.push(root);
    
    function bfs(node){
        while(queue.length){
            let counter = queue.length;
            let prev = null;
            let currLevel = [];
            
            while(counter > 0){
                let curr = queue.shift();
                currLevel.push(curr);
                
                if(curr.left){
                    queue.push(curr.left);
                }

                if(curr.right){
                    queue.push(curr.right);
                }
                counter--;
            }
            
            while(currLevel.length){
                let curr = currLevel.pop();
                curr.next = prev;
                prev  = curr;
            }
        }

    }
    
    bfs(root)
    
    return root;
};