/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let [l, r] = [0, nums.length - 1];

    while (l < r) {
        let mid = (l + r) >> 1;
        // both part is sorted
        if (nums[l] <= nums[mid] && nums[mid] < nums[r]) r = mid;
        // left part [l, mid] is sorted
        else if (nums[l] <= nums[mid]) l = mid + 1;
        // right part [mid, r] is sorted
        else r = mid;
    }

    return nums[l];
};