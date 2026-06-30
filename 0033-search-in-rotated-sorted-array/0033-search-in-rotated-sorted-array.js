/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// binary search, find which part is sorted
var search = function(nums, target) {
    let n = nums.length;
    let [l, r] = [0, n - 1];

    while (l <= r) {
        let mid = (l + r) >> 1;
        if (target === nums[mid]) return mid;
        // left part [l, mid] is sorted
        if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        }
        // right part [mid, r] is sorted
        else {
            if (target > nums[mid] && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
};