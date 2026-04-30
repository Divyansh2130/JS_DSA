function recursion(grid,k,i,j,dp) {
    if (i>=grid.length || j>=grid[0].length) return -1;
    if (k < 0) return -1;

    if (i===grid.length-1 && j===grid[0].length-1) {
    if (grid[i][j] > 0) k--;
        if(k<0)return -1;
        else return grid[i][j];
    }
    if (dp[i][j][k] !== -2) return dp[i][j][k];

    let nK = k;
    if (grid[i][j] > 0) nK--;

    let rightScore = recursion(grid,nK,i,j+1,dp);
    let downScore  = recursion(grid,nK,i+1,j,dp);

    let best = Math.max(rightScore, downScore);

    if (best === -1) {
        dp[i][j][k] = -1;
    } else {
        dp[i][j][k]=grid[i][j]+best;
    }

    return dp[i][j][k];
}

var maxPathScore = function(grid, k) {
    const dp = Array.from({ length: grid.length }, () =>
        Array.from({ length: grid[0].length }, () =>
            Array(k + 1).fill(-2)
        )
    );

    return recursion(grid, k, 0, 0, dp);
};