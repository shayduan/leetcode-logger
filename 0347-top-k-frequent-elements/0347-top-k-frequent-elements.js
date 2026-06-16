/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
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