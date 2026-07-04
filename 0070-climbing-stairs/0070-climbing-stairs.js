/**
 * @param {number} n
 * @return {number}
 */

// dynamic programming
// dp[n] - # of distinct ways to climb to the n-th step
// dp[n] = dp[n - 1] + dp[n - 2]
var climbStairs = function(n) {
    let dp = new Array(n + 1).fill(1);
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};