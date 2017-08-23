var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    count++;
    storage[count] = value;
    

  };

  someInstance.pop = function() {
    var trashBin = storage[count];
    delete storage[count];
    count--;
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
