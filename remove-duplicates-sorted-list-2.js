/* Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers,
leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]
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
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    if(head === null || head.next === null){
        return head;
    }
    
    let curr = head;
    let dummy = { next: head };
    let prev = dummy;
    
    while(curr){
        if(curr.next && curr.val === curr.next.val){
            while(curr.next && curr.val === curr.next.val){
               curr = curr.next;
            }
            prev.next = curr.next;
        }else if(prev.next){
            prev = prev.next;
        }
        curr = curr.next;
    }
    
    return dummy.next;
};