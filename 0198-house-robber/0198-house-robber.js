/**
 * @param {number[]} nums
 * @return {number}
 */

// dp[n] - the maximum # of money we can rob from n houses
// dp[n] = Math.max(dp[n - 1], dp[n - 2] + nums[n])
// O(n), O(n) -> O(1)
var rob = function(nums) {
    const n = nums.length;
    // let dp = new Array(n + 1).fill(0);
    // dp[0] = 0;
    // dp[1] = nums[0];
    // for (let i = 2; i <= n; i++) {
    //     dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    // }
    // return dp[n];

    let prev2 = 0, prev = nums[0];
    for (let i = 2; i <= n; i++) {
        let cur = Math.max(prev, prev2 + nums[i - 1]);
        [prev2, prev] = [prev, cur];
    }
    return prev;
};