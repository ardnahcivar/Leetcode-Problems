/* Rotate List

Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    let size = 0;
    let curr = head;
    
    if(head === null){
        return head;
    }
    
    while(curr){
        size++;
        curr = curr.next;
    }
    
    let rotate = k % size;
    
    if(rotate === 0){
        return head;
    }
    
    let r = size - rotate;
        
    let start = head;
    let temp = head;
    let prev = null;

    while(temp && r > 0){
        prev = temp;
        temp = temp.next;
        r--;
    }

    let newStart = { next:temp };
    
    while(temp.next != null){
        temp = temp.next;
    }
    
    temp.next = start;    
    prev.next = null;
    
    return newStart.next;  
};