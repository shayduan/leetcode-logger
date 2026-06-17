/**
 * @param {string} s
 * @return {number}
 */

// O(n) O(n), sliding window + map
var lengthOfLongestSubstring = function(s) {
    let map = new Map(); // char -> index
    let l = 0, r = 0;
    let maxlen = 0;

    while (r < s.length) {
        if (map.has(s[r])) l = Math.max(l, map.get(s[r]) + 1);
        map.set(s[r], r);
        maxlen = Math.max(r - l + 1, maxlen);
        r++;
    }

    return maxlen;
};