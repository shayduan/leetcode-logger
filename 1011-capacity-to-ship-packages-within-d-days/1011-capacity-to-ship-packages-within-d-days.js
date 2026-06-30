/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let max = 0, sum = 0;
    for (let w of weights) {
        max = Math.max(max, w);
        sum += w;
    }

    // if capacity too large or just good -> return true
    const checkCapacity = (capacity) => {
        let chunk = 0;
        let daysNeeded = 0;
        for (let w of weights) {
            chunk += w;
            if (chunk > capacity) {
                daysNeeded++;
                chunk = w;
            }
        }
        if (chunk !== 0) daysNeeded++;
        return daysNeeded <= days;
    }

    let [l, r] = [max, sum];
    while (l < r) {
        let mid = (l + r) >> 1;
        if (checkCapacity(mid)) r = mid;
        else l = mid + 1;
    }

    return l;
};

// find the smallest capacity
// divide array into [days] chunks
// sum(chunk) <= capacity

// lowerbound -> max(weight)
// upperbound -> sum(array)