/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let map = new Map(); // val -> inorder index
    inorder.forEach((val, i) => { map.set(val, i); })
    
    let preIndex = 0;
    const build = (inLeft, inRight) => {
        if (inLeft > inRight) return null;

        let rootVal = preorder[preIndex++];
        let node = new TreeNode(rootVal);

        let inIndex = map.get(rootVal);

        node.left = build(inLeft, inIndex - 1);
        node.right = build(inIndex + 1, inRight);

        return node;
    }

    return build(0, inorder.length - 1);
};

// preorder - root; inorder - divide subtrees
// [ [3] ,9,20,15,7]
// [ 9, [3], 15,20,7]