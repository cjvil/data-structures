var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = Object.create(queueMethods);
  newInstance.count = 0;
  newInstance.storage = {};

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

  this.count--;

  delete this.storage[0];

  return trashBin;
};

queueMethods.size = function() {
  return this.count < 0 ? 0 : this.count;
};
