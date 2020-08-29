// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You may not modify the values in the list's nodes, only nodes itself may be changed.

// Example 1:

// Given 1->2->3->4, reorder it to 1->4->2->3.
// Example 2:

// Given 1->2->3->4->5, reorder it to 1->5->2->4->3.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head==null || head.next==null) return
    let slow,fast,prev = null
    slow = head
    fast = head
    while(fast && fast.next && fast.next.next){
        prev = slow
        fast = fast.next.next
        slow = slow.next
    }
    // prev.next = null
    let new_head = slow
    let p = null,curr = new_head,next = null
    while(curr != null){
        next = curr.next
        curr.next = p
        p = curr
        curr = next
    }
    new_head = p
    console.log(head)
    console.log(new_head)
    let h1,h2
    while(head){
        h1 = head.next
        h2 = new_head.next
        head.next = new_head
        if(head.next == null) break  
        new_head.next = h1
        head = h1
        new_head = h2
    }
};