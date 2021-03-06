/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Your code here.
  let obj = {};
  for ( let i = 0; i < arr.length; i++ ) {
    if ( obj[arr[i]] ) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for ( let j = 0; j < arr.length; j ++ ) {
    if ( obj[arr[j]] === 2 ) {
      return arr[j]
    }
  }
  return null
};