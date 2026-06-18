/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let [m, n] = [grid.length, grid[0].length];

    const [WATER, LAND, VISITED] = ["0", "1", "2"];
    const DIR = [[0, 1], [0, -1], [-1, 0], [1, 0]];
    const isValid = (i, j) => i >= 0 && i < m && j >= 0 && j < n;

    // DFS
    const visit = (i, j) => {
        if (!isValid(i, j) || !(grid[i][j] === LAND)) return;
        grid[i][j] = VISITED;
        for (let [di, dj] of DIR) {
            visit(i + di, j + dj);
        }
        // return;
    }

    let count = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === LAND) {
                visit(i, j);
                count++;
            }
        }
    }

    return count;
};