/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2) return s;
    let res = new Array(numRows).fill('');
    let i = 0, add = -1;
    for (let c of s) {
        res[i] += c;
        if (i === 0 || i === numRows - 1) add = -add;
        i += add;
    }
    return res.join('');
};