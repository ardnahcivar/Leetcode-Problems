/* Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let carry = 0;    
    let dummyNode = null;
    let iterator = null;
    let curr1 = l1, curr2 = l2;

    while(curr1 && curr2){
        let temp = curr1.val + curr2.val + carry;
        if(temp >= 10){
            carry = Math.floor(temp / 10);
            temp = temp % 10;
        }else{
            carry = 0;
        };
    
        if(dummyNode === null){
            dummyNode = new ListNode(temp);
            iterator = dummyNode;
        }else{
            iterator.next = new ListNode(temp);
            iterator = iterator.next;
        }
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    
    if(curr1 !== null){
        while(curr1){
            let temp = curr1.val + carry;
            if(temp >= 10){
                carry = Math.floor(temp / 10);
                temp = temp % 10;
            }else{
                carry = 0;
            };
            iterator.next = new ListNode(temp);
            iterator = iterator.next; 
            curr1 = curr1.next;
        }
    }
    
    if(curr2 !== null){
        while(curr2){
            let temp = curr2.val + carry;
            if(temp >= 10){
                carry = Math.floor(temp / 10);
                temp = temp % 10;
            }else{
                carry = 0;
            };
            iterator.next = new ListNode(temp);
            iterator = iterator.next; 
            curr2 = curr2.next;
        }
    }
    
    if(carry > 0){
        iterator.next = new ListNode(carry);
        iterator = iterator.next; 
    }
    
    return dummyNode;
};