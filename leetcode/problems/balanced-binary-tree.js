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
var isBalanced = function(root) {
  if (root === null) return true;
  else if (root.left === null && root.right === null) return true;
  else if (Math.abs(dfs(root.left) - dfs(root.right)) > 1) return false;
  else return isBalanced(root.left) && isBalanced(root.right);
};

var dfs = function(root) {
  if (root === null) return 0;
  else if (root.left === null && root.right === null) return 1;
  else return 1 + Math.max(dfs(root.left), dfs(root.right));
}
