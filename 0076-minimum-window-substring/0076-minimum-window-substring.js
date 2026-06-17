/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// optimize: do not use isSubset to check if valid -> use extra variables
var minWindow = function(s, t) {
    let slen = s.length, tlen = t.length;
    if (tlen > slen) return '';

    let tset = new Map();
    for (let c of t) {
        tset.set(c, (tset.get(c) || 0) + 1);
    }
    let goalCharCount = tset.size; // how many unique chars in t

    let l = 0, r = 0;
    let sset = new Map();
    let validCharCount = 0; // how many valid chars (meet the count req in t) in cur window
    let [resL, resR] = [0, Infinity];

    while (r < slen) {
        let cur = s[r];
        sset.set(cur, (sset.get(cur) || 0) + 1);

        if (tset.has(cur) && sset.get(cur) === tset.get(cur)) {
            validCharCount++;
        }

        while (validCharCount === goalCharCount) { 
            if (r - l < resR - resL) [resL, resR] = [l, r];

            sset.set(s[l], sset.get(s[l]) - 1);
            if (tset.has(s[l]) && sset.get(s[l]) < tset.get(s[l])) validCharCount--;
            l++;
        }
        r++;
    }
    return resR === Infinity ? '' : s.substring(resL, resR + 1);
};

// O(mn), O(m+n)
var minWindow0 = function(s, t) {
    let slen = s.length, tlen = t.length;
    if (tlen > slen) return '';

    let tset = new Map();
    for (let c of t) {
        tset.set(c, (tset.get(c) || 0) + 1);
    }

    let l = 0, r = 0;
    let sset = new Map();
    let [resL, resR] = [0, Infinity];
    while (r < slen) { // O(mn)
        let cur = s[r]
        sset.set(cur, (sset.get(cur) || 0) + 1);
        while (isSubset(sset, tset)) { // O(n)
            if (r - l < resR - resL) [resL, resR] = [l, r];
            sset.set(s[l], sset.get(s[l]) - 1);
            l++;
        }
        r++;
    }
    return resR === Infinity ? '' : s.substring(resL, resR + 1);
};

// If mapB is the subset of mapA, O(size of mapB) -> O(size of tset)
const isSubset = (mapA, mapB) => {
    for (let [k, v] of mapB) {
        if (!mapA.has(k) || mapA.get(k) < v) return false;
    }
    return true;
}