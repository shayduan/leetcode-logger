/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [];
    for (let interval of intervals) {
        if (merged.length === 0) 
            merged.push(interval);
        let tail = merged.length - 1;
        if (interval[0] >= merged[tail][0] && interval[0] <= merged[tail][1]) {
            merged[tail][0] = Math.min(interval[0], merged[tail][0]);
            merged[tail][1] = Math.max(interval[1], merged[tail][1]);
        } else {
            merged.push(interval);
        }
    }

    return merged;
};

// [s1, e1], [s2, e2], ...
// if (sj >= si && sj <= ei) then merge i[] and j[]