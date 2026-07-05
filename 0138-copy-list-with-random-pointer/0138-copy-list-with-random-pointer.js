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
    let map = new Map(); // old node -> new node
    map.set(null, null);
    
    let cur = head;
    while (cur) {
        map.set(cur, new _Node(cur.val, null, null));
        cur = cur.next;
    }

    cur = head;
    while (cur) {
        map.get(cur).next = map.get(cur.next);
        map.get(cur).random = map.get(cur.random);
        cur = cur.next;
    }

    return map.get(head);
}

var copyRandomList_self = function(head) {
    if (!head) return head;
    let map = new Map(); // old node -> new node
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