/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */

// max heap
var kClosest = function(points, k) {
    const maxHeap = new MaxPriorityQueue( el => el.distance );
    const getDistance = ([x, y]) => x ** 2 + y ** 2;

    for (let point of points) {
        let distance = getDistance(point);
        maxHeap.enqueue({point, distance});
        if (maxHeap.size() > k) maxHeap.dequeue();
    }

    return maxHeap.toArray().map(el => el.point);
};
