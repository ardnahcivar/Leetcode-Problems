// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

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
var reverseList = function(head) {
    let p = null,curr = head,next = null
    while(curr != null){
        next = curr.next
        curr.next = p
        p = curr
        curr = next
    }
    head = p
    return head
};

//Recursive method
var reverseListRecursive = function(head) {
    if(head === null){
        return null;
    }
 
    return reverse(head, null);
    
    function reverse(currNode,prevNode){
        if(currNode === null){
            return prevNode;
        }else{
            let tmp = currNode.next;
            currNode.next = prevNode;
            return reverse(tmp,currNode);
        }
    }
};