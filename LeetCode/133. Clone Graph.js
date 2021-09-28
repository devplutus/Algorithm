/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
 function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};

   
var cloneGraph = function(node) {
  if (!node) return null
  const Nodes = Array(101).fill(0).map((_, i) => new Node(i, []))
  const queue = [node]
  
  while (queue.length) {
      const current = queue.shift()
      current.neighbors.forEach(n => {
          if (!Nodes[current.val].neighbors.includes(Nodes[n.val])) {
              Nodes[current.val].neighbors.push(Nodes[n.val])
          }
          if (!Nodes[n.val].neighbors.filter(n => n.val === current.val).length) {
              queue.push(n)
          }
      })   
  }
  
  return Nodes[1]
};