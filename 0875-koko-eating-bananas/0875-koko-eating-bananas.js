/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// brute force
var minEatingSpeed = function(piles, h) {
    let max = 1;
    for (let p of piles) max = Math.max(max, p);
    let [l, r] = [1, max];

    while (l < r) {
        let mid = (l + r) >> 1;

        let hours = 0;
        for (let p of piles) hours += Math.ceil(p / mid);

        if (hours <= h) r = mid;
        else l = mid + 1;
    }

    return l;
};
