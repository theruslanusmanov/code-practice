/**
 * DFS traversal.
 * At each node, get the maximum path sum from it's left and right subtree. If it's negative, no need to consider it.
 * Each leaf node has maximum path sum equal to the node value.
 * At each node level, check if the path-sum value exceeds the current max-path-sum which starts from the left subtree to the right subtree of the node.
 * In case not a leaf node, the maximum path sum at the node will be the maximum of the node value, the sum of the path along the left subtree, or the sum of the path along the right subtree. Return this value to it's parent, as this will be the maximum path sum along the left/right subtree for the parent node.
 * @param root
 * @returns {number}
 */
var maxPathSum = function(root) {
  let maxSum = -Infinity;

  function getMaxPathSum(root) {
    if (!root) {
      return 0;
    }

    const leftPathSum = Math.max(getMaxPathSum(root.left), 0),
      rightPathSum = Math.max(getMaxPathSum(root.right), 0);

    maxSum = Math.max(maxSum, root.val + leftPathSum + rightPathSum);

    return Math.max(root.val + leftPathSum, root.val + rightPathSum);
  }

  getMaxPathSum(root);

  return maxSum;
};
