/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let n = temperatures.length;
    let stack = [];
    let res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        let curTemp = temperatures[i];
        while (stack.length > 0 && curTemp > temperatures[stack[stack.length - 1]]) {
            let j = stack.pop();
            res[j] = i - j;
        }
        stack.push(i);
    }

    return res;
};

// next greater problem -> monotonic stack
// stack.       cur
// [73]         74.  -> 74 > 73 then pop 73, res[0] = 1-0=1
// [75, 71, 69] 72.  -> pop 69, res[4] = 5-4 = 1
// [75, 71].    72   -> pop 71, res[3] = 5-3 = 2
// [75, 72]     76   -> pop 72, res[5] = 6-5 = 1
// [75]         76.  -> pop 75, res[2] = 6-2 = 4