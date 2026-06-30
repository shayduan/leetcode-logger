/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    let visited = new Array(n).fill(false);

    const dfs = (city) => {
        visited[city] = true;
        for (let i = 0; i < n; i++) {
            if (isConnected[city][i] && !visited[i]) {
                dfs(i);
            }
        }
    }

    let cluster = 0;
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            cluster++;
            dfs(i);
        }
    }

    return cluster;
};

// input: adjacency maxtrix
// output: # of connected components

// dfs
// 