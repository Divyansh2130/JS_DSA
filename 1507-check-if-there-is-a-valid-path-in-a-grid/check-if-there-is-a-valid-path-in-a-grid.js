/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function (grid) {

    let m = grid.length;
    let n = grid[0].length;

    if (m * n === 1) return true;

    // left=-1; right=1; top=2; bottom=-2;
    let dir = new Map();
    dir.set(1, [-1, 1]);
    dir.set(2, [2, -2]);
    dir.set(3, [-1, -2]);
    dir.set(4, [1, -2]);
    dir.set(5, [-1, 2]);
    dir.set(6, [2, 1]);

    let move = (i, j, prev) => {
        while (true) {
            if (i < 0 || i >= m || j < 0 || j >= n) return false;

            let [initial, out] = dir.get(grid[i][j]);

            if (prev !== -initial && prev !== -out) return false;

            if (i === m - 1 && j === n - 1) return true;
            if(i==0 && j==0)return false;
            prev = (prev === -initial) ? out : initial;

            if (prev === 1) j++;
            else if (prev === -1) j--;
            else if (prev === -2) i++;
            else if (prev === 2) i--;
        }
    };

    let i = 0, j = 0;
    let prev = dir.get(grid[i][j])[1];

    // Special handling for type 4
    if (grid[0][0] === 4) {
        if (move(1, 0, -2)) return true;
        if (move(0, 1, 1)) return true;
        return false;
    }

    // Initial move logic
    if (grid[i][j] === 1) j++;
    else if (grid[i][j] === 2) i++;
    else if (grid[i][j] === 3) i++;
    else if (grid[i][j] === 5) return false;
    else if (grid[i][j] === 6) j++;

    // Main traversal
    while (true) {
        if (i < 0 || i >= m || j < 0 || j >= n) return false;

        let [initial, out] = dir.get(grid[i][j]);

        if (prev !== -initial && prev !== -out) return false;

        if (i === m - 1 && j === n - 1) return true;

        prev = (prev === -initial) ? out : initial;

        if (prev === 1) j++;
        else if (prev === -1) j--;
        else if (prev === -2) i++;
        else if (prev === 2) i--;
    }
};