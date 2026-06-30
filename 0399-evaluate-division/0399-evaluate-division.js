/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    let adj = new Map();

    const addEdge = (a, b, w) => {
        if (!adj.has(a)) adj.set(a, []);
        adj.get(a).push([b, w]);
    }

    for (let i = 0; i < values.length; i++) {
        let [a, b] = equations[i];
        addEdge(a, b, values[i]);
        addEdge(b, a, 1 / values[i]);
    }

    // dfs
    const calc = (cur, target, value, visited) => {
        if (cur === target) return value;
        visited.add(cur);
        for (let [next, weight] of adj.get(cur)) {
            if (!visited.has(next)) {
                let res = calc(next, target, value * weight, visited);
                if (res !== -1) return res;
            }
        }
        return -1;
    }

    return queries.map(([a, b]) => {
        if (!adj.has(a) || !adj.has(b)) return -1;
        else if (a === b) return 1;
        else return calc(a, b, 1, new Set());
    })
};

// a -(1.5)-> b -(2.5)-> c
// bc -(5)-> cd

// equation [a, b]
// 1. determine if a and b are in the graph
// 2. determine if a and b are in the same cluster (connected (in)directly)
// 3. calc the path from a to b

// dfs/bfs
// weighted union-find