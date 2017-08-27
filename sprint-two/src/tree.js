var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var found = false;
  var parent = this;

  var childSearch = function(parent) {
    var children = parent.children;

    if (parent.value === target) {
      return found = true;
    }

    if (children.length > 0) {
      console.log(parent);    
      console.log(children);
      _.each(children, function(child) {
        childSearch(child);
      });
    }
  };    

  childSearch(parent, target);
  return found;    
};

/*
* Complexity: What is the time complexity of the above functions?
*/