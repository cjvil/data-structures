

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var arrayOfKeys = [];
  thisEdge = this.edges;
  // edge case: check if node exists first
  delete this.nodes[node];
  // look inside of the edges property 
  for (var key in thisEdge) {
    arrayOfKeys.push(key);
  }
  _.each(arrayOfKeys, function(key) {
    if (key.includes(node)) {
      delete thisEdge[key];
    }
  });
  
  //use _.each to check the value of edge edge
  //if the value within an edge matches the value of the node
  // delete that edge object
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var found = false;
  if (this.edges.hasOwnProperty(fromNode + ',' + toNode)) {
    return found = true;
  }
  return found;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode + ',' + toNode] = [fromNode, toNode];
  this.edges[toNode + ',' + fromNode] = [toNode, fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.edges[fromNode + ',' + toNode]; 
  delete this.edges[toNode + ',' + fromNode]; 
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodes, cb);
};

Graph.prototype.nodes = {};

Graph.prototype.edges = {};

/*
 * Complexity: What is the time complexity of the above functions?
 */


