/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function(s) {
    s = s.trim(); // remove spaces in the beginning and the end
    let len = s.length;
    let i = len - 1, j = len - 1;
    let res = [];
    while (i >= 0) {
        while (i >= 0 && s[i] !== ' ') i--; // find the first space from right to left
        res.push(s.slice(i + 1, j + 1));
        while (i >= 0 && s[i] === ' ') i--; // skip spaces in between
        j = i;
    }
    return res.join(' ');
}

// left to right + array unshift, O(n)
var reverseWords1 = function(s) {
    const space = ' ';
    let len = s.length;
    let array = [];
    let start = 0;
    for (let i = 0; i < len; i++) {
        if ((i === 0 || s[i - 1] === space) && s[i] !== space) {
            start = i;
            continue;
        }
        if (s[i] === space) {
            array.unshift(s.slice(start, i));
            while (s[i] === space) {
                i++;
            }
            start = i;
        }
    }
    array.unshift(s.slice(start, s.length));
    return array.filter(i => i !== '').join(' ');
};