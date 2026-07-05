class Node {
    constructor(key = -1, value = -1, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map(); // key -> node
    this.MRU = new Node(); // most recently used, dummy node
    this.LRU = new Node(); // least recently used, dummy node
    
    this.MRU.next = this.LRU;
    this.LRU.prev = this.MRU;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;

    let node = this.map.get(key);
    this.remove(node);
    this.addToMRU(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node;
    if (this.map.has(key)) {
        // if key exist, update the value
        node = this.map.get(key);
        node.value = value;
        this.remove(node);
    }
    else {
        // if not exist, add key-value
        node = new Node(key, value);
        this.map.set(key, node);
    }
    // move current node to MRU
    this.addToMRU(node);
    // if node # > capacity, remove the LRU
    if (this.map.size > this.capacity) {
        let lruNode = this.LRU.prev;
        this.remove(lruNode);
        this.map.delete(lruNode.key);
    }
};

LRUCache.prototype.remove = function(node) {
    // prev -> node -> next
    let [prev, next] = [node.prev, node.next];
    prev.next = next;
    next.prev = prev;
    return node;
}

LRUCache.prototype.addToMRU = function(node) {
    // this.MRU -> node -> next
    let next = this.MRU.next;
    this.MRU.next = node;
    [node.prev, node.next] = [this.MRU, next];
    next.prev = node;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */


// class LRUCache {
//     cap; // capacity
//     cache; // hashmap
//     LRU; // least recently used -> Leftest dummy node
//     MRU; // most recently used -> Rightest dummy node

//     constructor(capacity) {
//         this.cap = capacity;
//         this.cache = new Map();

//         this.LRU = new Node(-1, -1);
//         this.MRU = new Node(-1, -1);
//         this.LRU.next = this.MRU;
//         this.MRU.prev = this.LRU;
//     }

//     get(key) {
//         if (this.cache.has(key)) {
//             let node = this.cache.get(key);
//             // move to the MRU
//             this.#remove(node);
//             this.#insert(node);
//             return node.value;
//         }
//         return -1;
//     }

//     put(key, value) {
//         if (this.cache.has(key)) {
//             let node = this.cache.get(key);
//             node.value = value;
//             this.#remove(node);
//             this.#insert(node);
//         } else {
//             let node = new Node(key, value);
//             this.cache.set(key, node);
//             this.#insert(node);
//             if (this.cache.size > this.cap) {
//                 this.cache.delete(this.LRU.next.key);
//                 this.#remove(this.LRU.next);
//             }
//         }
//     }

//     // remove from linked list
//     #remove(node) {
//         let [prev, next] = [node.prev, node.next];
//         prev.next = next;
//         next.prev = prev;
//     }

//     // insert to the MRU side in the linked list
//     #insert(node) {
//         let prev = this.MRU.prev;
//         [prev.next, this.MRU.prev] = [node, node];
//         [node.prev, node.next] = [prev, this.MRU];
//     }
// }