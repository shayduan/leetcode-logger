/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// heap
var topKFrequent = function(nums, k) {
    let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    let heap = new MinPriorityQueue({ compare: (a, b) => a[1] - b[1]});
    for (let entry of map) {
        heap.enqueue(entry);
        if (heap.size() > k) heap.dequeue();
    }

    return heap.toArray().map(e => e[0]);
};

// bucket sort, O(n) O(n)
var topKFrequent0 = function(nums, k) {
    let map = new Map();
    let n = nums.length;
    let bucket = new Array(n + 1).fill(0).map(() => []);
    let res = [];

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    for (let [num, freq] of map) {
        bucket[freq].push(num);
    }
    for (let i = n; i >= 0, k > 0; i--) {
        if (bucket[i].length > 0) {
            res.push(...bucket[i]);
            k -= bucket[i].length;
        }
    }

    return res;
};