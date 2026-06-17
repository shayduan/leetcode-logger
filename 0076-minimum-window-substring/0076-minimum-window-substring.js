/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

var minWindow = function(s, t) {
    let slen = s.length, tlen = t.length;
    if (tlen > slen) return '';

    let tset = new Map();
    for (let char of t) {
        tset.set(char, (tset.get(char) || 0) + 1);
    }

    let l = 0, r = 0;
    let sset = new Map();
    let [resL, resR] = [0, Infinity];
    while (r < slen) {
        sset.set(s[r], (sset.get(s[r]) || 0) + 1);
        while (isSubset(sset, tset)) {
            if (r - l < resR - resL) [resL, resR] = [l, r];
            sset.set(s[l], sset.get(s[l]) - 1);
            l++;
        }
        r++;
    }
    return resR === Infinity ? '' : s.substring(resL, resR + 1);
};

// If mapB is the subset of mapA
const isSubset = (mapA, mapB) => {
    for (let [k, v] of mapB) {
        if (!mapA.has(k) || mapA.get(k) < v) return false;
    }
    return true;
}