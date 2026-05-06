/**
 * @param {number[]} height
 * @return {number}
 */

// time O(n), where n = length of the array
// space O(1), constant space
var maxArea = function(height) {
    let n = height.length;
    let i = 0, j = n - 1;
    let max = 0;
    while (i < j) {
        // calc
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
        // move
        if (height[i] < height[j]) i++;
        else j--;
    }
    return max;
};