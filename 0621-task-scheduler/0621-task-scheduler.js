/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */

// greedy
// A _ _ A _ _ A
// initial slots taken = maxFreq * maxCount + (maxFreq - 1) * n
// more slots needed = Math.max(0, tasks - initial)

// part = maxFreq - 1
// empty = part * (n - (maxCount - 1))
// tasksleft = tasks.len - maxFreq * maxCount
// idle = Math.max(0, empty - tasksleft)
//.     = Math.max(0, (maxFreq - 1) * (n - maxCount + 1) - tasks.len + maxFreq * maxCount)
//.     = Math.max(0, (n + 1) * maxFreq+ maxCount - n - 1 - tasks.len)
var leastInterval = function(tasks, n) {
    let freq = new Array(26).fill(0);
    let maxFreq = '', maxCount = 0;

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

    // let initial = maxFreq * maxCount + (maxFreq - 1) * n;
    // let more = Math.max(0, tasks.length - initial);

    let part = maxFreq - 1;
    let empty = part * (n - (maxCount - 1));
    let tasksLeft = tasks.length - maxFreq * maxCount;
    let idle = Math.max(0, empty - tasksLeft);

    return tasks.length + idle;
};