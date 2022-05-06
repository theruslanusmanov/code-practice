/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function(n, edges) {

  // Edge cases.
  if (n < 2) {
    let centroids = [];
    for (let i = 0; i < n; i++) {
      centroids.push(i);
    }

    return centroids;
  }

  // Build the graph with the adjacency list.
  let neighbors = [];
  for (let i = 0; i < n; i++) {
    neighbors.push([]);
  }

  for (let edge of edges) {
    let start = edge[0],
        end = edge[1];
    neighbors[start].push(end);
    neighbors[end].push(start);
  }

  // Initialize the first layer of leaves.
  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (neighbors[i].length === 1) {
      leaves.push(i);
    }
  }

  // Trim the leaves until reaching the centroids.
  let remainingNodes = n;
  while (remainingNodes > 2) {
    remainingNodes -= leaves.length;
    const newLeaves = [];

    // Remove the current leaves along with the edges.
    for (let leaf of leaves) {
      let neighbor = neighbors[leaf];
      neighbors[neighbor].splice(leaf, 1);

      if (neighbors[neighbor].length === 1) {
        newLeaves.push(neighbor);
      }
    }

    // Prepare for the next round.
    leaves = newLeaves;
  }

  return leaves;
};
