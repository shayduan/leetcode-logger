/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

// Sliding Window
var minSubArrayLen = function(target, nums) {
    let l = 0, r = 0;
    let min = Infinity;
    let sum = 0;
    while (r < nums.length) {
        sum += nums[r];
        while (sum >= target) {
            min = Math.min(min, r - l + 1);
            sum -= nums[l];
            l++;
        }
        r++;
    }
    return min === Infinity ? 0 : min;
};