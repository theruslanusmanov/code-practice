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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true

  let q1 = [root.left], q2 = [root.right];

  while(q1.length > 0 && q2.length > 0) {
    let node1 = q1.shift();
    let node2 = q2.shift();
    if (!node1 && !node2) continue;
    if (!node1 || !node2 || node1.val !== node2.val) return false;
    q1.push(node1.left);
    q2.push(node2.right);
    q1.push(node1.right);
    q2.push(node2.left);
  }
  return true;
}