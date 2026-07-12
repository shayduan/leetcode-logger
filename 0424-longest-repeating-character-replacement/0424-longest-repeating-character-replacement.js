/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function(s, k) {
    let l = 0, r = 0;
    let count = new Array(26).fill(0);
    let maxLen = 0, maxCount = 0;
    while (r < s.length) {
        let index = s[r].charCodeAt() - 'A'.charCodeAt();
        count[index]++;
        maxCount = Math.max(maxCount, count[index]);

        if (r - l + 1 - maxCount > k) {
            count[s[l].charCodeAt() - 'A'.charCodeAt()]--;
            l++;
        }
        maxLen = Math.max(maxLen, r - l + 1);
        r++;
    }
    return maxLen;
}


























// sliding window [l, r], windowSize = r - l + 1
// windowSize - highestFrequency <= k, valid substring
// windowSize <= k + highestFrequency
// goal -> largest window size -> largest highestFrequency
var characterReplacement0 = function(s, k) {
    let freq = new Array(26).fill(0);
    let [l, r] = [0, 0];
    let maxFreq = 0;
    let maxLen = 0;
    let n = s.length;
    const A_ASCII = 'A'.charCodeAt();

    while (r < n) {
        // update freq and maxFreq
        freq[s[r].charCodeAt() - A_ASCII]++;
        maxFreq = Math.max(maxFreq, freq[s[r].charCodeAt() - A_ASCII]);
        // check if not valid (potentially move l)
        if (r - l + 1 - maxFreq > k) {
            freq[s[l].charCodeAt() - A_ASCII]--;
            l++;
        }
        // check if window size is larger
        maxLen = Math.max(maxLen, r - l + 1);
        // move r
        r++;
    }

    return maxLen;
};