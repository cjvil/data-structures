var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  newInstance.count = 0;
  _.extend(newInstance, queueMethods);
  return newInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
  

};
queueMethods.dequeue = function() {
  var trashBin = this.storage[1];
  for (var key in this.storage) {
    var nextKey = Number(key) + 1;
    this.storage[key] = this.storage[nextKey];
  }
  delete this.storage[0];
  this.count--;
  return trashBin;

};

queueMethods.size = function() {
  if (this.count < 0) {
    return 0;
  }
  return this.count;

};



