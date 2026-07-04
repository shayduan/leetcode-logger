/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// dp[n] - if s[0...n-1] can be constructed by wordDict, n is the length
// dp[n] = for each wordDict[k], check if s[-k] === wordDict[k], if so, dp[n] = dp[n - k]
var wordBreak = function(s, wordDict) {
    const n = s.length;
    const set = new Set(wordDict);
    let dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (let i = 1; i <= n; i++) {
        for (let word of wordDict) {
            if (dp[i] === true) break;
            let k = word.length;
            if (i >= k && set.has(s.substring(i - k, i))) {
                dp[i] = dp[i - k];
            }
        }
    }
    return dp[n];
};