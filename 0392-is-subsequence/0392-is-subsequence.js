/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// end early
var isSubsequence = function(s, t) {
    if (s === '') return true;
    s = s.split('');
    for (let i = 0; i < t.length; i++) {
        if (s[0] === t[i]) {
            s.shift();
            if (s.length === 0) return true;
        }
    }
    return false;
};

var isSubsequence0 = function(s, t) {
    let k = 0; // index for s
    for (let i = 0; i < t.length; i++) {
        if (s[k] === t[i]) k++;
    }
    return k === s.length;
};