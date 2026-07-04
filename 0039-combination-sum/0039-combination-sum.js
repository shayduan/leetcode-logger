/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const n = candidates.length;
    let res = [];
    let cur = [];

    const backtrack = (start, target) => {
        if (target === 0) {
            res.push([...cur]);
            return;
        }
        if (target < 0) return;

        for (let i = start; i < n; i++) {
            cur.push(candidates[i]);
            backtrack(i, target - candidates[i]);
            cur.pop();
        }
    }

    backtrack(0, target);
    return res;
};