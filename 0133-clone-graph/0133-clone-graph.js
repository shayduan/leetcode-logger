/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */

// dfs
// start with index i -> [j1,j2,j3] && i != visited
// for each jx -> find its adj, mark as visited until done
var cloneGraph = function(node) {
    let visited = new Map(); // node -> cloneNode

    // clone, and return the cloneNode
    const dfs = (node) => {
        if (node === null) return node;

        if (visited.has(node)) {
            return visited.get(node);
        }
        
        let cloneNode = new _Node(node.val);
        visited.set(node, cloneNode);

        for (let n of node.neighbors) {
            cloneNode.neighbors.push(dfs(n));
        }

        return cloneNode;
    }

    return dfs(node);
};
