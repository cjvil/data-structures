var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Queue.prototype.dequeue = function() {
  var trashBin = this.storage[1];

  for (var key in this.storage) {
    var nextKey = Number(key) + 1;
    this.storage[key] = this.storage[nextKey];
  }

  this.count--;
  delete this.storage[0];
  return trashBin;
};

Queue.prototype.size = function() {
  return this.count < 0 ? 0 : this.count;
};
