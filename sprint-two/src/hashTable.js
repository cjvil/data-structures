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


// retrieve accepts a key and returns boolean
HashTable.prototype.retrieve = function(k) {
  // get hashed index for key
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


