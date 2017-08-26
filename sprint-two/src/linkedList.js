var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  

  list.addToTail = function(value) {
    list[value] = Node(value);

    if(list.head === null) {
      list.head = list[value];
    } else {
      list.tail.next = list[value];
    }

    list.tail = list[value];
  };

  list.removeHead = function() {
    // if list empty, return null
    if(!list.head) {
      return undefined;
    }

    // save current head value in temp var previousHead
    var previousHeadValue = list.head.value;

    // reassign head to head.next
    list.head = list.head.next;

    // return previousHead
    return previousHeadValue;
    
  };

  list.contains = function(target) {
    var found = false;
  
    var search = function(node, target) {
      if(node.value === target) {
        found = true;
      } else if(node.next !== null) {
        search(node.next, target);
      }
        
    };

    search(list.head, target);

    return found;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
