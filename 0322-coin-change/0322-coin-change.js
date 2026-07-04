/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// dp[amount] - fewest # of coins to make up the amount
// dp[amount] = for each coins[k], dp[amount - coins[k]] + 1
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 0; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
};
