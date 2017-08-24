var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.count = 0;
  newInstance.storage = {};
  _.extend(newInstance, stackMethods);
  return newInstance;

};

var stackMethods = {};


stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;

};

stackMethods.pop = function() {
  var trashBin = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return trashBin;
};

stackMethods.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;
};


