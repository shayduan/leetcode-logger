/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    let adj = new Array(n + 1).fill(0).map(_ => new Array()); // ajd[u] = [v, w]
    for (let [u, v, w] of times) adj[u].push([v, w]);

    let dist = new Array(n + 1).fill(Infinity);
    dist[k] = 0;
    
    let minHeap = new MinPriorityQueue(el => el[0]); // [tentative_dist, node]
    minHeap.enqueue([0, k]);

    while (minHeap.size()) {
        let [tentativeDist, node] = minHeap.dequeue();
        if (tentativeDist > dist[node]) continue;
        for (let [next, weight] of adj[node]) {
            if (tentativeDist + weight < dist[next]) {
                dist[next] = tentativeDist + weight;
                minHeap.enqueue([dist[next], next]);
            }
        }
    }
    
    let max = 0;
    for (let i = 1; i <= n; i++) {
        max = Math.max(max, dist[i]);
    }

    return max === Infinity ? -1 : max;
};

// Dijkstra
// adj list, dist array, heap, relaxation