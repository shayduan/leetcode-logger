/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

// bucket sort
var carPooling = function(trips, capacity) {
    let psg = new Array(1001).fill(0);

    for (let [num, from, to] of trips) {
        psg[from] += num;
        psg[to] -= num;
    }

    let curPsg = 0;
    for (let i = 0; i < 1001; i++) {
        curPsg += psg[i];
        if (curPsg > capacity) return false;
    }
    
    return true;
};


// diff array, O(nlogn) O(n)
var carPooling_array = function(trips, capacity) {
    let psg = []; // passenger change

    for (let [num, from, to] of trips) {
        psg.push([from, num]);
        psg.push([to, -num]);
    }

    // Sort by location
    // At the same location, get off (-) before get on (+)
    psg.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let curPsg = 0;
    for (let [loc, num] of psg) {
        curPsg += num;
        if (curPsg > capacity) return false;
    }

    return true;
};
