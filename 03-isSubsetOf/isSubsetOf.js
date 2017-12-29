/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/


// using indexOf
Array.prototype.isSubsetOf = function(array){
  var result = true;
  for (var i = 0; i < this.length; i++){
    if (array.indexOf(this[i]) === -1){
      result = false;
    }
  }
  return result;
};


// using includes
Array.prototype.isSubsetOf = function(array){
  var result = true;
  for (var i = 0; i < this.length; i++){
    if (!array.includes(this[i])){
      result = false;
    }
  }
  return result;
};



var a = ['commit','push'];
console.log(a.isSubsetOf(['commit','rebase','push','blame']));



var b = ['merge','reset','reset'];
console.log(b.isSubsetOf(['reset','merge','add','commit']));
