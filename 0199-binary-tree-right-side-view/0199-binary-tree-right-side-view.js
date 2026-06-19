/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];

    let queue = [];
    let res = [];

    queue.push(root);
    while (queue.length > 0) {
        let size = queue.length;
        while (size--) {
            let node = queue.shift();
            if (size === 0) res.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }

    return res;
};