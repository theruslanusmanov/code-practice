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
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  let queue = [root];
  let res = 0;
  let dpt = 1;

  while(queue.length) {
    const currLen = queue.length;
    for (let i = 0; i < currLen; i++) {
      let node = queue.shift();
      if (!node.left && !node.right) return dpt;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    dpt++;
  }
  return dpt;
};