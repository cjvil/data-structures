var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  // if array at index is empty set it to empty array
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }
  // get what is currently at index
  var output = this._storage.get(index);
  // add tuple to current values
  output.push([k, v]);
  // send modified tuple array back into storage
  this._storage.set(index, output);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);
  var found;

  if (tuples.length === 0) {
    return undefined;
  }

  _.each(tuples, function(tuple) {
    if (tuple[0] === k) {
      found = tuple[1];
    }
  });

  return found;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = this._storage.get(index);
  var deletionIndex;

  // find index of tuple to delete
  _.each(tuples, function(tuple, tupleIndex) {
    if (tuple[0] === k) {
      deletionIndex = tupleIndex;
    }
  });

  tuples.splice(deletionIndex, 1);
  this._storage.set(index, tuples);
};

// RESIZE
// collect all key-value pairs in var allPairs
// iterate through storage
  // iterate through tuples at index
    // push tuple to allPairs
// create new limited array with diff limit/ change limit (this._storage = LimitedArray(this._limit)
// (need to calculate this: double or half 25 75 ideal tuple: storage ratio)
// iterate through allPairs
  // .insert() key, value (watch out for indices) [i][0], [i][1]

HashTable.prototype.resize = function(newLimit) {
  var allPairs = [];

  this._storage.each(this._storage, function(tupleSet) {
    for (var i = 0; i < tupleSet.length; i++) {
      allPairs.push(tupleSet[i]);
    }
  });

  this._storage = LimitedArray(newLimit);

  _.each(allPairs, function(pair, index) {
    this.insert(pair[index][0], pair[index][1]);
  });

  this.size = allPairs.length;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


