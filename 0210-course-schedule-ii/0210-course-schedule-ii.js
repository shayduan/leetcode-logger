/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

// N as # of cousese; E as # of edges (prerequisites)
// O(N + E), O(N + E)
var findOrder = function(numCourses, prerequisites) {
    const adj = new Array(numCourses).fill(0).map(_ => new Array());
    const indegree = new Array(numCourses).fill(0);

    for (let [course, pre] of prerequisites) {
        adj[pre].push(course);
        indegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    // removing nodes with 0 indegree
    let order = [], cur = 0;
    while (queue.length > cur) {
        let course = queue[cur++];
        for (let next of adj[course]) {
            indegree[next]--;
            if (indegree[next] === 0) queue.push(next);
        }
    }

    return queue.length === numCourses ? queue : [];
};
