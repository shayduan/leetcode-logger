
var MedianFinder = function() {
    this.low = new MaxPriorityQueue();
    this.high = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.low.enqueue(num);
    this.high.enqueue(this.low.dequeue());
    if (this.low.size() < this.high.size()) {
        this.low.enqueue(this.high.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.low.size() === this.high.size()) {
        return (this.low.front() + this.high.front()) / 2;
    } else {
        return this.low.front();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */