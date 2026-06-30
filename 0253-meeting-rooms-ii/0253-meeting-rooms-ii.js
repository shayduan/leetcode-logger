/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let startTime = intervals.map(i => i[0]).sort((a, b) => a - b);
    let endTime = intervals.map(i => i[1]).sort((a, b) => a - b);

    let n = intervals.length;
    let room = 0, next = 0; // next end meeting
    for (let i = 0; i < n; i++) {
        if (startTime[i] < endTime[next]) room++;
        else {
            next++;
        }
    }
    return room;
};

// overlap -> different rooms
// no overlap -> reuse one room

// eg1:
// 1 - [5, 10], [15, 20]
// 2 - [0, 30]

// group intervals so that intervals are not overlapped