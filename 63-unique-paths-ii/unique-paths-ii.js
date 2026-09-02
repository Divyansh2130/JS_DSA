/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = Array.from({ length: m }, () => Array(n).fill(-1));

    function helper(r, c) {
        if (r < 0 || c < 0) return 0;
        if (obstacleGrid[r][c] === 1) return 0;
        if (r === 0 && c === 0) return 1;
        if (dp[r][c] !== -1) return dp[r][c];

        return dp[r][c] = helper(r - 1, c) + helper(r, c - 1);
    }

    return helper(m - 1, n - 1);
};