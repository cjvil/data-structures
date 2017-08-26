var BinarySearchTree = function(value) {
  var node = {};
  node.left = null;
  node.right = null;
  node.value = value;

  _.extend(node, methods);
  
  return node;
};

var methods = {};

methods.insert = function(value) {
  var newNode = BinarySearchTree(value);
  var parent = this;

  var checkValue = function(parent) {
    if(parent.value > value && parent.left === null) {
      parent.left = newNode;
    } else if(parent.value > value) {
      checkValue(parent.left);
    } else if(parent.value < value && parent.right === null) {
      parent.right = newNode;
    } else if(parent.value < value) {
      checkValue(parent.right); 
    }
  };

  checkValue(parent);  
}; 

methods.contains = function(target) {

};

methods.depthFirstLog = function(callback) {
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
