/**
 * @param {string} s
 * @return {number}
 */

// Sliding window
// [i, j] as the window, move j-> in each loop; when duplicate, move i-> until no duplicate
// recording the length of the window during the traverse
// --------
// Time complexity O(n): every character enters and leaves the window at most once. The two pointers each traverses the string only once, thus the total work is O(n)
// Space complexity O(n): The set size is bounded by the distinct chars in the string, thus O(min(n, charset)) space
var lengthOfLongestSubstring = function(s) {
    let window = new Set();
    let maxlen = 0;
    let i = 0, j = 0;
    while (j < s.length) {
        while (window.has(s[j])) {
            window.delete(s[i]);
            i++;
        }
        window.add(s[j]);
        if (window.size > maxlen) maxlen = window.size;
        j++;
    }
    return maxlen;
};