var solveQueries = function(nums, queries) {
    let lastOccur = new Map();
    let minDiff = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
    let n = nums.length;

    // Forward pass
    for (let i = 0; i < n; i++) {
        if (lastOccur.has(nums[i])) {
            let prev = lastOccur.get(nums[i]);
            let d = i - prev;

            minDiff[i] = Math.min(minDiff[i], d);
            minDiff[prev] = Math.min(minDiff[prev], d);
        }
        lastOccur.set(nums[i], i); // update always
    }

    // Reset map for circular pass
    

    // Backward pass (to handle circular case)
    for (let i = 0; i<n; i++) {
        if (minDiff[i] == Number.MAX_SAFE_INTEGER)continue;
        if (lastOccur.has(nums[i])) {
            let prev = lastOccur.get(nums[i]);
            let d = Math.abs(prev - i);

            minDiff[i] = Math.min(minDiff[i], Math.min(n-d,d));
            minDiff[prev] = Math.min(minDiff[prev],  Math.min(n-d,d));
        }
        lastOccur.set(nums[i], i);
    }

    // Circular wrap adjustment
    for (let i = 0; i < n; i++) {
        if (minDiff[i] !== Number.MAX_SAFE_INTEGER) {
            minDiff[i] = Math.min(minDiff[i], n - minDiff[i]);
        }
    }

    // Answer queries
    let answers = [];
    for (let q of queries) {
        answers.push(
            minDiff[q] === Number.MAX_SAFE_INTEGER ? -1 : minDiff[q]
        );
    }

    return answers;
};