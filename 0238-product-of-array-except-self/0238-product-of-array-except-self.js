/**
 * @param {number[]} nums
 * @return {number[]}
 */

// O(n) O(1) store prefix and suffix in ans array
var productExceptSelf1 = function(nums) {
    let n = nums.length;
    let ans = new Array(n).fill(1);
    let prod = 1;
    for (let i = 1; i < n; i++) {
        prod *= nums[i - 1];
        ans[i] = prod;
    }
    prod = 1;
    for (let i = n - 2; i >= 0; i--) {
        prod *= nums[i + 1];
        ans[i] *= prod;
    }
    return ans;
};

// O(n) O(n), ans[i] = prefix[i] * suffix[i]
var productExceptSelf = function(nums) {
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