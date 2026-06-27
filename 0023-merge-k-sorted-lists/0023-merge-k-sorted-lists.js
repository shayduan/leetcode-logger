/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// divide and conquer
var mergeKLists = function(lists) {
    if (lists.length === 0) return null;

    // conquer
    const merge = (l1, l2) => {
        let dummy = new ListNode();
        let tail = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                tail.next = l1;
                l1 = l1.next;
            } else {
                tail.next = l2;
                l2 = l2.next;
            }
            tail = tail.next;
        }
        tail.next = l1 || l2;
        return dummy.next;
    }

    // divide
    const mergeRange = (lo, hi) => {
        if (lo === hi) return lists[lo];
        let mid = (lo + hi) >> 1;
        let left = mergeRange(lo, mid);
        let right = mergeRange(mid + 1, hi);
        return merge(left, right);
    }

    return mergeRange(0, lists.length - 1);
};