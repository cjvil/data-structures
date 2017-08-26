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
    if (parent.value > value && parent.left === null) {
      parent.left = newNode;
    } else if (parent.value > value) {
      checkValue(parent.left);
    } else if (parent.value < value && parent.right === null) {
      parent.right = newNode;
    } else if (parent.value < value) {
      checkValue(parent.right); 
    }
  };

  checkValue(parent);  
}; 

methods.contains = function(target) {
  var parent = this;
  var findTarget = function(parent) {
    if (parent.value === target) {
      return true;
    }

    if (parent.value > target && parent.left === null) {
      return false;

    } else if (parent.value > target) {
      return findTarget(parent.left);

    } else if (parent.value < target && parent.right === null) {
      return false;

    } else if (parent.value < target) {
      return findTarget(parent.right); 
    }

    return false;
  };

  return findTarget(parent);
  
};


// invoke callback on parent node value
// if node.left not null
  // recurse on left node
// if node.right not null
  // recurse on right node

methods.depthFirstLog = function(callback) {
  var invokeFuncOn = function(node) {
    callback(node.value);

    if (node.left) {
      invokeFuncOn(node.left);
    }

    if (node.right) {
      invokeFuncOn(node.right);
    }
  };

  invokeFuncOn(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
