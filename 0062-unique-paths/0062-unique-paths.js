/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// dp[i][j] - the number of possible unique paths that the robot can take to reach grid[i][j]
// dp[0][0] = 1
// dp[i][j] = dp[i-1][j] if grid[i-1][j] is valid + dp[i][j-1] if grid[i][j-1] is valid
// O(mn) O(mn) -> O(n)
var uniquePaths = function(m, n) {
    const isValid = (i, j) => i >= 0 && i < m && j >= 0 && j < n;
    // let dp = Array.from({length: m}, () => new Array(n).fill(0));
    let cur = new Array(n).fill(1);

    // dp[0][0] = 1;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            cur[j] += cur[j - 1];
            // if (isValid(i - 1, j)) dp[i][j] += dp[i - 1][j];
            // if (isValid(i, j - 1)) dp[i][j] += dp[i][j - 1];
        }
    }

    //            dp[i-1][j]
    // dp[i][j-1] dp[i][j]

    return cur[n - 1]; // dp[m - 1][n - 1];
};