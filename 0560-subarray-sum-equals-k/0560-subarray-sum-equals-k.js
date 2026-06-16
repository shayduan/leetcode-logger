/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// O(n), O(n)
var subarraySum = function(nums, k) {
    let map = new Map(); // sum -> count of sum
    let sum = 0;
    let res = 0;

    map.set(0, 1);
    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) res += map.get(sum - k);
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return res;
};