/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let l = 0;
    let r = 0;
    const n = nums.length;

    let maxQ = [];
    let minQ = [];

    let maxStart = 0;
    let minStart = 0;

    let result = 0;

    while (r < n) {

        // Maintain maxQ
        while (maxQ.length > maxStart &&
               nums[r] >= nums[maxQ[maxQ.length - 1]]) {
            maxQ.pop();
        }
        maxQ.push(r);

        // Maintain minQ
        while (minQ.length > minStart &&
               nums[r] <= nums[minQ[minQ.length - 1]]) {
            minQ.pop();
        }
        minQ.push(r);

        // Shrink window
        while (
            l <= r &&
            ((nums[maxQ[maxStart]] - nums[minQ[minStart]]) * (r - l + 1)) > k
        ) {
            if (l === minQ[minStart]) minStart++;
            if (l === maxQ[maxStart]) maxStart++;
            l++;
        }

        result += (r - l + 1);
        r++;
    }

    return result;
};
