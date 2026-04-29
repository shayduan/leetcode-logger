/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    let cnt = 0;
    while (i >= 0) {
        if (s[i] === ' ' && cnt === 0) {
            i--;
            continue;
        }
        if (s[i] === ' ' && cnt > 0) return cnt;
        cnt++;
        i--;
    }
    return cnt;
};