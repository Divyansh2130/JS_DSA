/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (arr) {
    let left = 0, right = arr.length - 1;
    let ans = 0;

    while (left < right) {
        let area = Math.min(arr[left], arr[right]) * (right - left);
        ans = Math.max(area, ans);

        if (arr[left] > arr[right]) {
            right--;
        } else {
            left++;
        }
    }
    return ans;
};