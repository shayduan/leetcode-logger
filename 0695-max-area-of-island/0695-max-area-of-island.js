/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // scan the map until find a land cell
    // getArea of the land
        // visit every LAND = 1 mark as VISITED = 2
        // recursively calc the sum of the area -> DFS

    let [m, n] = [grid.length, grid[0].length];
    let maxArea = 0;
    const [OCEAN, LAND, VISITED] = [0, 1, 2];

    const getArea = (i, j) => {
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] !== LAND)
            return 0;
        
        grid[i][j] = VISITED;

        let area = 1;
        area += getArea(i - 1, j);
        area += getArea(i + 1, j);
        area += getArea(i, j - 1);
        area += getArea(i, j + 1);

        return area;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === LAND) {
                maxArea = Math.max(maxArea, getArea(i, j));
            }
        }
    }

    return maxArea;
};