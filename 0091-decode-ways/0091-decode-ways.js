/**
 * @param {string} s
 * @return {number}
 */

// dp[i] - # of ways to decode s.substring(0, i) -> length is i
// dp[i]
// if s[i-1] is valid -> [1, 9], then dp[i] += dp[i-1]
// if s[i-1] is 0, then ??
// if s.substring(i-2, i) is valid -> [1, 26], then dp[i] += dp[i-2]
// what if it's not valid?
var numDecodings = function(s) {
    const n = s.length;
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
        if (s[i - 1] !== '0') dp[i] += dp[i - 1];
        if (i >= 2 && isValid(s.substring(i - 2, i))) dp[i] += dp[i - 2];
    }

    return dp[n];
};

const isValid = (x) => Number(x) >= 10 && Number(x) <= 26;