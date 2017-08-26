/*
  if we meet the base case where n = 1
    return 1
  else
    divide it into a smaller factorial
  
  if (n === 1) {
    return n
  }
  return n * factorial(n - 1)



*/




var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  // if array at index is empty set it to empty array
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, []);
  }

  // save what is currently at index
  var output = this._storage.get(index);
  
  //and add key inside tuple list
  output.push([k, v]);
  
  // send modified tuples back into array
  this._storage.set(index, output);
};


// retrieve accepts a key and returns value
HashTable.prototype.retrieve = function(k) {
  // get hashed index for key
  var index = getIndexBelowMaxForKey(k, this._limit);
  //calculate length of tuples at index
  tuples = this._storage.get(index);
  var found = false;
  //return false if length is zero
  if (tuples.length === 0) {
    return found;
  }
  //iterate over each item in the tuple
  _.each(tuples, function(tuple) {
    if (tuple[0] === k) {
      found = tuple[1];
    }
  });
  //determine if the first string is the same string as k
  //if the first string is the same string, return the tuples second string
  // if the string is not found within any tuples
  // return false;
  return found;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


