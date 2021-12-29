/* Populating Next Right Pointers in Each Node

You are given a perfect binary tree where all leaves are on the same level,
and every parent has two children. The binary tree has the following definition:

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
Input: root = [1,2,3,4,5,6,7]
Output: [1,#,2,3,#,4,5,6,7,#]
Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.

Example 2:
Input: root = []
Output: []

Constraints:
    The number of nodes in the tree is in the range [0, 212 - 1].
    -1000 <= Node.val <= 1000

Follow-up:
    You may only use constant extra space.
    The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem.

 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    
    let head = root;
    
    while(root){
        let curr = root;
        
        while(curr){
            if(curr.left){
                curr.left.next = curr.right;
                if(curr.next){
                    curr.right.next = curr.next.left; 
                }
            }else{
                break;
            }
            curr = curr.next;
        }
        root = root.left;
    }
    
    return head;
};

var connectBFS = function(root) {
    let q = [];
    
    if(root === null){
        return root;
    }
    
    q.push(root);

    let prev = null;
    
    while(q.length){
        let count  = q.length;
    
        let nextLevel = []

        while(count > 0){
            let curr = q.shift();
                  
            if(curr.right){
                nextLevel.push(curr.right)
            }
            
            if(curr.left){
                nextLevel.push(curr.left)
            }
            
            curr.next =  prev;
            prev = curr;
            count--;
        }
        
        prev = null;
        q.push(...nextLevel)    
    }
    
    return root;
};

