/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return head;
    let map = new Map(); // index -> _Node
    let originHead = head;
    let newHead = new _Node(head.val, head.next, null);
    let dummy = new _Node(0, newHead, null);
    map.set(head, newHead);
    while (head.next) {
        head = head.next;
        let newNode = new _Node(head.val, head.next, null);
        map.set(head, newNode);
        newHead.next = newNode;
        newHead = newHead.next;
    }

    // construct random
    newHead = dummy.next;
    while (newHead) {
        newHead.random = map.get(originHead.random);
        newHead = newHead.next;
        originHead = originHead.next;
    }

    return dummy.next;
};