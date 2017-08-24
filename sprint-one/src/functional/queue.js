var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    count++;
    storage[count] = value;
  };
  // removes the oldest item, after newer items have already been added and removed
  someInstance.dequeue = function() {
    var trashBin = storage[1];
    count--;
    for (var key in storage) {
      var previousKey = Number(key) + 1;
      storage[key] = storage[previousKey];
    }
    return trashBin;
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    }
    return count;
  };

  return someInstance;
};
