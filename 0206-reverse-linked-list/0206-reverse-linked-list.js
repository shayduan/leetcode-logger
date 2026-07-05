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
    // 1 -> 2 -> 3
    // 1 <- 2.   3
    //     prev cur
    if (!head || !head.next) return head;
    let prev = null, cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};