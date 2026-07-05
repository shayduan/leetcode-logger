/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// dp[i][j] - LCS of text1.substring(0, i) and text2.substring(0, j) aka [0...(j-1)]
// if text1[i] === text2[j], dp[i][j] = dp[i-1][j-1] + 1;
// if text1[i] !== text2[j], dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
// O(mn), O(mn) -> O(min(m, n))
var longestCommonSubsequence = function(text1, text2) {
    let [m, n] = [text1.length, text2.length];
    let dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
    
    dp[0][0] = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (text1[i] === text2[j]) {
                dp[i + 1][j + 1] = dp[i][j] + 1;
            } else {
                dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
            }
        }
    }

    return dp[m][n];
};