/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const node = root

  if (node === null) {
    return node
  }

  let temp = node.left
  node.left = node.right
  node.right = temp

  if (node.left !== null) {
    invertTree(node.left)
  }
  if (node.right !== null) {
    invertTree(node.right)
  }
  return node
}

module.exports = { invertTree }