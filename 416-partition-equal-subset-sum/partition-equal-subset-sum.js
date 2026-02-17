/**
 * @param {number[]} nums
 * @return {boolean}
 */

function helper(i, nums, target, dp) {
    if (target === 0) return true;
    if (i < 0) return false;

    if (dp[i][target] !== -1) return dp[i][target];

    let notTake = helper(i - 1, nums, target, dp);

    let take = false;
    if (nums[i] <= target) {
        take = helper(i - 1, nums, target - nums[i], dp);
    }

    dp[i][target] = take || notTake;
    return dp[i][target];
}

var canPartition = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);

    if (total % 2 !== 0) return false;

    let target = total / 2;
    let n = nums.length;

    const dp = Array.from({ length: n }, () =>
        Array(target + 1).fill(-1)
    );

    return helper(n - 1, nums, target, dp);
};
