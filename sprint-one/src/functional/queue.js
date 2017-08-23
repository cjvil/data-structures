var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
  };

  someInstance.dequeue = function() {
    count--;
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    }
    return count;
  };

  return someInstance;
};
