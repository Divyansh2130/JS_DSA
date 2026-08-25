/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    const n = nums.length;
    let xor = 0;
    let countZero = 0;

    for (const num of nums) {
        if (num === 0) {
            countZero++;
        }

        xor ^= num;
    }

    if (xor !== 0) return n;
    if (countZero === n) return 0;

    return n - 1;
};