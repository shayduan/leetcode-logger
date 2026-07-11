/**
 * @param {number[]} nums
 * @return {number}
 */

// Kadane's algorithm, ultimately a dp problem
// dp[i] - the max sum when subarray ends at nums[i]
// dp[i] = max(dp[i-1] + nums[i], nums[i])
// during the process, keep a record of the max dp[k]
var maxSubArray = function(nums) {
    let n = nums.length;
    let cur = nums[0], max = nums[0];
    for (let i = 1; i < n; i++) {
        cur = Math.max(cur + nums[i], nums[i]);
        max = Math.max(max, cur);
    }
    return max;
}


// dp
// dp[n] - largest subarray sum when the array ends with the n-th item
// dp[n+1] = max(dp[n], 0) + nums[i+1]
// dp[0] = nums[0];
var maxSubArray0 = function(nums) {
    let cur = nums[0];
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        cur = Math.max(cur, 0) + nums[i];
        largest = Math.max(cur, largest);
    }
    return largest;
};