class Node {
    prev; // Node
    next; // Node
    key;
    value;
    constructor(key, value, prev = null, next = null) {
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LRUCache {
    cap; // capacity
    cache; // hashmap
    LRU; // least recently used -> Leftest dummy node
    MRU; // most recently used -> Rightest dummy node

    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map();

        this.LRU = new Node(-1, -1);
        this.MRU = new Node(-1, -1);
        this.LRU.next = this.MRU;
        this.MRU.prev = this.LRU;
    }

    get(key) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);
            // move to the MRU
            this.#remove(node);
            this.#insert(node);
            return node.value;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);
            node.value = value;
            this.#remove(node);
            this.#insert(node);
        } else {
            let node = new Node(key, value);
            this.cache.set(key, node);
            this.#insert(node);
            if (this.cache.size > this.cap) {
                this.cache.delete(this.LRU.next.key);
                this.#remove(this.LRU.next);
            }
        }
    }

    // remove from linked list
    #remove(node) {
        let [prev, next] = [node.prev, node.next];
        prev.next = next;
        next.prev = prev;
    }

    // insert to the MRU side in the linked list
    #insert(node) {
        let prev = this.MRU.prev;
        [prev.next, this.MRU.prev] = [node, node];
        [node.prev, node.next] = [prev, this.MRU];
    }
}

// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
    
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
    
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
    
// };

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */