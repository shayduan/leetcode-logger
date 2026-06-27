/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// min heap, time O(n*logk), space O(k)
var findKthLargest = function(nums, k) {
    const heap = new MinPriorityQueue();
    for (let num of nums) {
        heap.enqueue(num);
        if (heap.size() > k) {
            heap.dequeue();
        }
    }
    return heap.front();
};