/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill(0).map(_ => new Array()); // adjList[pre] = course
    const indegree = new Array(numCourses).fill(0);

    for (let [course, pre] of prerequisites) {
        adjList[pre].push(course);
        indegree[course]++;
    }

    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    let finished = 0;
    while (queue.length) {
        let cur = queue.shift();
        finished++;
        for (let next of adjList[cur]) {
            indegree[next]--;
            if (indegree[next] === 0) queue.push(next);
        }
    }

    return finished === numCourses;
};

// [course, prerqst]
// graph problem, DAG - directed acyclic graph (no cycle)
// Kahn's algorithm
// 1. construct an adjacency list, calc the indegree of each node
// 2. keep removing nodes with 0 indegree
// 3. check if all nodes have been removed