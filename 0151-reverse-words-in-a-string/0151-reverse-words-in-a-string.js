/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
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