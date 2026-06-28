/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// greedy
// A B _ _ A B _ _ A B, n = 3
// initial slots taken = maxFreq * maxCount + (maxFreq - 1) * (n - (maxCount - 1))
// more slots needed = Math.max(0, tasks - initial)
var leastInterval = function(tasks, n) {
    let freq = new Array(26).fill(0);
    let maxFreq = 0, maxCount = 0;

    const A = 'A'.charCodeAt();
    for (let task of tasks) {
        let i = task.charCodeAt() - A;
        freq[i]++;
        if (freq[i] === maxFreq) 
            maxCount++;
        else if (freq[i] > maxFreq) {
            maxFreq = freq[i];
            maxCount = 1;
        }
    }

    let initial = maxFreq * maxCount + (maxFreq - 1) * (n - (maxCount - 1));
    let more = Math.max(0, tasks.length - initial);

    // let part = maxFreq - 1;
    // let empty = part * (n - (maxCount - 1));
    // let tasksLeft = tasks.length - maxFreq * maxCount;
    // let idle = Math.max(0, empty - tasksLeft);

    return initial + more;
};