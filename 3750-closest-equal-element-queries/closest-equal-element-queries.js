/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const n = nums.length;
    const map = new Map();

    
    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

   
    const ans = new Array(n).fill(-1);

    for (let arr of map.values()) {
        let m = arr.length;
        if (m === 1) continue;

        for (let i = 0; i < m; i++) {
            let curr = arr[i];
            let prev = arr[(i - 1 + m) % m];
            let next = arr[(i + 1) % m];

            let d1 = Math.abs(curr - prev);
            let d2 = Math.abs(curr - next);

            ans[curr] = Math.min(
                Math.min(d1, n - d1),
                Math.min(d2, n - d2)
            );
        }
    }

    return queries.map(q => ans[q]);
};