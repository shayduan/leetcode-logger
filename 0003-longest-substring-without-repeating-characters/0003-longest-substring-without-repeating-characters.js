/**
 * @param {string} s
 * @return {number}
 */


var lengthOfLongestSubstring = function(s) {
    let l = 0, r = 0;
    let max = 0;
    let map = new Map();
    while (r < s.length) {
        let cur = s[r];
        if (map.has(cur)) l = Math.max(l, map.get(cur) + 1);
        map.set(cur, r);
        max = Math.max(max, r - l + 1);
        r++;
    }
    return max;
}

// O(n) O(n), sliding window + map
var lengthOfLongestSubstring0 = function(s) {
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