/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n) O(1) store prefix and suffix in ans array
var productExceptSelf = function(nums) {
    let n = nums.length;
    let ans = new Array(n).fill(1);
    // prefix
    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }
    // prefix * suffix
    let suffix = 1;
    for (let i = n - 2; i >= 0; i--) {
        suffix *= nums[i + 1];
        ans[i] *= suffix;
    }
    return ans;
};

// O(n) O(n), ans[i] = prefix[i] * suffix[i]
var productExceptSelf0 = function(nums) {
    let n = nums.length;
    let prefix = new Array(n).fill(1);
    let suffix = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }
    
    let ans = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        ans[i] = prefix[i] * suffix[i];
    }

    return ans;
};