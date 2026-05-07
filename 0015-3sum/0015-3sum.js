/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let n = nums.length;
    let res = [];
    for (let i = 0; i < n - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicate
        let l = i + 1, r = n - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++; r--;
                while (l < r && nums[l] === nums[l - 1]) l++; // skip duplicate
                while (l < r && nums[r] === nums[r + 1]) r--; // skip duplicate
            } else if (sum < 0) {
                l++;
                while (l < r && nums[l] === nums[l - 1]) l++; // skip duplicate
            } else if (sum > 0) {
                r--;
                while (l < r && nums[r] === nums[r + 1]) r--; // skip duplicate
            }
        }
    }
    return res;
};